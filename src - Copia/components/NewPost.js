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
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
      >

        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Creating New Post</DialogTitle>
            <Divider />

            <DialogContent>

            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                required
                select
                className={classes.textField}
                id="outlined-select-currency-native"
                onChange={this.handleChange}
                value={this.state.currency}
                SelectProps={{
                  native: true,
                }}
                margin="normal"
                variant="outlined"
              >
                <option value="">Select a category</option>
                { this.getOptions() }
              </TextField>

              <TextField
                required
                id="outlined-dense"
                label="Title of the post"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
              />

              <TextField
                required
                id="outlined-multiline-static"
                label="Body of the post"
                multiline
                rows="3"
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />              


            </form >
          </DialogContent>


            <Divider />
            <DialogActions>
              <Button variant="contained" onClick={this.handleClose} color="secondary" component={GoToMain}>
                Cancel
              </Button>


              <Button 
                onClick={this.handleClose} 
                component={GoToMain}
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
            </DialogActions>
          </Dialog>
        </div>
      </ValidatorForm>
    )
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { categories: state.categories }
}

const styles = theme => ({
  root: {
    marginTop: 75,
    flexGrow: 1,
  },
  margin: {
   margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  textValidator: {
    width: 500
  },
  selectValidator: {
    width: 500,
    marginTop: 20
  },
  buttonContainer: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 0,
    marginTop: 50
  },
  button: {
    width: 150,
    margin: 5
  },
});

export default withStyles(styles)(connect(mapStateToProps, {createPost, fetchCategories})(NewPost));
