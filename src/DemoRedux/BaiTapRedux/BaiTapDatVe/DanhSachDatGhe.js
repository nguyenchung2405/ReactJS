import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachDatGhe extends Component {
    render() {
        return (
            <div className='text-white'>
                <h1 className='text-center'>Danh sách ghế đang chọn</h1>
                <div>
                    <button className='gheDangChon'></button> Ghế đang chọn
                </div>
                <div>
                    <button className='ghe' style={{ border: 'none', marginLeft: 'none' }}></button> Ghế chưa chọn
                </div>
                <div>
                    <button className='gheDuocChon' style={{ cursor: 'pointer' }}></button> Ghế đã chọn
                </div>
                <table className='table text-white'>
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((ghe, index) => {
                            return <tr key={index}>
                                <td>{ghe.soGhe}</td>
                                <td>{ghe.gia}</td>
                                <td><button className='btn btn-danger'>X</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat }
};

export default connect(mapStateToProps, null)(DanhSachDatGhe);