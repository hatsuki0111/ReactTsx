import React from 'react'

type Props = {
  number: string
  children: React.ReactNode
}
type Props3 ={
  message: string
}
type Props4 ={
  children: string
}


export const Child: React.FC<Props> = ({number, children, }) =>{
  return(
    <>
    <p>子コンポーネント</p>
    <p>{children}{number}</p>
    </>
  )
}

export const Child2: React.FC = () =>{
  return(
    <div>子のコンポーネント2</div>
  )
}

export const Child3: React.FC<Props3> = props =>{
  return(
  <p>{props.message}</p>
  )
}

export const Child4: React.FC<Props4> = props =>{
  return(
  <p>{props.children}</p>
  )
}

