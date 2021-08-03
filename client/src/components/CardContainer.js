import React from 'react';
import './CardContainer.css';
import Card from '@material-ui/core/Card'

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class CardContainer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        front: "John Adams",
        back: "Lawyer",
        hint: "Job"
      }

      //Binding needed to work in the callback
      this.flipCardHandler = this.flipCardHandler.bind(this);
      this.nextCardHandler = this.nextCardHandler.bind(this);
    }

    flipCardHandler(){
      console.log('Flip handler has started');
      this.setState({
        front: this.state.back,
        back: this.state.front,
      });
    }

    nextCardHandler(){
      //"that" variable keeps track of the original "this" because "this" value can change. 
      var that = this;
      fetch("http://localhost:9000/nextCard")
        .then(res => res.json())
        .then(res => that.setState({
            front: res.front,
            back: res.back,
            hint: res.hint
            }))
        .catch(console.error);

    }

    render(){
        return (
          <div>
            <p>The is the cards component</p>

            <Card style= {{
              maxWidth: 345,
              backgroundColor: "#fafafa",
            }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {this.state.front}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {this.state.hint}
                </Typography> 

                </CardContent>

                <CardActions>
                  <Button onClick={this.flipCardHandler} size="small" color="primary">
                    Flip card
                  </Button>
                  <Button onClick={this.nextCardHandler} size="small" color="primary">
                    Next Card
                  </Button>
                </CardActions>

            </Card>
          </div>
        )
      }
    }
    
    export default CardContainer;