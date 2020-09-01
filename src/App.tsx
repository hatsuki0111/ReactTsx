import React from 'react';
import './App.css';
import {Child, Child2, Child3,Child4}from './components/Child';

const App: React.FC = () => {
  type Item ={
    id: number
    title: string
  }

  const items: Item[] = [
    {
      id:1,
      title:'寿司'
    },
    {
      id: 2,
      title: '一番ださい商品'
    },
  ]

  

  const message: string='React'
  return (
    <>
    <div className="App">
      <p>Hello</p>
      <p>{message}</p>
      <ul>
          {items.map((item: Item) =>(
          <li key={item.id}>{item.title}</li>
          ))}
      </ul>
      <Child number="1">子コンポーネントを渡す</Child>
      <Child2 />
      <Child3 message="子コンポーネントを渡す3"/>
      <Child4>子コンポーネントを渡す4</Child4>
    </div>
    </>
      );
}

export default App
