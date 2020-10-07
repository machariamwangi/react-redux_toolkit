import {combineReducers} from 'redux';
import postsReducers from './posts';
import postReducer from './post';
import commentsReducers from './comments';

const rootReducer = combineReducers({
    posts: postsReducers,
    post: postReducer,
    comments: commentsReducers
})
export default rootReducer;