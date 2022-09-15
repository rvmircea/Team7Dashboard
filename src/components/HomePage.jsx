import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = ({user}) => {
    
    return (
        <div>
            {user ? user.Email : "Homepage"}
        </div>
    )
}

export default HomePage