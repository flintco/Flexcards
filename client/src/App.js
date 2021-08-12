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
    this.postCall();
  }

  firstAPICall(){
    fetch("http://localhost:9000")
    .then(res => res.text())
    .then(res => this.setState({result: res}));
  }

   
  postCall(){
        const data = { 
          front: "C",
          back: "F",
          hint: "Last initial"
        };
        const postOptions = {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(data)
        };
    
        fetch("http://localhost:9000/newCard", postOptions)
        .then(res => {console.log(res)})
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
