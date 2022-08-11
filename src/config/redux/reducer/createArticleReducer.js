/* eslint-disable default-case */
const createArticle = {
  form: {
    headline: '',
    imgSrc: '',
    content: ''
  },
  imgPrev: null,
};

const createArticleReducer = (state = createArticle, action) => {
  switch (action.type) {
    case "ADD_FORM_DATA":
      return {
        ...state,
        form: {
            ...state.form,
          [action.formType]: action.value,
        },
      };
    case "CHANGE_IMG_PREVIEW":
      return {
        ...state,
        imgPrev: action.value,
      };
    default:
      return state;
  }
};

export default createArticleReducer;
