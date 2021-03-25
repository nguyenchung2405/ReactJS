const stateDefault = {
    danhSachGheDangDat: [
        {
            "soGhe": "A1",
            "gia": 75000,
            "daDat": false
        },
    ]
}

export const baiTapDatVeReducer = (state = stateDefault, action) => {
    return { ...state };
}