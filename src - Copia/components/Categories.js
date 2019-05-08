import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import _ from 'lodash';

import {  AppBar, Toolbar, IconButton, Typography, Hidden, 
          Drawer, MenuList, MenuItem, Paper, withStyles, 
          ListItemIcon, ListItemText } from '@material-ui/core'  
import { Menu } from '@material-ui/icons'
import CssBaseline from '@material-ui/core/CssBaseline'    
import { compose } from 'recompose'       

import { blueGrey } from '@material-ui/core/colors';
import IconHome from '@material-ui/icons/Home';
import IconRedux from '@material-ui/icons/OpenWith';
import IconUdacity from '@material-ui/icons/School';
import IconReact from '@material-ui/icons/ImportantDevices';
import logoReact from '../assets/LogoReactMenu.svg'
import logoRedux from '../assets/logoRedux.svg'

import '../styles/Layout.css'
import styles from '../shared/StyleMenu'

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  }     

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
          <img src={logoReact} className="App-logos" alt="React" />
          <img src={logoRedux} className="App-logos" alt="Redux" />
          <Typography variant="h6" align="left" color="inherit" noWrap >
            Readable
          </Typography>
        </div>

        <Paper>
          <MenuList> 

            <MenuItem component={ Link } to="/" selected={ '/' === pathname } className={classes.menuItem}>
              <ListItemIcon >
                <IconHome />
              </ListItemIcon>   
              All Categories
            </MenuItem>              


            {_.map(categories, category => {
            return <MenuItem 
              to={`/${category.path}`}
              key={category.path} 
              className={classes.menuItem}
              component={Link}>

              <ListItemIcon className={classes.icon}>
                {this.renderIcon(category.name)}
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary={category.name} />   
            </MenuItem> })}
          </MenuList> 
        </Paper>   
      </div>
    )

    return <Fragment>
      <div className={classes.root}>      
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>

            <Typography variant="h7" align="center" color="inherit" noWrap >
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
