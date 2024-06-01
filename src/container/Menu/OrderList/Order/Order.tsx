import React from 'react';
interface Props {
    name: string,
    count: number,
    price: number,
}

const Order: React.FC<Props> = ({name, count, price}) => {
    return (
        <div className={'order'}>
            <h5 className={'orderTitle'}>{name}</h5>
            <span className={'orderCount'}>x{count}</span>
            <span className={'orderPrice'}>{price} KGZ</span>
        </div>
    );
};

export default Order;