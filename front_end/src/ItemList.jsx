import React from 'react';



function ItemList({itemList}) {
    return (
        <ul className="items-list">
            {itemList.map((item, index) => (
                // Unclear on product requirements duplicates. Index use here is fine.
                <li key={`${item}-${index}`}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default ItemList;
