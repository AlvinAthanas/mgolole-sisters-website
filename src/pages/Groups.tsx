import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Chip,
    Avatar,
    Divider,
    Paper,
    Card,
    CardContent,
    IconButton,
    Grid,
    alpha,
    InputAdornment,
    Menu,
    MenuItem,
    ListItemIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Tooltip,
    Stack,
    CircularProgress,
} from "@mui/material";
import {
    Add as AddIcon,
    Group as GroupIcon,
    Search as SearchIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Security as SecurityIcon,
    MoreVert as MoreVertIcon,
    Visibility as VisibilityIcon,
    SelectAll as SelectAllIcon,
    Clear as ClearIcon,
} from "@mui/icons-material";
import {type SystemGroup, usePermissions } from "../contexts/PermissionContext";
import postData from "../utils/AxioPost";
import { useToken } from "../contexts/TokenContext";
import { useSnackbar } from "../contexts/SnackbarAlertContext";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";
import {BASE_URL} from "../utils/BaseUrl.ts";

interface Permission {
    id: number;
    name: string;
    codename: string;
    content_type?: string;
}

// Parse permission into model and action
const parsePermission = (permission: Permission) => {
    const parts = permission.codename.split("_");
    const action = parts[0]; // add, view, change, delete
    const model = parts.slice(1).join("_");
    return { action, model, fullName: permission.name };
};

// Group permissions by model
const groupPermissionsByModel = (permissions: Permission[]) => {
    const grouped: Record<string, Record<string, Permission>> = {};

    permissions.forEach((perm) => {
        const { action, model } = parsePermission(perm);
        if (!grouped[model]) {
            grouped[model] = {};
        }
        grouped[model][action] = perm;
    });

    return grouped;
};

function Groups() {
    const { muiTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const [viewOpen, setViewOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [selectedPermissions, setSelectedPermissions] = useState<Set<string>>(new Set());
    const [searchTerm, setSearchTerm] = useState("");
    const [permissionSearch, setPermissionSearch] = useState("");
    const [editingGroup, setEditingGroup] = useState<SystemGroup | null>(null);
    const [deletingGroup, setDeletingGroup] = useState<SystemGroup | null>(null);
    const [viewingGroup, setViewingGroup] = useState<SystemGroup | null>(null);
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
    const [currentGroup, setCurrentGroup] = useState<SystemGroup | null>(null);
    const [loading, setLoading] = useState(false);

    const { permissions, systemGroups, refreshPermissions } = usePermissions();
    const { token, bearer_token, setToken, setBearerToken } = useToken();
    const { showSnackbar } = useSnackbar();
    const { user } = useUser();

    // Group permissions by model
    const groupedPermissions = groupPermissionsByModel(permissions);
    const models = Object.keys(groupedPermissions).sort();
    const actions = ["add", "view", "change", "delete"];

    // Filter models based on search
    const filteredModels = models.filter((model) =>
        model.toLowerCase().includes(permissionSearch.toLowerCase())
    );

    // Reset form when dialog closes
    useEffect(() => {
        if (!open) {
            setGroupName("");
            setSelectedPermissions(new Set());
            setEditingGroup(null);
            setPermissionSearch("");
        }
    }, [open]);

    // Initialize selected permissions when editing
    useEffect(() => {
        if (editingGroup) {
            const permNames = new Set(editingGroup.permissions.map((p) => p.name));
            setSelectedPermissions(permNames);
        }
    }, [editingGroup]);

    // Handle permission toggle
    const handlePermissionToggle = (model: string, action: string) => {
        const permission = groupedPermissions[model]?.[action];
        if (!permission) return;

        const newSelected = new Set(selectedPermissions);
        if (newSelected.has(permission.name)) {
            newSelected.delete(permission.name);
        } else {
            newSelected.add(permission.name);
        }
        setSelectedPermissions(newSelected);
    };

    // Check if permission is selected
    const isPermissionSelected = (model: string, action: string) => {
        const permission = groupedPermissions[model]?.[action];
        return permission ? selectedPermissions.has(permission.name) : false;
    };

    // Select all permissions for a model
    const handleSelectAllModel = (model: string) => {
        const newSelected = new Set(selectedPermissions);
        const modelPerms = groupedPermissions[model];
        const allSelected = actions.every(
            (action) => modelPerms[action] && newSelected.has(modelPerms[action].name)
        );

        actions.forEach((action) => {
            const perm = modelPerms[action];
            if (perm) {
                if (allSelected) {
                    newSelected.delete(perm.name);
                } else {
                    newSelected.add(perm.name);
                }
            }
        });

        setSelectedPermissions(newSelected);
    };

    // Select all permissions for an action
    const handleSelectAllAction = (action: string) => {
        const newSelected = new Set(selectedPermissions);
        const allSelected = filteredModels.every((model) => {
            const perm = groupedPermissions[model]?.[action];
            return perm ? newSelected.has(perm.name) : true;
        });

        filteredModels.forEach((model) => {
            const perm = groupedPermissions[model]?.[action];
            if (perm) {
                if (allSelected) {
                    newSelected.delete(perm.name);
                } else {
                    newSelected.add(perm.name);
                }
            }
        });

        setSelectedPermissions(newSelected);
    };

    // Clear all selections
    const handleClearAll = () => {
        setSelectedPermissions(new Set());
    };

    // Handle save group
    const handleSaveGroup = async () => {
        if (!groupName) return;

        setLoading(true);

        const url = editingGroup
            ? `${BASE_URL}/${editingGroup.id}`
            : `${BASE_URL}/create-group`;

        const groupData = {
            id: editingGroup?.id,
            name: groupName,
            permissions: Array.from(selectedPermissions),
        };

        const result = await postData(
            url,
            groupData,
            token,
            bearer_token,
            undefined,
            setToken,
            setBearerToken
        );

        setLoading(false);

        if (!result.status) {
            showSnackbar(
                `Something went wrong while ${editingGroup ? "updating" : "creating"} group`,
                "warning"
            );
            return;
        }

        showSnackbar(
            `Group ${editingGroup ? "updated" : "created"} successfully!`,
            "success"
        );
        refreshPermissions();
        setOpen(false);
    };

    // Handle delete group
    const handleDeleteGroup = async () => {
        if (!deletingGroup) return;

        setLoading(true);

        const url = `${BASE_URL}/delete-group/${deletingGroup.id}`;

        const result = await postData(
            url,
            { id: deletingGroup.id },
            token,
            bearer_token,
            undefined,
            setToken,
            setBearerToken
        );

        setLoading(false);

        if (!result.status) {
            showSnackbar("Something went wrong while deleting group", "warning");
            return;
        }

        showSnackbar("Group deleted successfully!", "success");
        refreshPermissions();
        setDeleteOpen(false);
        setDeletingGroup(null);
    };

    // Open edit dialog
    const handleEdit = (group: SystemGroup) => {
        setEditingGroup(group);
        setGroupName(group.name);
        setOpen(true);
        setMenuAnchor(null);
    };

    // Open delete dialog
    const handleDelete = (group: SystemGroup) => {
        setDeletingGroup(group);
        setDeleteOpen(true);
        setMenuAnchor(null);
    };

    // Open view dialog
    const handleView = (group: SystemGroup) => {
        setViewingGroup(group);
        setViewOpen(true);
        setMenuAnchor(null);
    };

    // Filter groups based on search
    const filteredGroups = systemGroups.filter((group) =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 1400, margin: "0 auto" }}>
            {/* Header */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: { xs: 2, sm: 0 },
                    mb: 4,
                    background: `linear-gradient(135deg, ${muiTheme.palette.primary.main} 0%, ${muiTheme.palette.primary.dark} 100%)`,
                    borderRadius: 3,
                    p: { xs: 2, sm: 3 },
                    color: muiTheme.palette.primary.contrastText,
                }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                    >
                        <GroupIcon sx={{ fontSize: 32, mr: 1, verticalAlign: "bottom" }} />
                        Groups Management
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ opacity: 0.9, fontSize: { xs: "0.875rem", sm: "1rem" } }}
                    >
                        Create and manage user groups with granular permissions
                    </Typography>
                </Box>
                {user?.permissions?.includes("retail_management_api.add_systemgroup") && (
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setOpen(true)}
                        sx={{
                            bgcolor: muiTheme.palette.background.paper,
                            color: muiTheme.palette.primary.main,
                            fontWeight: "bold",
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                                bgcolor: alpha(muiTheme.palette.background.paper, 0.9),
                            },
                        }}
                    >
                        New Group
                    </Button>
                )}
            </Box>

            {/* Search Bar */}
            <Paper
                sx={{
                    p: 2,
                    mb: 3,
                    borderRadius: 2,
                }}
            >
                <TextField
                    fullWidth
                    placeholder="Search groups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Paper>

            {/* Groups Grid */}
            <Grid container spacing={3}>
                {filteredGroups.length > 0 ? (
                    filteredGroups.map((group) => (
                        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={group.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    borderRadius: 2,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: muiTheme.shadows[8],
                                    },
                                }}
                            >
                                <CardContent>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                        <Avatar
                                            sx={{
                                                bgcolor: alpha(muiTheme.palette.primary.main, 0.1),
                                                color: muiTheme.palette.primary.main,
                                                mr: 2,
                                            }}
                                        >
                                            <GroupIcon />
                                        </Avatar>
                                        <Typography variant="h6" fontWeight="bold" sx={{ flex: 1 }}>
                                            {group.name}
                                        </Typography>
                                        <IconButton
                                            size="small"
                                            onClick={(e) => {
                                                setMenuAnchor(e.currentTarget);
                                                setCurrentGroup(group);
                                            }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Box>

                                    <Divider sx={{ my: 2 }} />

                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        <SecurityIcon
                                            sx={{ fontSize: 16, mr: 0.5, verticalAlign: "text-bottom" }}
                                        />
                                        {group.permissions.length} Permissions
                                    </Typography>

                                    <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {group.permissions.slice(0, 4).map((perm) => (
                                            <Chip
                                                key={perm.id}
                                                label={perm.codename}
                                                size="small"
                                                color="primary"
                                                variant="outlined"
                                            />
                                        ))}
                                        {group.permissions.length > 4 && (
                                            <Chip
                                                label={`+${group.permissions.length - 4} more`}
                                                size="small"
                                                variant="outlined"
                                            />
                                        )}
                                    </Box>

                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        size="small"
                                        sx={{ mt: 2 }}
                                        onClick={() => handleView(group)}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Grid size={{ xs: 12 }}>
                        <Paper
                            sx={{
                                p: 6,
                                textAlign: "center",
                                borderRadius: 3,
                                background: alpha(muiTheme.palette.background.paper, 0.5),
                            }}
                        >
                            <GroupIcon sx={{ fontSize: 60, color: "text.secondary", mb: 2 }} />
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                No groups found
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                {searchTerm
                                    ? "Try a different search term"
                                    : "Create your first group to get started"}
                            </Typography>
                            {user?.permissions?.includes("retail_management_api.add_systemgroup") && (
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon />}
                                    onClick={() => setOpen(true)}
                                >
                                    Create Group
                                </Button>
                            )}
                        </Paper>
                    </Grid>
                )}
            </Grid>

            {/* Context Menu */}
            <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
                {user?.permissions?.includes("retail_management_api.view_systemgroup") && (
                    <MenuItem onClick={() => currentGroup && handleView(currentGroup)}>
                        <ListItemIcon>
                            <VisibilityIcon fontSize="small" />
                        </ListItemIcon>
                        View Details
                    </MenuItem>
                )}
                {user?.permissions?.includes("retail_management_api.change_systemgroup") && (
                    <MenuItem onClick={() => currentGroup && handleEdit(currentGroup)}>
                        <ListItemIcon>
                            <EditIcon fontSize="small" />
                        </ListItemIcon>
                        Edit Group
                    </MenuItem>
                )}
                {user?.permissions?.includes("retail_management_api.delete_systemgroup") && (
                    <MenuItem
                        onClick={() => currentGroup && handleDelete(currentGroup)}
                        sx={{ color: "error.main" }}
                    >
                        <ListItemIcon>
                            <DeleteIcon fontSize="small" color="error" />
                        </ListItemIcon>
                        Delete Group
                    </MenuItem>
                )}
            </Menu>

            {/* Create/Edit Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg" fullWidth>
                <DialogTitle
                    sx={{
                        background: `linear-gradient(135deg, ${muiTheme.palette.primary.main} 0%, ${muiTheme.palette.primary.dark} 100%)`,
                        color: muiTheme.palette.primary.contrastText,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AddIcon sx={{ mr: 1 }} />
                        {editingGroup ? "Edit Group" : "Create New Group"}
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ pt: 3 }}>
                    <TextField
                        fullWidth
                        label="Group Name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        sx={{ mb: 3 }}
                    />

                    <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                            <TextField
                                placeholder="Search models..."
                                size="small"
                                value={permissionSearch}
                                onChange={(e) => setPermissionSearch(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ flex: 1 }}
                            />
                            <Button
                                variant="outlined"
                                size="small"
                                startIcon={<ClearIcon />}
                                onClick={handleClearAll}
                            >
                                Clear All
                            </Button>
                        </Stack>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Selected: {selectedPermissions.size} permissions
                        </Typography>

                        <TableContainer sx={{ maxHeight: 500 }}>
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                fontWeight: "bold",
                                                bgcolor: alpha(muiTheme.palette.primary.main, 0.05),
                                            }}
                                        >
                                            Model
                                        </TableCell>
                                        {actions.map((action) => (
                                            <TableCell
                                                key={action}
                                                align="center"
                                                sx={{
                                                    fontWeight: "bold",
                                                    bgcolor: alpha(muiTheme.palette.primary.main, 0.05),
                                                }}
                                            >
                                                <Tooltip title={`Select all ${action}`}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => handleSelectAllAction(action)}
                                                    >
                                                        <Typography
                                                            variant="caption"
                                                            sx={{ textTransform: "capitalize" }}
                                                        >
                                                            {action}
                                                        </Typography>
                                                        <SelectAllIcon
                                                            fontSize="small"
                                                            sx={{ mt: 0.5, opacity: 0.7 }}
                                                        />
                                                    </Box>
                                                </Tooltip>
                                            </TableCell>
                                        ))}
                                        <TableCell
                                            align="center"
                                            sx={{
                                                fontWeight: "bold",
                                                bgcolor: alpha(muiTheme.palette.primary.main, 0.05),
                                            }}
                                        >
                                            All
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredModels.map((model) => (
                                        <TableRow key={model} hover>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                                                    {model.replace(/_/g, " ")}
                                                </Typography>
                                            </TableCell>
                                            {actions.map((action) => {
                                                const permission = groupedPermissions[model]?.[action];
                                                return (
                                                    <TableCell key={action} align="center">
                                                        {permission ? (
                                                            <Checkbox
                                                                size="small"
                                                                checked={isPermissionSelected(model, action)}
                                                                onChange={() =>
                                                                    handlePermissionToggle(model, action)
                                                                }
                                                                color="primary"
                                                            />
                                                        ) : (
                                                            <Typography variant="body2" color="text.disabled">
                                                                -
                                                            </Typography>
                                                        )}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell align="center">
                                                <Tooltip title="Select all for this model">
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => handleSelectAllModel(model)}
                                                    >
                                                        <SelectAllIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button onClick={() => setOpen(false)} variant="outlined" disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSaveGroup}
                        disabled={!groupName || loading}
                        startIcon={loading ? <CircularProgress size={20} /> : null}
                    >
                        {editingGroup ? "Update Group" : "Create Group"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* View Dialog */}
            <Dialog open={viewOpen} onClose={() => setViewOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <GroupIcon sx={{ mr: 1 }} />
                        Group Details: {viewingGroup?.name}
                    </Box>
                </DialogTitle>
                <DialogContent>
                    {viewingGroup && (
                        <Box>
                            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                Permissions ({viewingGroup.permissions.length})
                            </Typography>
                            <TableContainer sx={{ mt: 2 }}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "bold" }}>Permission Name</TableCell>
                                            <TableCell sx={{ fontWeight: "bold" }}>Codename</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {viewingGroup.permissions.map((perm) => (
                                            <TableRow key={perm.id} hover>
                                                <TableCell>{perm.name}</TableCell>
                                                <TableCell>
                                                    <Chip
                                                        label={perm.codename}
                                                        size="small"
                                                        variant="outlined"
                                                        color="primary"
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setViewOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Delete Dialog */}
            <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} maxWidth="sm">
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete the group "{deletingGroup?.name}"? This action
                        cannot be undone.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteOpen(false)} disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDeleteGroup}
                        color="error"
                        variant="contained"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : null}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Groups;