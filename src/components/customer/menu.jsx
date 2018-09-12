import React from "react";
import Item from "./item.jsx";

// test data... will delete after figuring out the props passed down.
let dummyMenuPayload = {
  cocktails: [
    {
      item_id: 1,
      item: "Hailey's Commit",
      price: 9.5,
      description: "This is Hailey's Drink",
      image_url: "/images/cocktails/haileyscommit.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    },
    {
      item_id: 4,
      item: "Rockin' Robin",
      price: 11.25,
      description: "This is Robin's Drink",
      image_url: "/images/cocktails/rockinrobin.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    }
  ],
  beers: [
    {
      item_id: 2,
      item: "Budlite",
      price: 2.5,
      description: "This is Budlite",
      image_url: "/images/beers/budlite.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    },
    {
      item_id: 6,
      item: "Leffe",
      price: 15.25,
      description: "This is Leffe",
      image_url: "/images/beers/leffe.png",
      created_at: "2018-09-06T08:40:51.620Z",
      updated_at: "2018-09-06T08:40:51.620Z"
    }
  ]
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDrink: ""
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleReturnToMenu = this.handleReturnToMenu.bind(this);
  }

  // temp function for modal display... will switch to react portals
  handleItemClick(drink) {
    this.setState({
      selectDrink: drink
    });
  }

  handleReturnToMenu() {
    this.setState({
      selectDrink: ""
    });
  }

  // render each category
  renderCategory(category, index) {
    return (
      <div key={index} id={category}>
        <h2>{category}</h2>
        {dummyMenuPayload[category].map((drink, index) => {
          return this.renderDrink(drink, index);
        })}
      </div>
    );
  }

  // render each drink
  renderDrink(drink, index) {
    return (
      <div key={index}>
        <button onClick={() => this.handleItemClick(drink.item)}>
          {drink.item}
        </button>
        {this.state.selectDrink === drink.item && (
          <Item item={drink} returnToMenu={this.handleReturnToMenu} />
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
        {Object.keys(dummyMenuPayload).map((category, index) => {
          return this.renderCategory(category, index);
        })}
      </div>
    );
  }
}

export default Menu;