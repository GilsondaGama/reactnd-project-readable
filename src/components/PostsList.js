import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

import ContainerPost from '../container/ContainerPost';
import CustomizedSnackbars from '../styles/CustomizedSnackbars';

import { blueGrey } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
const drawerWidth = 800;

class PostsList extends Component {
  componentWillMount() {
    if (this.props.match.params.category) {
      const {
        fetchCategoryPosts,
        match: { params: { category } } } = this.props;
        fetchCategoryPosts(category.toLowerCase());
      } else {
        this.props.fetchPosts();
      }
    }

    renderPosts() {
      const { classes, posts, deletePost } = this.props;

      if (posts.length > 0) {
        const orderedPosts = _.sortBy(posts, this.props.postsOrder).reverse();
        return (
          _.map(orderedPosts, post => 
            <Grid key={post.id} item xs={12}>
              <ContainerPost
                key={post.id}
                post={post}
                onDeletePost={deletePost}
              />
            </Grid>
            
          )
        );
      }

      return (
        <div className={classes.root}>
          <CustomizedSnackbars
            variant={'warning'}
            message={'No posts found for the category!'}
          />
        </div>
      )
    }

    render(){
      const { classes, postsOrder, postSortOrder } = this.props;


      return(
        <Fragment>

          <AppBar position="fixed" className={classes.appBar} >
            <Paper className={classes.paper}>
              <Select 
                variante='outlined'
                value={postsOrder}
                onChange={event => {
                  postSortOrder(event.target.value)
                  this.setState({ seleted: event.target.value })
                }}
              >
                <MenuItem value="voteScore">Votes</MenuItem>
                <MenuItem value="timestamp">Date</MenuItem>
              </Select>
            </Paper>
          </AppBar>

          <div className={classes.root}>
            {this.renderPosts()}
          </div>
      </Fragment>
      )
    }
  }

const styles = theme => ({
  root: {
    marginTop: 1,
  },
  appBar: {
    width: 100,      
    marginTop: 5,
    marginRight: 10,
    marginLeft: drawerWidth,
    backgroundColor: blueGrey[800],  
  },
  paper: {
    textAlign: 'center',  
    backgroundColor: blue[400],  
  },  
  select: {
    size: 'small'
  }

});

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsList);
