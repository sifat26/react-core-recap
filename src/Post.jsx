import { useEffect } from "react";
import { useState } from "react"
import Postt from "./Postt";

export default function Post(){
    const [posts,setPosts]=useState([]);
     useEffect(()=>{
        const loadPosts=async()=>{

            const res=await fetch('https://jsonplaceholder.typicode.com/posts')
            const data=await res.json();
            setPosts(data)
        }
        loadPosts()
     }
     
        
        ,[])
        
    

        
    
    return(
        <div>
            <h2>Posts:{posts.length}</h2>
            {
                // eslint-disable-next-line react/jsx-key
                posts.map(post=><Postt post={post}></Postt>)
            }
            
        </div>
    )

}