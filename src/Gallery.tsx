/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import "./App.css";
import Menu from "./menu";

const ImageGallery = () => {
  const [items, setItems] = useState(Menu);
  const [activeItems, setItemActive] = useState(false);
  const [search, setSearch] = useState("");

  const filterItem = (value) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === value;
    });

    setItems(updateItems);
    setItemActive(true);
  };

  const Searchlist = (e: any) => {
    const data = e.target.value;
    const datalist = Menu.filter((e: any) => {
      return e.name.toLowerCase().includes(data.toLowerCase());
    });
    setItems(datalist);
  };
  return (
    <div>
      <h1 className="heading">My Menu</h1>
      <hr />
      <div className="searchinput">
        <input
          type="text"
          placeholder="Enter your favourite food"
          className="search"
          onChange={Searchlist}
        />
      </div>
      <div className="list-button-item">
        <button className="button1" onClick={() => setItems(Menu)}>
          All
        </button>
        <button className="button1" onClick={() => filterItem("breakfast")}>
          Breakfast
        </button>
        <button className="button1" onClick={() => filterItem("lunch")}>
          Lunch
        </button>
        <button className="button1" onClick={() => filterItem("evening")}>
          Evening
        </button>
        <button className="button1" onClick={() => filterItem("dinner")}>
          Dinner
        </button>
      </div>

      <div className="row">
        {items.map((value) => {
          const { id, image, name, price, description } = value;
          return (
            <div className="container1" id={id.toString()}>
              <img
                src={image}
                style={{
                  height: "135px",
                  width: "100px",
                  objectFit: "cover",
                }}
              />
              <h3>
                {name}
                <br />
                <span className="para">{description}</span>
              </h3>
              <div className="button2">
                <p>
                  Price:<span className="price-info">{price}</span>
                </p>
                <button className="button3">order now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageGallery;
