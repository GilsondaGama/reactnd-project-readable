import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import GradeIcon from '@material-ui/icons/Grade';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import IconDelete from '@material-ui/icons/Delete';
import IconBorderColor from '@material-ui/icons/BorderColor';
import IconThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import IconThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import IconRedux from '@material-ui/icons/OpenWith';
import IconUdacity from '@material-ui/icons/School';
import IconReact from '@material-ui/icons/ImportantDevices';

import CustomizedBadge from '../utilities/CustomizedBadge'
import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
    marginright: 10,
  },
  badge: {
    top: '50%',
    marginright: 10,
    padding: 25,
  },
  card: {
    marginBottom: 15,  
  },
  CardContent: {
    backgroundColor: blue[800],
  },
  CardHeader: {
    backgroundColor: blue[800],
    color: blue[800],
  },  
  actions: {
    display: 'flex',
    backgroundColor: blue[200],    
  },
  avatar: {
    backgroundColor: blue[500],
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

class PostCard extends Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <IconReact />
            </Avatar>
          }
          title={
            <Typography component="h5" variant="h5">
              Shrimp and Chorizo Paella
            </Typography>
          }
          subheader="Posted by David Olaf - September 14, 2016"
        />

        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>
          <Badge badgeContent={4} color="primary">
            <GradeIcon />
          </Badge>              
          <Chip
            avatar={
              <Avatar>
                <IconThumbUpAlt />
              </Avatar>
            }
            label="Like Post" clickable className={classes.chip} color="primary" onClick={handleClick}         
          />
          <Chip
            avatar={
              <Avatar>
                <IconThumbDownAlt />
              </Avatar>
            }
            label="Dislike Post" clickable className={classes.chip} color="primary" onClick={handleClick}         
          />

          <IconButton ></IconButton>         

          <IconButton aria-label="4 pending messages" className={classes.margin}>
            <Badge badgeContent={10} color="primary">
              <SpeakerNotes />
            </Badge>
          </IconButton>    

          <IconButton ></IconButton>         
          <IconButton ></IconButton>         

          <Chip
            avatar={
              <Avatar>
                <IconBorderColor />
              </Avatar>
            }
            label="Edit" clickable className={classes.chip} color="primary" onClick={handleClick}         
          />
          <Chip
            avatar={
              <Avatar>
                <IconDelete />
              </Avatar>
            }
            label="Delete" clickable className={classes.chip} color="secondary" onClick={handleDelete}         
          />

        </CardActions>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);