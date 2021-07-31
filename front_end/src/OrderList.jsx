import React, {useState} from 'react';
import ItemList from "./ItemList";

const Emoji = ({ label, symbol }) => (
    <span
        className="emoji"
        role="img"
        aria-label={label || ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);


function OrderList(props) {

    const [itemList, setItemList] = useState([])
    const [isListDescending, setIsListDescending] = useState(true)

    const listenKeydownEvent = (event) => {
        console.log('event', event)
    }

    return (
        <div>
            <div className="button-group">
                <input
                    onKeyDown={listenKeydownEvent}
                    className="add-item"
                >
                </input>
                <button class="sort-direction">
                    {isListDescending ? (
                        <Emoji
                            label="down_arrow"
                            symbol="⬇️"
                        />
                    ) : (
                        <Emoji
                            label="up_arrow"
                            symbol="⬆️"
                        />
                    )}
                </button>
            </div>
            <ItemList
            />
        </div>
    );
}

export default OrderList;
