const globalState = {
    isLogin: false,
}

const globalReducer = (state = globalState, action) => {
    if (action.type === "CHANGE_IS_LOGIN") {
        return {
            ...state,
            isLogin: action.value
        }
    }
    return state
}

export default globalReducer