import React from 'react';
import './TotalDetail.css'
import { IoBagOutline } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const TotalDetail = () => {
  return (
    <div className='row'>
        <div className='col-sm-3 uppers'>
             <IoBagOutline />
            <div className='bag'> 
                <p>Total Sales</p>
                <h3>$2000</h3>
            </div>
        </div>
        <div className='col-sm-3 uppers'>
            <FaChartPie />
            <div className='bag'> 
                <p>Total Expense</p>
                <h3>$2000</h3>
            </div>
        </div>
        <div className='col-sm-3 uppers'>
            <CiUser />
            <div className='bag'> 
                <p>Total Customer</p>
                <h3>$2000</h3>
            </div>
        </div>
        <div className='col-sm-3 uppers'>
         <CiShoppingCart />
            <div className='bag'> 
                <p>Total Order</p>
                <h3>$2000</h3>
            </div>
        </div>
    </div>
  )
}

export default TotalDetail