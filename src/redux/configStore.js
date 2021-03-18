import { combineReducers } from 'redux';


const stateDefault = {
    gioHang: [{ maSP: 1 }]
}

const rootReducer = combineReducers({
    // Nơi chứa toàn bộ State của ứng dụng
    gioHangReducer: (state = stateDefault) => {
        return state;
    }
    // State A: ()=>{}
    // State B: ()=>{}
})

export default rootReducer;