import React, { useCallback, useState } from 'react';

export default function ImageComponent() {
  const step = 0.3;
  const initialZoom = 1;
  const [zoom, setZoom] = useState(initialZoom);
  const [display, setDisplay] = useState('none');

  const imageStyle = {
    display,
    transition: 'transform 0.2s ease',
    transform: `scale(${zoom})`
  };

  const toggleHandler = useCallback(
    () => setDisplay((prevState => (prevState === 'none' ? 'block' : 'none'))),
    []);
  const increaseHandler = useCallback(() => setZoom((prevZoom => prevZoom + step)), []);
  const decreaseHandler = useCallback(() => setZoom((prevZoom => prevZoom - step)), []);
  const resetHandler = useCallback(() => setZoom(initialZoom), []);
  return <>
    <div className="buttons__container">
      <div className='buttons__image__container' style={{
        overflow: 'hidden', width: '600px'
      }}><img style={imageStyle}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%29_16.jpg/1280px-%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%29_16.jpg"
          alt="Lviv" />
      </div>
      <button className="buttons__toggle" onClick={toggleHandler}>Toggle</button>
      <button className="buttons__increase" onClick={increaseHandler}>Збільшити</button>
      <button className="buttons__decrease" onClick={decreaseHandler}>Зменшити</button>
      <button className="buttons__reset" onClick={resetHandler}>Скинути</button>
    </div>
  </>;
}
