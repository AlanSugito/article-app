import axios from "axios"


const setArticles = (page) => (dispatch) => {
    axios.get(`http://localhost:5000/v1/posts/articles?page=${page}`)
    .then(res => {
      const {data} = res.data
      const {total_items, items_per_page} = res.data
      console.log(res.data)
      dispatch({type: "CHANGE_PAGE", value: {
        currentPage: page,
        totalPage: Math.ceil(total_items / items_per_page) 
      }})
      dispatch({type: 'CHANGE_DATA_ARTICLES', payload: data})
    })
    .catch(err => console.log(err))
}


export const getArticle = (articleId) => (dispatch) => {
    axios.get(`http://localhost:5000/v1/posts/article/${articleId}`)
    .then(res => {
        const {data} = res.data
        dispatch({type: 'CHANGE_ARTICLE', payload: data})
    })
    .catch(err => console.log(err))
}

export default setArticles