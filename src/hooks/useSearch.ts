import {useQuery} from "@tanstack/react-query";
import {authService} from "@/services/auth.service";
import {userService} from "@/services/user.service";
import {KEYS} from "@/constants/query-keys.constants";

export function useSearchUsers(query: string, type: string) {
    const { data, isLoading, isSuccess, error } = useQuery({
        queryKey: [KEYS.search_users, query],
        queryFn: () => userService.searchUsers(query),
        enabled: type === "small",
        retry: 1
    })

    return { data, isLoading, isSuccess , error}
}

