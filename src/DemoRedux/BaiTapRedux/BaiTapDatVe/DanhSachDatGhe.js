import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachDatGhe extends Component {
    render() {
        let { dispatch } = this.props;
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
                <table className='table text-white mt-3' data-spy="scroll">
                    <thead>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.danhSachGheDangDat.map((ghe, index) => {
                            if (ghe !== {}) {
                                return <tr key={index}>
                                    <td>{ghe.soGhe}</td>
                                    <td>{ghe.gia}</td>
                                    <td><button className='btn btn-danger' onClick={() => {
                                        const action = {
                                            type: 'XOA_GHE',
                                            soGhe: ghe.soGhe
                                        };
                                        dispatch(action);
                                    }}>X</button></td>
                                </tr>
                            }
                            return <></>;
                            // return console.log(ghe);
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         Xoa: (ghe) => {
//             const action = {
//                 type: 'XOA_GHE',
//                 ghe,
//             }
//         }
//     }
// };

export default connect(mapStateToProps, null)(DanhSachDatGhe);