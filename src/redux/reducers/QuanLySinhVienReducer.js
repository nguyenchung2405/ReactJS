const stateDefault = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'Chung', soDienThoai: 1349849, email: 'hfai@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'Bảo', soDienThoai: 123654, email: 'qwerty@gmail.com' }
    ], // Dữ liệu sinh viên của table
}

export default (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state };
        }

        default:
            return state
    }
}
