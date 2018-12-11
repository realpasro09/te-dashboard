import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Settings from './Settings';
import General from './General';


const reducers = combineReducers ({
    routing: routerReducer,
    settings: Settings,
    general: General,
});

export default reducers;
