import React, {PropsWithChildren} from 'react';
import '../ItemsBlock/ItemsBlock.css';

interface Props extends PropsWithChildren{
    children: React.ReactNode,
}
const ItemsBlock:React.FC<Props> = ({children}) => {
    return (
        <div className={'itemsBlock'}>
            {children}
        </div>
    );
};

export default ItemsBlock;