import { combineReducers } from 'redux';
import { baiTapDatVeReducer } from './reducers/baiTapDatVeReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import QuanLySinhVienReducer from './reducers/QuanLySinhVienReducer';

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ State của ứng dụng
    gioHangReducer,
    baiTapDatVeReducer,
    QuanLySinhVienReducer,
    // State A: ()=>{}
    // State B: ()=>{}
})

export default rootReducer;