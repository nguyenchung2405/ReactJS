
const stateDefault = {
    gioHang: [
        // { maSP: 1, tenSP: 'iPhone', hinhAnh: './img/sp_iphoneX.png', soLuong: 1, gia: 1000 }
    ]
}

export const gioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // Xử lý thay đổi State
            console.log('action', action);
            // Cập nhật giỏ hảng
            let gioHangCapNhat = [...state.gioHang];
            // Kiệm tra sản phẩm đó có trong giỏ hàng hay không
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                gioHangCapNhat.push(action.spGioHang);
            }
            // Cập nhật lại state tương úng setState
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
        case 'XOA_SP_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSP);
            if (index !== -1) {
                gioHangCapNhat.splice(index, 1);
            }
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state.gioHang];
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.maSP);
            if (spGioHang) {
                spGioHang.soLuong += action.soLuong;
            }
            if (spGioHang.soLuong === 0) {
                alert('Số lượng sản phẩm không được bằng 0.')
                spGioHang.soLuong -= action.soLuong;
            }
            state.gioHang = gioHangCapNhat;
            return { ...state }
        }
    }
    return state;
}