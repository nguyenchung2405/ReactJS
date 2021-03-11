import React from 'react'

// Dùng rfc

export default function DemoFuntion() {
    // Đối với function component bên dưới lệnh return sẽ là giao diện của thẻ
    // Lưu ý: nội dung của thẻ phải được bao phủ bởi 1 thẻ
    return (
        <div>
            <p className="p-2 bg-dark text-white">hello</p>
            <p>Hello</p>
        </div>
    );
}
