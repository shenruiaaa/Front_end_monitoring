import { SAVE_USER_INFO, DELETE_USER_INFO } from "../action_types";
let initState = {
    user: {},
    isLogin: false
}
export default function test(preState = initState, action) {
    const { type, data } = action
    let newState
    switch (type) {
        case SAVE_USER_INFO:
            newState = { user: data.user, isLogin: true }
            return newState
        case DELETE_USER_INFO:
            newState = { user: '', isLogin: false }
            return newState


        default:
            return preState
    }
}