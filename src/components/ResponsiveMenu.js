import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider, IconButton, CssBaseline,
         AppBar, Toolbar, Typography, Hidden} from '@material-ui/core'

import ContainerCategories from '../containers/ContainerCategories';
import logoReact from '../assets/LogoReactMenu.svg'
import logoRedux from '../assets/logoRedux.svg'
import styles from '../styles/StyleCategories'
import '../styles/Layout.css'

//const GoToNewPost = props => <Link to="/post/new" {...props} />

class ResponsiveMenu extends Component {
  state = {
    mobileOpen: false,
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }     

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { classes } = this.props;
    const { mobileOpen } = this.state 
    const drawer = ( 
      <div>       
        <div className={classes.drawerHeader}>
          <img src={logoReact} className="App-React" alt="React" />
          <img src={logoRedux} className="App-Redux" alt="Redux" />
          <Typography variant="h6" align="left" color="primary" noWrap >
            Readable
          </Typography>
        </div>

        <Divider />
          <ContainerCategories />
        <Divider />
      </div>
    )

    return <Fragment>
      <div className={classes.root}>      
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton
              color="inherit"
              aria-label="Open drawer"            
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >

            </IconButton>               

            <Typography variant = "subtitle1" color = "inherit">
              A content and comment web app
                <br/>
              <Typography variant = "caption" color = "inherit" noWrap>
                Created with React/Redux by &nbsp;
                <a href="https://github.com/GilsondaGama"
                  rel="noopener noreferrer"
                  target="_blank" title="Github Profile">Gilson da Gama</a>
                &nbsp; as an assignment for the &nbsp;
                <a href="https://udacity.com/course/react-nanodegree--nd019/"
                  rel="noopener noreferrer"
                  target="_blank" title="Udacity">Udacity React Nanodegree</a>
                &nbsp; program.
              </Typography>
            </Typography>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>

          </Hidden>

          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </Fragment>    
  }
}     

ResponsiveMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveMenu);
