import React, { useState } from 'react'

const User = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
  return (
    <div>
        <h1>User Information</h1>
        <label htmlFor="name">Name:</label>
        <input onChange={(e)=>setName(e.target.value)} id="name" type="text" /><br/>
        <label htmlFor="email">Email:</label>
        <input onChange={(e)=>setEmail(e.target.value)} id="email" type="email" /><br/>
        <p>Current values in store:</p>
        <p>Name- {name}</p>
        <p>Email- {email}</p>

    </div>
  )
}

export default User