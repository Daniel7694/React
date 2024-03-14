import React from "react";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1},
    { title: 'Orange', isFruit: true, id: 2},
    { title: 'Garlic', isFruit: false, id: 3},
    { title: 'Apple', isFruit: true, id: 4},
];

function ShoppingList() {
    const listItems = products.map(product =>
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
);

    return(
        <ul>{listItems}</ul>
    );
}

export default ShoppingList;