import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator  } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import { createPost, fetchCategories } from '../actions';
import { Link } from 'react-router-dom'

import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
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
        <option key={category.name} value={category.path}>
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
                margin="dense"
                variant="outlined"
                value={formData.category}
                SelectProps={{
                  native: true
                }}
                required
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
                margin="dense"
                variant="outlined"
                value={formData.title}
                required
                autoComplete="off"
              />
              <br />
              <TextValidator
                className={classes.textValidator}
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"                
                label="body"
                name="body"
                multiline
                rows="3"
                required
                value={formData.body}
                value={this.state.multiline}  
                autoComplete="off"                              
              />
              <br />
              <TextValidator
                className={classes.textValidator}
                onChange={this.handleChange}
                label="Author"
                name="author"
                margin="dense"
                variant="outlined"
                value={formData.author}
                required
                autoComplete="off"                
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
                    color="inherit"
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