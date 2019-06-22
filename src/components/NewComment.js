import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddComment from '@material-ui/icons/AddComment';

import { blue } from '@material-ui/core/colors';

class NewComment extends Component {
  state = { textfield: '', author: '' };

  onFormSubmit = () => {
    const comment = this.state.textfield;
    const _AUTHOR = this.state.author;
    this.setState({ textfield: '' }); // clear textfield
    this.setState({ author: '' }); // clear author
    this.props.onCreateComment(comment, _AUTHOR);
  };

  handleTextFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.cardComment} style={{ padding: 10 }}>
        <ValidatorForm ref="form" onSubmit={this.onFormSubmit}>
          <TextValidator
            className={classes.textValidator}
            onChange={this.handleTextFieldChange}
            label="comment"
            name="textfield"
            margin="dense"
            variant="outlined"
            value={this.state.textfield}
            required
            fullWidth
            autoComplete="off"
          />
          <br />

          <TextValidator
            className={classes.textValidator}
            onChange={this.handleTextFieldChange}
            label="Author"
            name="author"
            margin="dense"
            variant="outlined"
            value={this.state.author}
            required
            autoComplete="off"
          />
          <br />

          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Add
            <Icon className={classes.rightIcon}>
              <AddComment />
            </Icon>
          </Button>
        </ValidatorForm>
      </Card>
    );
  }
}

const styles = theme => ({
  cardComment: {
    maxWidth: '100%',
    // backgroundColor: 'white'
    backgroundColor: blue[200],
  },
  inputLabelProps: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputbackground: {
    // background: 'white'
    backgroundColor: blue[100],
  },
  button: {
    // margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

NewComment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewComment);
