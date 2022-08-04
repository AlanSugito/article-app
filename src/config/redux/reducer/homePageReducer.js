/* eslint-disable default-case */
const homeState = {
  articles: [],
  page: {
    currentPage: 1,
    totalPage: 0
  },
};

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case "CHANGE_DATA_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.value,
      };
    default:
      return state;
  }
};

export default homeReducer;
