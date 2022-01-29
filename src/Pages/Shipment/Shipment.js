import React from 'react';
import { Image } from 'react-bootstrap';
import success from '../../assest/success.gif'
const Shipment = () => {
    
    return (
        <div>
            <Image style={{display:"block",marginLeft:"auto",marginRight:"auto"}} className="w-50 h-50" src={success}/>
        </div>
    );
};

export default Shipment;