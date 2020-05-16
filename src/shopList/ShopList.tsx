import React from "react";
import { TaskList } from "../components/TaskList";

const defaultList = ["bananas", "flan", "kebab", "pizza"];

export const ShopList = () => {
  const [shopList, setShopList] = React.useState(defaultList);
  const [newItem, setNewItem] = React.useState("");

  const clear = function () {
    setShopList([]);
  };
  const addItem = function () {
    setShopList([...shopList, "adding item"]);
    setNewItem("");
  };

  const inputFocusHandler = function () {
    setNewItem("");
  };

  const remove = function (productToRemove: string) {
    // discover how to remove one item from array and call setShopList

    // filter will remove items form array if function returns false
    setShopList(
      shopList.filter((product) => {
        // is product staring by "b"
        return product.indexOf("b") !== 0;
      })
    );
  };

  return (
    <div>
      <h1>Shop list</h1>
      <div>
        <input
          type="text"
          placeholder="product name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onFocus={inputFocusHandler}
        />
        <button onClick={addItem}>add</button>
      </div>
      <button>Clear</button>
      <div>
        <ul>
          {shopList.map(function (product) {
            return (
              <li>
                <label>
                  <span>{product}</span>
                  <button onClick={() => remove(product)}>remove</button>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <hr />
      <TaskList
        todos={[
          "make add to use the proper product",
          "make clear to work",
          "make move to work",
        ]}
      />
    </div>
  );
};
