// import axios from 'axios'
// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

// class Home extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             "products": [
//                 {
//                   "id": 0,
//                   "name": "",
//                   "image": "",
//                   "accommodates": "",
//                   "beds": "",
//                   "price": "",
//                   "description": ""
//                 }
//             ]
//           }
//     }
//     componentDidMount(){
//         axios({
//             method: 'PUT',
//             url:'https://6010c7d191905e0017be38f6.mockapi.io/api/ourroom/ourRoom',
//             data:null
//         }).then (res =>{
//             this.setState({
//                 loading:true,
//                 products : res.data
//             });
//         }).catch(err =>{

//         })
        
//     }
//     render() {
//         const {loading,products} = this.state;
//         if(!loading){
//             return (
//                 <div>
//                     <h4>Loading...</h4>
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <h1>List Product</h1>
//                 <ul style={{display:'flex',flexWrap:'wrap'}}>
//                     {
//                         products.map((item,index)=>(
//                             <li key={index} style={{
//                                 width:'calc(100% / 4 - 20px)',
//                                 heigth:'80px',
//                                 listStyle:'none',
//                                 paddingRight:'20px',
//                                 boxSizing:'border-box',
//                                 margin:'10px',
//                                 border:'1px solid #ccc'
//                             }}>
//                                 <h5>{item.name}</h5>
//                                 <strong>price : {item.price}</strong>
//                                 <br/>
//                                 <img src={item.image} width="90%" height="70%"/>
//                                 <br/>
//                                 <Link to= {`/detail/${item.id}`}>Xem</Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
 
// export default Home
