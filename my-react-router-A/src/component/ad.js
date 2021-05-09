import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class H extends Component {
    constructor(props){
        super(props)
        this.state = {
            stt:false,
            product:[]
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            url:'https://6093b5e8a7e53a001795161e.mockapi.io/Products',
            data:null
        }).then (res =>{
            this.setState({
                stt:true,
                product : res.data
            });
        }).catch(err =>{

        })
        
    }
    render() {
        const {stt,product} = this.state;
        if(!stt){
            return (
                <div>
                    <h4>Empty</h4>
                </div>
            )
        }
        return (
            <div>
                <h1>List Product</h1>
                <ul style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        product.map((item,index)=>(
                            <li key={index} style={{
                                width:'calc(100% / 4 - 20px)',
                                heigth:'80px',
                                listStyle:'none',
                                paddingRight:'20px',
                                boxSizing:'border-box',
                                margin:'10px',
                                border:'1px solid #ccc'
                            }}>
                                <h5>{item.product_name}</h5>
                                <strong>price : {item.price}</strong>
                                <br/>
                                <img src={item.product_pic} width="90%" height="70%"/>
                                <br/>
                                <Link to= {`/detail/${item.id}`}>Xem</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
 
export default H;
