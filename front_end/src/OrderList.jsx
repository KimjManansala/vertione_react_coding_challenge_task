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

    const [inputValue, setInputValue] = useState('')
    const [itemList, setItemList] = useState([])
    const [isListDescending, setIsListDescending] = useState(false)

    const sortItemList = (list, descending = false) => {
        // Note function is expected to mutate given list
        list.sort()
        if (descending) {
            list.reverse()
        }
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const listenKeydownEvent = (event) => {
        if (event.key === 'Enter') {
            const newItemList = itemList.concat([inputValue])
            sortItemList(newItemList, isListDescending)
            setItemList(newItemList)
            setInputValue('')
        }

    }

    const handleDirectionClick = () => {
        const newItemList = [...itemList]
        sortItemList(newItemList , !isListDescending)
        setIsListDescending(!isListDescending)
        setItemList(newItemList)
    }

    const handleClearList = () => {
        setItemList([])
    }

    return (
        <div className="container">
            <div className="input-group">
                <input
                    onChange={handleInputChange}
                    onKeyDown={listenKeydownEvent}
                    value={inputValue}
                    className="add-item"
                >
                </input>
                <button
                    className="sort-direction"
                    onClick={handleDirectionClick}
                >
                    {isListDescending ? (
                        <Emoji
                            label="up_arrow"
                            symbol="⬆️"
                        />
                    ) : (
                        <Emoji
                            label="down_arrow"
                            symbol="⬇️"
                        />
                    )}
                </button>
                <button
                    className="clear-list"
                    onClick={handleClearList}
                >
                    <Emoji
                        label="clear"
                        symbol="❌"
                    />
                </button>
            </div>
            <ItemList
                itemList={itemList}
            />
        </div>
    );
}

export default OrderList;
