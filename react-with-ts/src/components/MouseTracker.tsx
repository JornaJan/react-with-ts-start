import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPosition({x: e.clientX, y: e.clientY})
    }

    document.addEventListener('click', updateMouse)
    return () => { // 清楚组件effect
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return (
    <div className="MouseTracker">
      <p>X: {position.x} Y:{position.y}</p>
    </div>
  )
}

export default MouseTracker
