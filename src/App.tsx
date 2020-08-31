import React from 'react';
import './App.css';
import Child from './components/Child';

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
    <div className="App">
      <p>Hello</p>
      <p>{message}</p>
      <ul>
          {items.map((item: Item) =>(
          <li key={item.id}>{item.title}</li>
          ))}
      </ul>
      <Child />
    </div>
      );
}

export default App
