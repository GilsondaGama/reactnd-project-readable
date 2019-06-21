import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createPost, fetchCategories } from '../actions';

import styles from '../styles/StyleNewPost';

const GoToMain = props => <Link to="/" {...props} />;

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
    this.props.fetchCategories();
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
    });
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  getOptions = () => {
    const { categories } = this.props;

    if (categories.length > 0) {
      return categories.map(category => (
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
        <DialogTitle id="form-dialog-title" className={classes.DialogTitle}>
          CREATING A NEW POST
        </DialogTitle>

        <DialogContent>
          <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
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
                native: true,
              }}
              required
            >
              <option value="" />
              {this.getOptions()}
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
              fullWidth
              autoComplete="off"
            />
            <br />
            <TextValidator
              className={classes.textValidator}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
              label="Content"
              name="body"
              multiline
              rows="3"
              required
              fullWidth
              value={formData.body}
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
              fullWidth
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
                {(submitted && 'Submitted!') || (!submitted && 'Submit')}
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
      </div>
    );
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { createPost, fetchCategories },
  )(NewPost),
);
