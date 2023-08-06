import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function EzClothing(props) {
  return (<>
  
  <Card sx={{ maxWidth: 345   , marginTop: '1%'}}>
      <CardActionArea>
        <CardMedia sx={{ height: props.hight ?? '200px' }}
          component="img"
          height="240px"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.dec}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        {props.button &&
        <a  target="_blank" href={props.button} >
        <Button size="small" color="primary">
          View
        </Button>
        </a>
}
      </CardActions>
      
    </Card>
  </>
  );
}
export default EzClothing;