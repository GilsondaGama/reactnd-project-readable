import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CustomizedSnackbars from './shared/CustomizedSnackbars';
import ContainerPost from '../containers/ContainerPost';
import styles from '../styles/StylePostList'

class PostsList extends Component {
  componentWillMount() {
    if (this.props.match.params.category) {
      const {
        fetchCategoryPosts,
        match: { params: { category } } 
      } = this.props;
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
        <div className={classes.root}>        
          <AppBar position="static" className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolBar}>
              <Typography variant="subtitle1" color="primary">
                You can comment on an existing or create a new post, Sort by:

              <Select 
                className={classes.select}
                value={postsOrder}
                onChange={event => {
                  postSortOrder(event.target.value)
                  this.setState({ seleted: event.target.value })
                }}
                >
                <MenuItem value="voteScore">VOTES</MenuItem>
                <MenuItem value="timestamp">DATE</MenuItem>
              </Select>
                </Typography>
            </Toolbar>
          </AppBar>

          {this.renderPosts()}
        </div>
      </Fragment>
    )
  }
}

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostsList);
