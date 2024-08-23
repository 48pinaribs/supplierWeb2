import React, { useState } from 'react';
import { OfferList} from './OfferList';

const OfferPage = () => {
     function OfferPage  ({ onSelectOffer }) {
        return (
    
            <OfferList />
        );
    };
    
    const [selectedOfferId, setSelectedOfferId] = useState(null);
    const handleSelectOffer = (offerId) => {
        setSelectedOfferId(offerId);
    };
    return (
        <div>  
        <OfferPage   onSelectOffer={handleSelectOffer} />
        </div> 
    )
}
export default OfferPage;

