import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'materialize-css/dist/css/materialize.min.css';
import {Link,BrowserRouter as Router} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className='gridlist'>
    <div className={classes.root}>

      <div className='container'>
      <Router>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={3}>
              <Link to="/" >
                    <Card className="card-content  hoverable">
                    <CardMedia className={classes.cardMedia} style={{width:'250px', height:'220px'}} />
                        <CardContent className={classes.cardContent}>
                        <span className="menu" >cat1</span>
                        </CardContent>
                    </Card>
              </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
              <Link to="/" >
                    <Card className="card-content  hoverable">
                    <CardMedia className={classes.cardMedia} style={{width:'250px', height:'220px'}} />
                        <CardContent className={classes.cardContent}>
                        <span className="menu" >cat2</span>
                        </CardContent>
                    </Card>
              </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
              <Link to="#" >
                    <Card className="card-content  hoverable">
                    <CardMedia className={classes.cardMedia} style={{width:'250px', height:'220px'}} />
                        <CardContent className={classes.cardContent}>
                        <span className="menu" >cat3</span>
                        </CardContent>
                    </Card>
              </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
              <Link to="#" >
                    <Card className="card-content  hoverable">
                    <CardMedia className={classes.cardMedia} style={{width:'250px', height:'220px'}} />
                        <CardContent className={classes.cardContent}>
                        <span className="menu" >cat4</span>
                        </CardContent>
                    </Card>
              </Link>
        </Grid>
      </Grid>
      </Router>
      </div>
    </div>
    </div>
  );
}
