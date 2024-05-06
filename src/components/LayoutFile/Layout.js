import React from 'react'
import SidebarMenu from '../SidebarMenu'
import Header from '../Header';
import TotalBardiagram from '../Total/TotalBardiagram';
import RecentOrders from '../Total/RecentOrders';
import TotalDetail from '../Total/TotalDetail';

const Layout = (props) => {
  return (
  <div className='container'>
    <div className='row'>
        <div className='col-sm-3'>
            <SidebarMenu user={props.user}/>
        </div>
        <div className='col-sm-9'>
            <Header user={props.user}/>
            <TotalDetail />
            <TotalBardiagram />
            <RecentOrders />
        </div>

    </div>
  </div>
  )
}

export default Layout