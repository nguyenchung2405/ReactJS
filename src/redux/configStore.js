import { combineReducers } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ State của ứng dụng
    gioHangReducer: gioHangReducer
    // State A: ()=>{}
    // State B: ()=>{}
})

export default rootReducer;