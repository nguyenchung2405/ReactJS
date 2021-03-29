const stateDefault = {
    danhSachGheDangDat: [],
}

export const baiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GHE_DANG_CHON': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(ghe => ghe.soGhe === action.ghe.soGhe);
            if (action.ghe.daDat !== false) {
                alert('Ghế này đã được đặt. Vui lòng chọn ghế khác.');
                return { ...state };
            }
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
                state.danhSachGheDangDat = danhSachGheDangDatUpdate;
                return { ...state };
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
                state.danhSachGheDangDat = danhSachGheDangDatUpdate;
                return { ...state };
            }
        }
    }
    return { ...state };
}