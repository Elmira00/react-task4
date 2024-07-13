import React from "react";
import { products } from "../data";
import { getImageUrl } from "../Utils";
import "./ListItems.css";
const myProducts = products.filter((p) => p.id >= 1);

function Product({ p, isExpired }) {
  if (isExpired) {
    return (
      <div className="user-box">
        <img className="expired-img" alt="expired" src="images/expired.png"></img>
        <img className="user-img" alt="user" src={getImageUrl(p)}></img>
        <h3 id="name">
          Name : <b>{p.name}</b>
        </h3>
        <h3 id="price">
          Price : <b>{p.price}$</b>
        </h3>
        <h4 id="discount">
          Discount : <b>{p.discount}$</b>
        </h4>
        <h4>
          Expire Date : <b>{p.expireDate}</b>
        </h4>
        <p>Description : {p.description}</p>
      </div>
    );
  }
  return (
    <div>
      <img className="user-img" alt="user" src={getImageUrl(p)}></img>
      <h3 id="name">
        Name : <b>{p.name}</b>
      </h3>
      <h3 id="price">
        Price : <b>{p.price}$</b>
      </h3>
      <h4 id="discount">
        Discount : <b>{p.discount}$</b>
      </h4>
      <h4>
        Expire Date : <b>{p.expireDate}</b>
      </h4>
      <p>Description : {p.description}</p>
    </div>
  );
}
function isExpired(product) {
  var today = new Date();
  var productDate = new Date(product.expireDate);
  console.log(productDate.getFullYear())
  if (
    productDate.getFullYear() < today.getFullYear() ||
    (productDate.getMonth() < today.getMonth() &&
      productDate.getFullYear() === today.getFullYear())||(productDate.getDate()<today.getDate()&&productDate.getMonth() === today.getMonth() &&
      productDate.getFullYear() === today.getFullYear())
  ) {
    return true;
  }
  return false;
}
const listItems = myProducts.map((product) => (
  <li className="user-list" key={product.id} id={product.id}>
    <Product isExpired={isExpired(product)} p={product}></Product>
  </li>
));

export default function ListItems() {
  return <ul>{listItems}</ul>;
}
