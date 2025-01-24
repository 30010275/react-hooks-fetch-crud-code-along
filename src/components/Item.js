// Item.js
import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleAddToCartClick() {
    const updatedItem = {
      ...item,
      isInCart: !item.isInCart,
    };

    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: updatedItem.isInCart }),
    })
      .then((response) => response.json())
      .then((data) => onUpdateItem(data));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        onDeleteItem(item);
      }
    });
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
        className={item.isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
}

export default Item;
