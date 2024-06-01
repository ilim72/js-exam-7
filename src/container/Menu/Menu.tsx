import React from 'react';
import Items from './ItemsBlock/Items/Items.tsx';
import Burger from '../../assets/burger.jpg';
import HotDog from '../../assets/hotDog.jpg';
import Fries from '../../assets/fries.jpg';
import Coffee from '../../assets/coffee.jpg';
import Tea from '../../assets/tea.jpg';
import Cola from '../../assets/cola.jpg';
import ItemsBlock from "./ItemsBlock/ItemsBlock.tsx";
import Order from "./OrderList/Order/Order.tsx";
import OrderList from "./OrderList/OrderList.tsx";

interface MenuItem {
    name: string,
    price: number,
    image: string,
    count: number,
}

const MENU: MenuItem[] = [
    {name: 'Burger', price: 100, image: Burger, count: 0},
    {name: 'HotDog', price: 70, image: HotDog, count: 0},
    {name: 'Fries', price: 50, image: Fries, count: 0},
    {name: 'Coffee', price: 30, image: Coffee, count: 0},
    {name: 'Tea', price: 20, image: Tea, count: 0},
    {name: 'Cola', price: 40, image: Cola, count: 0},
];

const Menu = () => {
    return (
        <main className="menu-container">
            <OrderList>
                {MENU.map(item => (
                    <Order key={item.name} name={item.name} count={item.count} price={item.price} />
                ))}
            </OrderList>
            <ItemsBlock>
                {MENU.map(item => (
                    <Items key={item.name} image={item.image} name={item.name} price={item.price} />
                ))}
            </ItemsBlock>
        </main>
    );
};

export default Menu;
