import React from 'react';
import Header from '../components/About/Header';
import Content from '../components/About/Content';
import ImageComponent from '../components/About/Image';

export default function AboutPage() {
  return <div className='container'>
    <Header />
    <Content />
    <ImageComponent />
  </div>;
}
