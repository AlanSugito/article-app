import axios from 'axios'

export const register = ({username, email, password}) => {
    const payload = {
        username,
        email,
        password
    }
    axios.post('http://localhost:5000/v1/auth/register', payload)
    .then(res => {
        const {message} = res.data
        alert(message)
    })
    .catch(err => console.log(err))
}

export const login = ({email, password}) => (dispatch) => {
    axios.post("http://localhost:5000/v1/auth/login", {email, password})
    .then(res => {
        dispatch({type: "CHANGE_IS_LOGIN", value: true})
        const {message} = res.data
        alert(message)
    })
    .catch(err => {
        const {message} = err.response.data
        dispatch({type: "CHANGE_IS_LOGIN", value: false})
        alert(message)
    })
}