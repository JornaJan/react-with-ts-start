import React, { useRef, useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {

  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  const domRef = useRef<HTMLInputElement>(null)

  const theme = useContext(ThemeContext)
  console.log(theme)

  const style = {
    background: theme.background,
    color: theme.color
  }

  useEffect(() =>{
    console.log('document title effect is running')
    document.title = `点击了${like} 次`
  }, [like])

  useEffect(() => {
    //domRef?.current?.focus()
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  return (
    <div className="LikeButton" style={style}>
      <input type="text" ref={domRef} />
      <button onClick={() => setLike(like + 1)}>{like} 👍</button>
      <button onClick={() => setOn(prev => !prev)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  )
}


export default LikeButton
