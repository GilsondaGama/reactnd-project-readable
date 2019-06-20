import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator  } from 'react-material-ui-form-validator';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import NotFound from './shared/NotFound'
import styles from '../styles/StyleNewPost'

const GoToMain = props => <Link to="/" {...props} />

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        id: '',
        title: '',
        body: '',
        author: '',
        category: '',
      },
      submitted: false,
    };
  }

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id, this.fillFields)
  }

  fillFields = () => {
    const { post } = this.props
    if (post) {
      const { deleted, timestamp, voteScore, ...values } = post
      this.setState({ model: { ...values } });
    }
  }

  handleChange = (event) => {
    const { model } = this.state;
    model[event.target.name] = event.target.value;
    this.setState({ model });
  }

  handleSubmit = () => {
    const { model } = this.state
    const { id, author, category, ...values } = model
    // Call the editPost action
    this.props.editPost(model.id, values, () => {
      this.props.history.push('/');
    })
  }

  getOptions = () => {
    const { categories } = this.props
    if (categories.length > 0) {
      return  categories.map(category => (
        <option key={category.path} value={category.path}>
        {category.name}
        </option>
      ));
    }
  };

  render() {
    const {
      post,
      match: { params: { category } },
      classes
    } = this.props
    const { model, submitted } = this.state;

    return (
      (!post || post.category !== category)
      ? <NotFound />
      :
      <div>
        <DialogTitle id="form-dialog-title" className={classes.DialogTitle}>
          EDITING POST
        </DialogTitle>

        <DialogContent> 
          <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
          >
            <SelectValidator
              className={classes.selectValidator}
              label="Select a Category"
              name="category"
              id="category"
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"                    
              value={model.category}
              SelectProps={{ native: true }}
              disabled={true} 
              required
            >
              <option value=""></option>
              { this.getOptions() }
            </SelectValidator>
            <br />

            <TextValidator
              className={classes.textValidator}
              label="Title"
              name="title"
              value={model.title}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
              required
              fullWidth
              autoComplete="off"
              InputLabelProps={{ 
                classes: {
                  root: classes.inputLabelProps
                }
              }}             
            />
            <br />

            <TextValidator
              className={classes.textValidator}
              onChange={this.handleChange}
              label="Content"
              name="body"
              value={model.body}
              margin="dense"
              variant="outlined"                
              multiline
              rows="3"
              required
              fullWidth         
              autoComplete="off"   
            />
            <br />

            <TextValidator
              className={classes.textValidator}
              label="Author"
              name="author"
              value={model.author}
              onChange={this.handleChange}
              margin="dense"
              variant="outlined"
              required
              fullWidth   
              disabled={true} 
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
                      (submitted && 'submitted!')
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
      </div>            
    )
  }
}

EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditPost);
