import React from 'react'
import SidebarMenu from './SidebarMenu'
import Header from './Header'
import Layout from './LayoutFile/Layout'

const Dashboard = (props) => {

  return (
   <>
    <Layout user={props.user}/>
   </>
  )
}

export default Dashboard