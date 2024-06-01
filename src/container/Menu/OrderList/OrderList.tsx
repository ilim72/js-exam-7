import React, {PropsWithChildren} from 'react';
interface Props extends PropsWithChildren{
    children: React.ReactNode,
}
const OrderList:React.FC<Props> = ({children}) => {
    return (
        <div className={'OrderList'}>
            {children}
        </div>
    );
};

export default OrderList;