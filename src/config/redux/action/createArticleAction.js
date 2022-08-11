import axios from 'axios'

export const setForm = (formType, value) => {
  return { type: "ADD_FORM_DATA", formType, value };
};

export const setImgPreview = (url) => {
    return {type: "CHANGE_IMG_PREVIEW", value: url}
}

export const postArticle = ({headline, imgSrc, content}) => {
    const data = new FormData()
    data.append('headline', headline)
    data.append('imgSrc', imgSrc)
    data.append('content', content)

    axios.post("http://localhost:5000/v1/posts/article/create", data, {
        headers: {'content-type':'mulipart/form-data'}
    })
    .then(() => {
        alert("Article successfully created!")
    })
    .catch((err) => {
        alert("Article post failed")
        console.log(err)
    })
}