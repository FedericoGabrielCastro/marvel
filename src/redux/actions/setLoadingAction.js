import { LOADING } from "@redux/types"

/**
 * setLoadingAction.
 * 
 * Purpose:
 * - Action to dispatch type LOADING.
 * 
 * @returns dispatch loading type.
 */
export const setLoadingAction = () => ({
    type: LOADING,
})
