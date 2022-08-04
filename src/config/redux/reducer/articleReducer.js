/* eslint-disable default-case */
const articleState = {
    article: {}
}

const articleReducer = (state = articleState, action) => {
    switch(action.type) {
        case "CHANGE_ARTICLE":
            return {
                ...state,
                article: action.payload
            }
        default:
            return state
    }
}

export default articleReducer