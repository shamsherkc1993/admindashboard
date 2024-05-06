import React from 'react';
import './stylesfile/SidebarMenu.css'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import Dashboard from './Dashboard';

const SidebarMenu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://api.escuelajs.co/api/v1/categories').then(
        response => {
            return response.json()
        }
    ).then(
        data => {
            setProducts(data)

        }
    )
  }, [])
console.log(products)

  return (
    <div className='menu' style={{height: "12%"}}>
        <ul>
            <NavLink path='/' element={<Dashboard />}><FaArrowCircleRight style={{margin: "10px", color: "#fff", textDecoration:"none"}}/>Dashboard</NavLink>
            {
                products.map((newCategory) => {
                    return (
                        <li>
                            <NavLink to={newCategory.name}><FaArrowCircleRight style={{margin: "10px"}}/>{newCategory.name}</NavLink>
                        </li>
                    );
                })
            }
            <li>gseg</li>
           
        </ul>
    </div>
  )
}

export default SidebarMenu