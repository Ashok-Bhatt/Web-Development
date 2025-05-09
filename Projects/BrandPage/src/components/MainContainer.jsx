"use strict";
import "./MainContainer.css";

const MainContainer = ()=>{
    return (
        <div id="main-body">
            <div id="product-info">
                <p class="tagline">Your feet deserve the best</p>
                <p class="product-description">Your Feet deserve the best and we are here to help you with our shoes. Your Feet deserve the best and we are here to help you with our shoes.</p>
                <div id="product-button-container">
                    <button id="shop-now-button">Shop Now</button>
                    <button id="category-button">Category</button>
                </div>
                <p style={{marginTop: "10px"}}>Also Available On</p>
                <div id="ecommerce-platform-container">
                    <img src="/images/amazon_logo.png" alt="amazon logo" />
                    <img src="/images/flipkart_logo.png" alt="amazon logo" />
                </div>
            </div>
            <div id="product-image">
                <img src="/images/shoe.jpg" alt="Shoe Image" />
            </div>
        </div>
    );
}

export default MainContainer;