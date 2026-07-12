import react from "react";

let items = ["oil", "icecream", "charger", "books", "lights", "toy", "netflix"];

function App(){


  return <> <center>
        <h1>Shop list</h1>
        

        {items.length === 0 ? <h4>Shop is empty</h4> : null}
        {items.length === 0 && <h4>Shop is empty</h4>}
        
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </center></>
}
export default App;