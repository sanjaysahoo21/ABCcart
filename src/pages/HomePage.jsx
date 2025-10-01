import React from "react";
import Navbar from "./Navbar";
import '../index.css'
import './HomePage.css'
import { useState } from "react";
import {products} from "../scripts/Products.js";


function HomePage() {

    const [cardItems, setCardItems] = useState(products);

    return(
        <>
            <Navbar />
            <div className="cards-section">
                <div className="card-items">
                    {cardItems.map((item) => {
                        return(
                            <div className="card-item" key={item.name}>
                                <div className="card-item-image">
                                    <img className="item-image" src={item.itemImage} alt="itemImage" />
                                </div>
                                <div className="card-item-info">
                                    <div className="card-item-name">{item.itemName}</div>
                                    <div className="card-item-rating">{item.itemRating}</div>
                                    <div className="card-item-price">{item.itemPrice}</div>
                                </div>
                                <div className="card-item-btn">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )

}

export default HomePage;