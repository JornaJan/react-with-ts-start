import React from 'react'

interface IHelloProps {
  message?: string
}

const Hello: React.FC<IHelloProps> = ({message}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

Hello.defaultProps = {
  message: "Hello World"
}

export default Hello
