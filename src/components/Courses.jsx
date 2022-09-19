import React from 'react'

const Courses = ({user}) => {

    const pStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#3287c1",
    }

  return (
    <div>
        <p style={pStyle}>
            {user.Email.substring(0, user.Email.length - 9)} activities:
        </p>


    </div>
  )
}

export default Courses