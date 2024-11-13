import React from 'react'
import { useSelector } from 'react-redux'

const WelcomeMessage = () => {

   const userEmail = useSelector(state => state.auth.user?.email)

  return (
    <div className='w-full h-screen bg-slate-800 text-white flex justify-center  items-center' >
  
        
  
           <p className='text-3xl font-bold'>
            Welcome  to the Digital World <br />
            <span className='text-2xl font-semibold'>useremail :{userEmail}</span>
            </p>  
             
        

    </div>  
  
  )
}

export default WelcomeMessage