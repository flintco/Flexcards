import React from 'react';
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
    }

    render(){
        return (
          <div>
            <p>The is the cards component</p>

            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Who was the 1st president of the United States?
                </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" color="primary">
                    Flip card
                  </Button>
                  <Button size="small" color="primary">
                    Next Card
                  </Button>
                </CardActions>

            </Card>
          </div>
        )
      }
    }
    
    export default CardContainer;