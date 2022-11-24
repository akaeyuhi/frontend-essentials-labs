import React from 'react';
import { GoodsHeader } from '../components/Goods/GoodsHeader';
import GoodsItems from '../components/Goods/GoodsItems';
import { GoodsFooter } from '../components/Goods/GoodsFooter';

export default function GoodsPage() {
  return <main className='goods__container'>
    <GoodsHeader />
    <GoodsItems />
    <GoodsFooter />
  </main>;
}
