import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'
import {useProfile} from "@/hooks/user/useProfile";
import {TypeResponseUpdateProfile} from "@/types/user.types";



export function useInitialData(reset: UseFormReset<TypeResponseUpdateProfile>, id: number | undefined) {
    const { data, isSuccess } = useProfile(id || 0)

    useEffect(() => {
        if (isSuccess && data) {
            reset({
                name: data.name,
                bio: data.bio
            })
        }
    }, [isSuccess])
}
