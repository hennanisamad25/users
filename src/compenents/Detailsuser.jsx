import {useParams ,Link} from 'react-router-dom'

import { useState , useEffect } from "react"
export default function DetailsUser(){

    const [user,setUser]=useState({})

    const {id} = useParams()

    useEffect(()=>{ 
        const fetchdata= async ()=>{
            try {

                const responce = await fetch("https://jsonplaceholder.typicode.com/users/"+id)

                const data = await responce.json()

                console.log(data)

                setUser(data)
            } catch (error) {
                console.error(error)  
            }
        }
        fetchdata()

    }

    ,[id])


    return(<div>

        <h4> Details user avec id : {id}  </h4>


        <div>


 <div style={{border:"2px dashed rgb(25, 65, 65)",margin:"10px",padding:"10px",width:"250px",height:"100px"}} > 
                    <p > {user.name} </p>
                    <p > {user.email} </p>
                    <p > {user.username} </p>


                    <div> <Link to={"/users"}>  <button> {"<< Go back "} </button>    </Link></div>

                </div>



        </div>


    </div>)
}