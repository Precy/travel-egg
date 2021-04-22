import React, { useState, useEffect } from 'react'

export default function (props) {
  const [count, setCount] = useState(0)

  useEffect(() => {

  })

  const handleClick = () => {
    setCount(count+1)
  }

  return (
    <div>
      <h1 onClick={handleClick}>text: {count}</h1>
    </div>
  )
}