import  {createSlice} from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  post:{}
}

const postSlice = createSlice ({
    name: 'post',
    initialState,
    reducers:{
        getPost: state =>{
            state.loading = true
        },
        getPostSuccess: (state, {payload}) => {
            state.post = payload
            state.hasErrors = false
            state.loading = false
        },
        getPostFailure: state =>{
            state.loading = false
            state.hasErrors = true
        },
} ,     
})

export const {getPost, getPostSuccess, getPostFailure} = postSlice.actions
export const postSelector = state => state.post
export default postSlice.reducer


export function fetchPost(id) {
    return async dispatch =>{
        dispatch(getPost())
        try {
            const response= await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await response.json()
            console.log("==data", data)
            dispatch(getPostSuccess(data))
        } catch (error) {
            dispatch(getPostFailure())
        }
    }
    
}