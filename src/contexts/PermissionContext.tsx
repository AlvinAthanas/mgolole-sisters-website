// src/contexts/PermissionContext.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import fetchData from "../utils/AxioGet";
import { useToken } from "./TokenContext";
import { useAuthentication } from "./AuthContext";
import {BASE_URL} from "../utils/BaseUrl.ts";

// Individual permission type
export type Permission = {
    id: number;
    name: string;
    codename: string;
    content_type: string;
};

// System group type, including its tied permissions
export type SystemGroup = {
    id: number;
    name: string;
    permissions: Permission[];
};

// Context type
type PermissionContextType = {
    permissions: Permission[];
    systemGroups: SystemGroup[];
    refreshPermissions: () => void;
    updatePermissions: () => void;
};

// Context instance
const PermissionContext = createContext<PermissionContextType | undefined>(undefined);

export function PermissionProvider({ children }: { children: ReactNode }) {
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const [systemGroups, setSystemGroups] = useState<SystemGroup[]>([]);
    const { bearer_token, setToken, setBearerToken } = useToken();
    const { isAuthenticated } = useAuthentication();

    const fetchPermissions = async () => {
        if (!bearer_token) return;

        try {
            const url = `${BASE_URL}/all-permissions`;
            const result = await fetchData(url, bearer_token, undefined, setToken, setBearerToken) as {
                status: boolean;
                response: {
                    success: boolean;
                    body: {
                        permissions: Permission[];
                        system_groups: SystemGroup[];
                    };
                };
            };

            if (result?.status && result.response.body) {
                setPermissions(result.response.body.permissions || []);
                setSystemGroups(result.response.body.system_groups || []);
            } else {
                setPermissions([]);
                setSystemGroups([]);
            }
        } catch (err) {
            console.error("Failed to fetch permissions", err);
            setPermissions([]);
            setSystemGroups([]);
        }
    };

    // Fetch automatically when token changes
    useEffect(() => {
        isAuthenticated && fetchPermissions();
    }, [bearer_token]);

    // Explicit updater exposed to components
    const updatePermissions = () => fetchPermissions();

    return (
        <PermissionContext.Provider
            value={{
                permissions,
                systemGroups,
                refreshPermissions: fetchPermissions,
                updatePermissions,
            }}
        >
            {children}
        </PermissionContext.Provider>
    );
}

// Hook for consuming the permission context
export function usePermissions() {
    const context = useContext(PermissionContext);
    if (!context) {
        throw new Error("usePermissions must be used within PermissionProvider");
    }
    return context;
}
