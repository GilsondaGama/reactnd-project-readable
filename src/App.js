import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Main from './containers/ContainerMain';
import PostDetail from './containers/ContainerPostDetail';
import ContainerEditPost from './containers/ContainerEditPost';
import NewPost from './components/NewPost';
import ResponsiveMenu from './components/ResponsiveMenu';

import styles from './styles/StyleCategories'

class App extends Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <ResponsiveMenu onChangeDrawer={this.onChangeDrawer} />
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/post/new" exact component={NewPost} />
                <Route path="/:category/edit/:id" children={props => <ContainerEditPost {...props} />} />
                <Route path="/:category" exact component={props => <Main {...props} />} />
                <Route path="/:category/:id" exact component={props => <PostDetail {...props} />} />
              </Switch>
            </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
