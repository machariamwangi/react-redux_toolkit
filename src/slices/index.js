import {combineReducers} from 'redux';
import postsReducers from './posts';
import postReducer from './post';

const rootReducer = combineReducers({
    posts: postsReducers,
    post: postReducer,
})
export default rootReducer;