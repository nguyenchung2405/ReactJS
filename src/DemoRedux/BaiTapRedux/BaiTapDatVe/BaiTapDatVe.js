import React, { Component } from 'react'
import DanhSachDatGhe from './DanhSachDatGhe'
import DanhSachGhe from './DanhSachGhe'
import '../../../assets/video27_dat_ve_phim/BaiTapBookingTicket.css';

export default class BaiTapDatVe extends Component {
    render() {
        return (
            <>
                <div className='row'>
                    <div className='col-8'>
                        <DanhSachGhe />
                    </div>
                    <div className='col-4'>
                        <DanhSachDatGhe />
                    </div>
                </div>
            </>
        )
    }
}
