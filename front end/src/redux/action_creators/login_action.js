import { SAVE_USER_INFO, DELETE_USER_INFO } from "../action_types"
export const createSaveUserInfoAction = (value) => ({ type: SAVE_USER_INFO, data: value })
export const createDeleteUserInfoAction = () => {
    //sessionStorage.removeItem()
    sessionStorage.clear();

    return { type: DELETE_USER_INFO }
}
