import React, {useState, useEffect} from 'react'

const RecentOrders = () => {
    const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://api.escuelajs.co/api/v1/products').then(
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
    <div style={{margin : "20px 0", backgroundColor:"rgb(239, 240, 240)", padding: "20px", border: "1px solid rgb(82, 81, 81)"}}>
       <h4 style={{fontSize: "16px", fontWeight: "bolder", color:"green"}}>Recent Orders</h4>
       <table class="table table-striped">
    <thead>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Order Date</th>
        <th>Product Status</th>

      </tr>
    </thead>
    <tbody>

        {
            products.map((res)=> {
                return(
                    <tr>
                        <td>{res.id}</td>
                        <td>{res.title.substring(0, 20)}</td>
                        <td>{res.price}</td>
                        <td>{res.creationAt}</td>
                        <td>Progress</td>
                  </tr>
                );
            })
        }
    </tbody>
  </table>
       
    </div>
  )
}

export default RecentOrders