import { useReducer } from "react";

function quantityReducer(state, action) {
  if (action.type === "increase") return state + 1;

  if (action.type === "decrease") {
    if (state === 1) return state;
    return state - 1;
  }

  return state;
}

function trafficReducer(state, action) {
  if (action.type === "next") {
    if (state === "Red") return "Yellow";
    if (state === "Yellow") return "Green";
    return "Red";
  }

  return state;
}

function cartReducer(state, action) {
  if (action.type === "setItem") {
    return { ...state, item: action.item };
  }

  if (action.type === "add") {
    if (!state.item.trim()) return state;

    return {
      item: "",
      cart: [...state.cart, state.item]
    };
  }

  return state;
}

function postReducer(state, action) {
  if (action.type === "like") {
    return { ...state, likes: state.likes + 1 };
  }

  if (action.type === "dislike") {
    return { ...state, dislikes: state.dislikes + 1 };
  }

  return state;
}

function TrafficLight() {
  const [color, dispatch] = useReducer(trafficReducer, "Red");

  return (
    <div>
      <h2>Traffic Light: {color}</h2>
      <button onClick={() => dispatch({ type: "next" })}>Next</button>
    </div>
  );
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, {
    item: "",
    cart: []
  });

  return (
    <div>
      <h2>Shopping Cart</h2>

      <input
        value={state.item}
        onChange={(e) =>
          dispatch({ type: "setItem", item: e.target.value })
        }
      />

      <button onClick={() => dispatch({ type: "add" })}>
        Add to Cart
      </button>

      <ul>
        {state.cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Post() {
  const [state, dispatch] = useReducer(postReducer, {
    likes: 0,
    dislikes: 0
  });

  return (
    <div>
      <h2>Post</h2>

      <button onClick={() => dispatch({ type: "like" })}>
        Like
      </button>

      <button onClick={() => dispatch({ type: "dislike" })}>
        Dislike
      </button>

      <p>Likes: {state.likes}</p>
      <p>Dislikes: {state.dislikes}</p>
    </div>
  );
}

function App() {
  const [quantity, dispatch] = useReducer(quantityReducer, 1);

  return (
    <div>
      <h2>Quantity: {quantity}</h2>

      <button onClick={() => dispatch({ type: "increase" })}>+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>-</button>

      {quantity === 1 && <p>Minimum quantity is 1</p>}

      <TrafficLight />

      <ShoppingCart />

      <Post />
    </div>
  );
}

export default App;