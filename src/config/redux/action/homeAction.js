import axios from "axios"


export const setArticles = (page) => (dispatch) => {
    axios.get(`http://localhost:5000/v1/posts/articles?page=${page}`)
    .then(res => {
      const {data} = res.data
      const {total_items, items_per_page} = res.data
      dispatch({type: "CHANGE_PAGE", value: {
        currentPage: page,
        totalPage: Math.ceil(total_items / items_per_page) 
      }})
      dispatch({type: 'CHANGE_DATA_ARTICLES', payload: data})
    })
    .catch(() => {
      dispatch({type: 'CHANGE_DATA_ARTICLES', payload: []})
    })
}


export const getArticle = (articleId) => (dispatch) => {
    axios.get(`http://localhost:5000/v1/posts/article/${articleId}`)
    .then(res => {
        const {data} = res.data
        dispatch({type: 'CHANGE_ARTICLE', payload: data})
    })
    .catch(err => console.log(err))
}

export const deleteArticle = (articleId) => {
  axios.delete(`http://localhost:5000/v1/posts/article/${articleId}`)
  .then((res) => {
    const {message} = res.data
    alert(message)
  })
  .catch(err => console.log(err))
}


export const updateArticle = (form, articleId) => {
  const payload = new FormData()
  payload.append('headline', form.headline)
  payload.append('imgSrc', form.imgSrc)
  payload.append('content', form.content)
  
  axios.put(`http://localhost:5000/v1/posts/article/${articleId}`, payload)
  .then(res => {
    const {message} = res.data
    alert(message)
  })
  .catch(() => {
    alert("Image must be updated!")
  })
} 
