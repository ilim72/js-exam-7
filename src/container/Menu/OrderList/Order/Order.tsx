import React from 'react';
import '../Order/Order.css';

interface Props {
    name: string,
    count: number,
    price: number,
    deleteBtn: () => void,
}

const Order: React.FC<Props> = ({name, price, count, deleteBtn}) => {
    return (
        <div className={'order'}>
            <h5 className={'orderTitle'}>{name}</h5>
            <span className={'orderCount'}>x{count}</span>
            <span className={'orderPrice'}>{price} KGZ</span>
            <button className={'deleteBtn'} onClick={deleteBtn} type={'button'}>&#x274C;</button>
        </div>
    );
};

export default Order;