import React, { Component } from 'react'
import DataGhe from '../../../assets/video27_dat_ve_phim/danhSachGhe.json';
import { connect } from 'react-redux'

class DanhSachGhe extends Component {
    renderHangGhe = () => {
        return DataGhe.map((hangGhe, index) => {
            return <div key={index} className='d-flex' style={{ width: '760px', justifyContent: 'center' }}>
                <span className='rowNumber'>{hangGhe.hang}</span>
                {/* Load ra a1, a2, a3,... hangGhe.danhSachGhe */}
                {this.renderDanhSachGhe(hangGhe.danhSachGhe, hangGhe.hang)}
            </div>
        })
    }

    renderDanhSachGhe = (danhSachGhe, hangGhe) => {
        return danhSachGhe.map((ghe, index) => {
            // Kiểm tra xem ghế đang render có trong mảng gheDangDa redux hay không
            let classGheDangDat = '';
            let indexGhe = this.props.danhSachGheDangDat.findIndex(gheDD => gheDD.soGhe === ghe.soGhe);
            if (indexGhe !== -1) {
                classGheDangDat = 'gheDangChon';
            }
            let classGheDuocChon = ghe.daDat ? 'gheDuocChon' : '';
            if (hangGhe !== '') {
                return <button key={index} className={`ghe mt-1 ${classGheDuocChon} ${classGheDangDat}`} onClick={() => {
                    this.props.Chon(ghe);
                }}>{ghe.soGhe}</button>
            }
            return <button key={index} className={`rowNumber ${classGheDuocChon} ${classGheDangDat}`}>{ghe.soGhe}</button>
        })
    }


    render() {
        return (
            <div className='container mt-1 text-white'>
                <h3 className='text-center display-4' style={{ color: '#e4c700' }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
                <div className='text-center text-white'>Màn hình</div>
                <div className='d-flex' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className='screen'></div>
                    {this.renderHangGhe()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Chon: (ghe) => {
            const action = {
                type: 'GHE_DANG_CHON',
                ghe,
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);