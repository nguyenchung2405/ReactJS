import { combineReducers } from 'redux';
import { baiTapDatVeReducer } from './reducers/baiTapDatVeReducer';
import { gioHangReducer } from './reducers/gioHangReducer';

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ State của ứng dụng
    gioHangReducer: gioHangReducer,
    baiTapDatVeReducer: baiTapDatVeReducer
    // State A: ()=>{}
    // State B: ()=>{}
})

export default rootReducer;