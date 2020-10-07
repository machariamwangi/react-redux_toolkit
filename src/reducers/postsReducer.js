import * as actions from  '../actions/postsActions'

export const initialState = {
    hasErrors: false,
    loading : false,
    posts:[],
}


export default function postsReducer(state = initialState, action){
    switch (action.type) {
        case actions.GET_POSTS:  
        return {...state, loading: true}  

        case actions.GET_POSTS_SUCCESS:
        return {posts:action.payload, loading: false,hasErrors: false}

        case actions.GET_POSTS_FAILURE:
        return {...state, hasErrors: true, loading: false}
        default:
         return state;
    }
}