import React from 'react';
import { Item } from './GoodsItems';

export default function GoodsItem(item: Item) {
  return <div className='goods__item'>
    <img src={item.imageLink} alt='item' />
    <p>{item.name}</p>
    <p>Color: {item.color}</p>
    <p>Price: {item.price}$</p>
  </div>;
}
