import React, { useState } from 'react';
import GoodsItem from './GoodsItem';

export interface Item {
  name: string
  color: string,
  price: number,
  imageLink: string
 }
interface ItemsState {
  items: Item[]
}

export default function GoodsItems() {
  const sampleItem: Item = {
    name: 'Lorem',
    color: 'black',
    price: 500,
    imageLink: 'https://via.placeholder.com/250'
  };
  const [state] = useState<ItemsState>(
    { items: new Array(16).fill(sampleItem) },
  );


  return  <div className="goods__content">
    <h2>What to buy?</h2>
    <div className='goods__items'>
      {state.items.map((item, index) => <GoodsItem {...item} key={index}/>)}
    </div>
  </div>;
}
