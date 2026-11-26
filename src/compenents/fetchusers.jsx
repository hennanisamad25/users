import { useState , useEffect } from "react"

import {useNavigate} from "react-router-dom"

export default function Users(){

    const [users,Setusers]=useState([])

    const navigate = useNavigate()


    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users").
    //     then((Response)=>Response.json()).
    //     then((data)=>{console.log(data);Setusers(data)}).
    //     catch((err)=>console.error(err))

    // },[]

    // )
    useEffect(()=>{
        const fetchdata= async ()=>{
            try {

                const responce = await fetch("https://jsonplaceholder.typicode.com/users")

                const data = await responce.json()

                console.log(data)

                Setusers(data)
                
            } catch (error) {

                console.error(error)
                
            }

        }
        fetchdata()

    }

    ,[])

    return(
        <div>

            <h3> Listes users:  </h3>

            <div style={{display:"flex" , flexWrap:"wrap"}} > 

            {users.map((user,index)=>
                
                
                <div style={{border:"2px dashed rgb(25, 65, 65)",margin:"10px",padding:"10px",width:"250px",height:"100px"}} > 
                    <p key={index} > {user.name} </p>
                    <p key={index} > {user.email} </p>

                    <div> <button onClick={()=>navigate("/users/"+user.id)} >   Details </button> </div>

                </div>)
                
                }


            </div>

               



        </div>
    )
}