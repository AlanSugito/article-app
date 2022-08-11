/* eslint-disable default-case */
const globalState = {
  isLogin: false,
  isVisible: false,
  articleSelected: null
};

const globalReducer = (state = globalState, action) => {
  switch (action.type) {
    case "CHANGE_IS lOGIN":
      return {
        ...state,
        isLogin: action.value,
      };
    case "CHANGE_IS_VISIBLE":
      return {
        ...state,
        isVisible: action.value,
      };
    case "CHANGE_ARTICLE_SELECTED":
        return {
            ...state,
            articleSelected: action.value
        }
    default:
      return state;
  }
};

export default globalReducer;
