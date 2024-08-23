import React, { useState } from 'react';
import { OrderList} from './OrderList';



const OrderPage = () => {
     function OrderPage  ({ onSelectOrder }) {
        return (
            <OrderList />
        );
    };
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const handleSelectOrder = (OrderId) => {
        setSelectedOrderId(OrderId);
    };
    return (
   <div>
     <OrderPage  onSelectOrder={handleSelectOrder} /> 
   </div>        
    )
}
export default OrderPage;

