import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
     
      <div className='cards__container'>
        <img className='logo' src="images/logo.png" alt=""/>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/card1.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
            <CardItem
              src='images/card2.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/card3.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
            <CardItem
              src='images/card4.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
            <CardItem
              src='images/card5.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/card6.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
            <CardItem
              src='images/card7.jpg'
              text='Ide mehetne valami szoveg hogy mi lathato a kepen,vagy technlogia stb.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
