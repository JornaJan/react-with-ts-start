import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {

  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  useEffect(() =>{
    console.log('document title effect is running')
    document.title = `点击了${like} 次`
  }, [like])
  return (
    <div className="LikeButton">
      <button onClick={() => setLike(like + 1)}>{like} 👍</button>
      <button onClick={() => setOn(prev => !prev)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  )
}


export default LikeButton
