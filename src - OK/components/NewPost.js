import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator  } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import { createPost, fetchCategories } from '../actions';
import { Link } from 'react-router-dom'

import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from '../styles/StyleNewPosts'

const GoToMain = props => <Link to="/" {...props} />

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: '',
        body: '',
        author: '',
        category: '',
      },
      submitted: false,
      open: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWilMount() {
    this.props.fetchCategories()
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    this.setState({ submitted: true }, () => {
      this.props.createPost(this.state.formData, () => {
        this.props.history.push('/');
      });
      // setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getOptions = () => {
    const { categories } = this.props

    if (categories.length > 0) {
      return  categories.map(category => (
        <option key={category.name} value={category.name}>
        {category.name}
        </option>
      ));
    }
  };

  render() {
    const { classes } = this.props;
    const { formData, submitted } = this.state;
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Creating a New Post</DialogTitle>
          <Divider />      

          <DialogContent>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
            >
              <SelectValidator
                className={classes.selectValidator}
                id="category"
                onChange={this.handleChange}
                label="Select a Category"
                name="category"
                value={formData.category}
                SelectProps={{
                  native: true
                }}
                validators={['required']}
                errorMessages={['The category is required']}
              >
                <option value=""></option>
                { this.getOptions() }
              </SelectValidator>
              <br />
              <TextValidator
                className={classes.textValidator}
                onChange={this.handleChange}
                label="Title"
                name="title"
                value={formData.title}
                validators={['required']}
                errorMessages={['The title is required']}
              />
              <br />
              <TextValidator
                className={classes.textValidator}
                onChange={this.handleChange}
                label="body"
                name="body"
                value={formData.body}
                validators={['required']}
                errorMessages={['The body is required']}
              />
              <br />
              <TextValidator
                className={classes.textValidator}
                onChange={this.handleChange}
                label="Author"
                name="author"
                value={formData.author}
                validators={['required']}
                errorMessages={['The author is required']}
              />
              <br />
              <div className={classes.buttonContainer}>
                <Button
                  className={classes.button}
                  raised="true"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={submitted}
                >
                  {
                    (submitted && 'Your form is submitted!')
                    || (!submitted && 'Submit')
                  }
                </Button>

                <Button
                    component={GoToMain}
                    className={classes.button}
                    raised="true"
                    variant="contained"
                    color="secondary"
                    disabled={submitted}
                >
                  Cancel
                </Button>
              </div>
            </ValidatorForm>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { categories: state.categories }
}

export default withStyles(styles)(connect(mapStateToProps, {createPost, fetchCategories})(NewPost));
