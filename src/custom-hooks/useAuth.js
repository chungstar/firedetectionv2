import React,{useState,useEffect} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'
const useAuth = () => {
    const [currentUser,setCurrentUser] = useState({})

    React.useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }
            else{
                setCurrentUser(null)
            }
        })
    })

  return {
    currentUser
  }
}

export default useAuth