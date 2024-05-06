import React from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Details = [
    {
        id: 1,
        month: "January",
        income : 4000,
        Expense : 5000
    },
    {
        id: 2,
        month: "February",
        income : 2000,
        Expense : 4000
    },
    {
        id: 3,
        month: "March",
        income : 9000,
        Expense : 2000
    },
    {
        id: 4,
        month: "April",
        income : 10000,
        Expense : 5000
    },
    {
        id: 5,
        month: "May",
        income : 20000,
        Expense : 5000
    },
    {
        id: 6,
        month: "June",
        income : 40000,
        Expense : 10000
    },
    {
        id: 7,
        month: "July",
        income : 10000,
        Expense : 3000
    },
    {
        id: 8,
        month: "August",
        income : 6788,
        Expense : 233
    },
    {
        id: 9,
        month: "September",
        income : 4000,
        Expense : 10000
    },
    {
        id: 10,
        month: "October",
        income : 10000,
        Expense : 1000
    },
    {
        id: 11,
        month: "November",
        income : 1000,
        Expense : 3000
    },
    {
        id: 12,
        month: "December",
        income : 5000,
        Expense : 7000
    }
]

const TotalBardiagram = () => {
  return (
    <div style={{margin : "20px 0", backgroundColor:"rgb(239, 240, 240)", padding: "20px", border: "1px solid rgb(82, 81, 81)"}}>
       <h4 style={{fontSize: "16px", fontWeight: "bolder", marginBottom: "50px", color:"green"}}>Recent Orders</h4>
        
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart  data={Details} width={800} height={800}>
                <XAxis dataKey="month"/>
                <YAxis />
                <Tooltip />
                <Bar  dataKey="income" fill='rgba(74, 137, 215)'/>
                <Bar  dataKey="Expense" fill='rgb(173 103 60)'/>

            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default TotalBardiagram