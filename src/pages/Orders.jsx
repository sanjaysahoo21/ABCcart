import React from 'react'
import './Orders.css'
import '../index.css'
import { Link } from 'react-router-dom'


function Orders() {
    return (
        <>
            <div className="orders-header">
                <Link to="/" >
                    <div className="orders-header-title">
                        sanju
                    </div>
                </Link>
                <div className="orders-header-checkout">
                    <div>orders checkout</div>
                </div>
                <div className="orders-header-cart">
                    <div>cart</div>
                </div>
            </div>
        </>
    )
}

export default Orders;