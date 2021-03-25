import React, { Component } from 'react'
import DanhSachDatGhe from './DanhSachDatGhe'
import DanhSachGhe from './DanhSachGhe'
import '../../../assets/video27_dat_ve_phim/BaiTapBookingTicket.css';

export default class BaiTapDatVe extends Component {
    render() {
        return (
            <div className='bookingMovie'>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%' }}>
                    <div className='row'>
                        <div className='col-8'>
                            <DanhSachGhe />
                        </div>
                        <div className='col-4'>
                            <DanhSachDatGhe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
