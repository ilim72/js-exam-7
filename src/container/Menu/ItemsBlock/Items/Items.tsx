import React from 'react';
import '../Items/Items.css';

interface Props {
  name: string,
  price: number,
  image: string,
  buy: () => void,
}

const Items: React.FC<Props> = ({image, name, price, buy}) => {
  return (
    <div onClick={buy} className={'item'}>
      <img width={100} src={image} alt={name}/>
      <div>
        <h5 className={'itemName'}>{name}</h5>
        <span className={'itemPrice'}>Price: {price} KGZ</span>
      </div>
    </div>
  );
};

export default Items;