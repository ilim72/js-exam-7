import React, { useState } from 'react';
import Items from './ItemsBlock/Items/Items.tsx';
import Burger from '../../assets/burger.jpg';
import HotDog from '../../assets/hotDog.jpg';
import Fries from '../../assets/fries.jpg';
import Coffee from '../../assets/coffee.jpg';
import Tea from '../../assets/tea.jpg';
import Cola from '../../assets/cola.jpg';
import ItemsBlock from './ItemsBlock/ItemsBlock.tsx';
import Order from './OrderList/Order/Order.tsx';
import OrderList from './OrderList/OrderList.tsx';

interface MenuItem {
  name: string,
  price: number,
  image: string,
  count: number,
}

const MENU: MenuItem[] = [
  { name: 'Burger', price: 100, image: Burger, count: 0 },
  { name: 'HotDog', price: 70, image: HotDog, count: 0 },
  { name: 'Fries', price: 50, image: Fries, count: 0 },
  { name: 'Coffee', price: 30, image: Coffee, count: 0 },
  { name: 'Tea', price: 20, image: Tea, count: 0 },
  { name: 'Cola', price: 40, image: Cola, count: 0 },
];


const Menu = () => {
  const [orders, setOrders] = useState<MenuItem[]>([]);

  const [sum, setSum] = useState<number>(0);

  const getSum = (orderList: MenuItem[]) => {
    let totalSum = 0;

    orderList.forEach(order => {
      totalSum += order.count * order.price;
    });

    setSum(totalSum);
  };

  const addOrder = (menuItem: MenuItem) => {
    const copyOrders = [...orders];
    const orderIndex = copyOrders.findIndex(order => order.name === menuItem.name);

    if (orderIndex !== -1) {
      copyOrders[orderIndex].count++;
    } else {
      copyOrders.push({ ...menuItem, count: 1 });
    }

    setOrders(copyOrders);
    getSum(copyOrders);
  };

  return (
    <main className="menu-container">
      <OrderList>
        {orders.map(item => (
          <Order key={item.name} name={item.name} count={item.count} price={item.price * item.count} />
        ))}
        <span>{sum}</span>
      </OrderList>
      <ItemsBlock>
        {MENU.map(item => (
          <Items
            key={item.name}
            image={item.image}
            name={item.name}
            price={item.price}
            buy={() => addOrder(item)}
          />
        ))}
      </ItemsBlock>
    </main>
  );
};

export default Menu;
