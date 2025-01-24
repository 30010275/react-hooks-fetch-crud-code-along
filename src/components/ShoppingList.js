// ShoppingList.js
import React from "react";
import Item from "./Item";
import NewItemForm from "./NewItemForm";

function ShoppingList({ items, onAddItem, onUpdateItem, onDeleteItem }) {
  return (
    <div className="ShoppingList">
      <NewItemForm onAddItem={onAddItem} />
      <ul className="Items">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onUpdateItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;