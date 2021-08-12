import './App.css';
import React from 'react';
import CardContainer from './components/CardContainer';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: ""
    };

    this.handleNewCardSubmit = this.handleNewCardSubmit.bind(this);
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
          front: 'Plate',
          back: 'Circle',
          hint: 'Shape'
        };
        const postOptions = {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(data)
        };
    
        fetch("http://localhost:9000/newCard", postOptions)
        .then(res => {console.log(res)})
  }

  handleNewCardSubmit(){
      this.postCall();
  }
  
  render(){
    return (
      <div>
        <p>First text</p>
        <p>{this.state.result}</p>
        <CardContainer></CardContainer>
        <form onSubmit={this.handleNewCard}>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default App;
