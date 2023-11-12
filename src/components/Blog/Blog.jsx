import './Blog.css';
import axios from "axios";
import React from 'react';
import { useState } from "react";
import {Component} from "react"

import { AiTwotoneDislike } from "react-icons/ai";
//import axios from "axios";
export class Blog extends Component {
    state = {
        
        showBlog: true,
        showAddFrom: false,
        blogArr: []
    };

    componentDidMount(){
        axios.get('https://63708fe208218c267e017d80.mockapi.io/ArrDima') 
         .then((response) => {
             this.setState({
                 blogArr: response.data
             })
         })
         .catch((err) =>{  console.log(err)} ) 
         window.addEventListener("keyup",this.handleEscape)
     }
     
     
    
render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
        return(
                <div className='post'>
                     <div className='posthead'>
                     <h2>{item.title}</h2>
                     <span className='DeleteForeverButton'  >
                        <AiTwotoneDislike/>

                     </span>
                     </div>
                     <div clasName='desc'>


                     {item.description}
                     </div>
                     <div classname = 'button'>
                     <span className = 'favoriteButton'>
                     </span>
                     </div>
             </div>
        )
    });



    return(
        <>
        {blogPosts}
        </>
    )
    }
}