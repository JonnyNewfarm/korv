
import { useEffect, useState } from 'react'

import axios from 'axios'

function App() {

  const [product, setProduct] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3000/products')
    .then(res => {setProduct(res.data.products)})
    .catch( err => console.log(err))
   

  }, [])


  

  return (
    <>
    <div style={{color: "black"}}>

{product.map((p, i ) => {
  <ul key={i}>
    <li>{p._id}</li>
    <li>{p.name}</li>
    <li>{p.price}</li>
  </ul>
})}


    </div>
  
    </>
  )
}

export default App
