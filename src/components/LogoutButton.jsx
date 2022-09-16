import React from 'react'

const LogoutButton = () => {
  return (
    <button style={{marginLeft:"auto"}} onClick={() => setLoggedIn(prev => !prev)}>{loggedIn ? "Logout" : <></>}</button>
  )
}

export default LogoutButton