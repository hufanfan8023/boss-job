import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './redux/index.redux'
import './App.css';

class App extends Component {
  render(){
    const num = this.props.num;
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync
    console.log(addGun)
    console.log(removeGun)
    return (
      <div className="App">
        <p>当前弹药{num}</p>
        <span onClick={addGun}>]加弹药</span>
        <span onClick={removeGun}>减弹药</span>
        <span onClick={addGunAsync}>减弹药</span>
      </div>
    );
  }
}

const mapStatetoProps = (state)=>{
  return {num: state}
}
const actionCreators = { addGun, removeGun, addGunAsync};

App = connect(mapStatetoProps,actionCreators)(App)

export default App