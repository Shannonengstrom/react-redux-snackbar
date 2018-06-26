import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class App extends Component {

  constructor () {
    super(); 
    this.state = {
      snack: ''
    }
   
  }


  handleAddSnack = (event) => {
    this.setState({
      snack: event.target.value
    })
  }

  addSnackToRedux = () => {
    const action = {type: 'ADD_SNACK', payload: this.state.snack};
    this.props.dispatch(action);
  }

  render() {

    const listItems = this.props.reduxStore.snackReducer.map(snackItem => 
      <li>{snackItem}</li>
    );
 

    return (
      <div className="App">
        
        <h3>Add your favorite snack!</h3>
        <input onChange={this.handleAddSnack} value={this.state.snack} />
        <button onClick={this.addSnackToRedux}>Add Snack!</button>
        <div>
          <ul>
            {listItems}

            {/* <li key={this.props.reduxStore.snackReducer}> {this.props.reduxStore.snackReducer} </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
