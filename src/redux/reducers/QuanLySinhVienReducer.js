const stateDefault = {
    mangSinhVien: [
        { maSV: 1, tenSV: 'Chung', soDienThoai: 1349849, email: 'hfai@gmail.com' },
        { maSV: 2, tenSV: 'Bảo', soDienThoai: 123654, email: 'qwerty@gmail.com' }
    ], // Dữ liệu sinh viên của table
}

export default (state = stateDefault, action) => {
    switch (action.type) {


        default:
            return state
    }
}
