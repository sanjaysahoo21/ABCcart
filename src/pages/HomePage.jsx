import React from "react";
import Navbar from "./Navbar";
import itemImage1 from "../assets/images/shopping1.webp"
import itemImage2 from "../assets/images/shopping2.webp"
import itemImage3 from "../assets/images/shopping3.webp"
import itemImage4 from "../assets/images/shopping4.webp"
import itemImage5 from "../assets/images/shopping5.webp"
import '../index.css'
import './HomePage.css'
import { useState } from "react";


function HomePage() {

    const [cardItems, setCardItems] = useState([
        {
            itemImage : itemImage1,
            itemName : "item1",
            itemRating : "***",
            itemPrice : "$40.0",
        },
        {
            itemImage : itemImage2,
            itemName : "item2",
            itemRating : "***",
            itemPrice : "$56.0",
        },
        {
            itemImage : itemImage3,
            itemName : "item3",
            itemRating : "***",
            itemPrice : "$78.0",
        },
        {
            itemImage : itemImage4,
            itemName : "item4",
            itemRating : "***",
            itemPrice : "$90.0",
        },
        {
            itemImage : itemImage5,
            itemName : "item5",
            itemRating : "***",
            itemPrice : "$100.0",
        }
    ])

    return(
        <>
            <Navbar />
            <div className="cards-section">
                <div className="card-items">
                    {cardItems.map((item) => {
                        return(
                            <div className="card-item">
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