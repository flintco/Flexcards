import './App.css';
import React from 'react';
import CardContainer from './components/CardContainer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: ""
    };
  }

  componentWillMount(){
    this.firstAPICall();
  }

  firstAPICall(){
    fetch("http://localhost:9000")
    .then(res => res.text())
    .then(res => this.setState({result: res}));
  }
  
  render(){
    return (
      <div>
        <p>First text</p>
        <p>{this.state.result}</p>
        <CardContainer></CardContainer>
      </div>
    )
  }
}

export default App;
