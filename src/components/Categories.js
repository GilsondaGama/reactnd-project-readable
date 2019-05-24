import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'       
import _ from 'lodash';

import {  AppBar, Toolbar, IconButton, Typography, Hidden,
          Drawer, MenuList, MenuItem, withStyles,  
          ListItemIcon, Divider, Menu, CssBaseline } from '@material-ui/core'    

import IconRedux from '@material-ui/icons/OpenWith';
import IconUdacity from '@material-ui/icons/School';
import IconReact from '@material-ui/icons/ImportantDevices';
import IconHome from '@material-ui/icons/Home';
import IconPlaylistAdd from '@material-ui/icons/PlaylistAdd';

import MenuIcon from '@material-ui/icons/Menu';

import logoReact from '../assets/LogoReactMenu.svg'
import logoRedux from '../assets/logoRedux.svg'
import '../styles/Layout.css'
import styles from '../styles/StyleCategories'

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  state = {
    mobileOpen: false,
    open: false,
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }     

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  renderIcon = (icon) => {
    switch (icon) {
      case 'React':
        return <IconReact />
      case 'Redux':
        return <IconRedux />
      case 'Udacity':
        return <IconUdacity />
      default:
        return <IconHome />       
    }
  }
    
  render() {
    const { categories } = this.props; 
    const { classes, location: { pathname }, children } = this.props;
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

        <MenuList> 
          <MenuItem component={ Link } 
            to="/" onFocus={ '/' === pathname } 
            className={classes.menuItem}
            >
            <ListItemIcon className={classes.icon} >
              <IconHome />
            </ListItemIcon>   
            <Typography variant="Headline">              
              All Categories
            </Typography>                 
          </MenuItem>              

          {_.map(categories, category => {
            return <MenuItem 
              component={Link} 
              className={classes.menuItem}
              to={`/${category.path}`} 
              key={category.path}                             
            >             
            <ListItemIcon className={classes.icon}>
              {this.renderIcon(category.name)}
            </ListItemIcon>
            <Typography variant="Headline">
              {category.name}
            </Typography>              
          </MenuItem> })}

          <Divider />
          <Divider />

          <MenuItem 
            component={ Link } 
            to="/post/new" onFocus={ '/post/new' === pathname } 
            className={classes.menuItem}
          >
            <ListItemIcon className={classes.icon} >
              <IconPlaylistAdd />
            </ListItemIcon>   
            <Typography variant="Headline">              
              New Post
            </Typography> 
          </MenuItem> 
       </MenuList> 
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
              <MenuIcon />
              <Menu />
            </IconButton>               

            <Typography variant = "subtitle1" color = "inherit" noWrap >
              Project for React Nanodegree program
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

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </Fragment>    
  }     
}

// export default Categories;
export default compose(
  withRouter, 
  withStyles(styles)
)(Categories)