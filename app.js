// TODO

// var GroceryList = (props) => {

//   var onBlah = (event) => {
//     console.log('I got clicked');
//   }

//   return (
//     <ul>
//       <li onClick={onBlah}>{props.items[0]}</li>
//       <li>{props.items[1]}</li>
//     </ul>
//   );
// };

var food = ['Cucumber', 'Kale'];
var cost = [1, 2];

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={food}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem foods={item} />
    )}
  </ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossedOut: false
    };
  }

  onGroceryListItemClick() {
    this.setState({
      crossedOut: !this.state.crossedOut
    });
  }

  render () {
    var style = {
      textDecoration: this.state.crossedOut ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onGroceryListItemClick.bind(this)}>{this.props.foods}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));