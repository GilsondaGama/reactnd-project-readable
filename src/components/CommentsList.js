import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ContainerComment from '../containers/ContainerComment';
import NewComment from './NewComment';

import { blue } from '@material-ui/core/colors';

class CommentsList extends Component {
  componentWillMount() {
    // Loading comments by postId
    const { fetchComments, postId } = this.props;
    fetchComments(postId);
  }

  onCreateComment = (comment, author) => {
    const { postId } = this.props
    this.props.createComment(comment, author, postId, () => {
      this.props.updatePostCommentsCount()
    });
  }

  onDeleted = (commentId) => {
    const {
      postId,
      deleteComment,
      fetchComments,
    } = this.props;

    deleteComment(commentId, () => {
      fetchComments(postId);
      this.props.updatePostCommentsCount();
    });
  }

  renderComments() {
    const { classes, comments, postId } = this.props
    return _.map(comments, (comment, id) => {

      if (typeof comment.body !== 'undefined') {
        return (
          <Card key={id} className={classes.card}>
            <List>
              <ContainerComment
                postId={postId}
                comment={comment}
                onDeleted={this.onDeleted}
              />
            </List>
          </Card>
        )
      }
    })
  }

  render() {
    return (
      <Grid item xs={12}>
        <NewComment
          onCreateComment={this.onCreateComment}
          />

        <br />
        { this.renderComments()}
      </Grid>
    )
  }
}

const styles = theme => ({
  card: {
    marginTop: 10,
    maxWidth: '100%',
    backgroundColor: blue[100],  
  },
  badge: {
    backgroundColor: blue[300],  
    padding: 15,
  },  
});

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsList);
