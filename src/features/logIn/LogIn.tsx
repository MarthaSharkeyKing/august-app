import React, { useEffect, useState } from 'react';

export default function LogIn() {
const [name, setName] = useState('')

  const handleNameChange = (event: any) => {
    setName(event.target.value)
  }

  return (
    <div>
        <div>Welcome to our demo app {name}</div>
        <div>Please log in</div>
        <input onChange={handleNameChange}></input>
    </div>
   );
}