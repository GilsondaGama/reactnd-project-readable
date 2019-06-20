import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'  
import _ from 'lodash';

import { Divider, List, ListItem,  Typography, ListItemIcon, withStyles } from '@material-ui/core'
import IconRedux from '@material-ui/icons/OpenWith';
import IconUdacity from '@material-ui/icons/School';
import IconReact from '@material-ui/icons/ImportantDevices';
import IconHome from '@material-ui/icons/Home';
import IconPlaylistAdd from '@material-ui/icons/PlaylistAdd';

import styles from '../styles/StyleCategories'
import { capitalize } from '../utilits/capitalize';

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  renderIcon = (key) => {
    switch (key) {
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
    const { categories, fetchCategoryPosts, classes } = this.props;
    
    if (categories) {
      return (
        <List>
          <Link to="/"  style={linkStyling}>
            <ListItem button className={classes.menuItem}>
              <ListItemIcon className={classes.icon}> 
                <IconHome /> 
              </ListItemIcon >
              <Typography color="inherit">              
                All Categories
              </Typography> 
            </ListItem>
          </Link>

          {_.map(categories, category => {
            return (
              <Link to={`/${category.path}`}
                onClick={() => fetchCategoryPosts(category.path)}
                style={linkStyling}
                key={category.path}>
                <ListItem button className={classes.menuItem}>                  
                  <ListItemIcon className={classes.icon}>
                    {this.renderIcon(category.name)}
                  </ListItemIcon>
                  <Typography color="inherit">              
                    {capitalize(category.name)}
                  </Typography>                   
                </ListItem>
              </Link>
            )
          })}

          <Divider />
          <Divider />

          <Link  to="/post/new" style={linkStyling}>
            <ListItem button className={classes.menuItem}>
              <ListItemIcon className={classes.icon}> 
                <IconPlaylistAdd /> 
              </ListItemIcon>
              <Typography color="inherit">              
                New Post
              </Typography> 
            </ListItem>
          </Link>
        </List>
      )
    }
    return (
      <div>The Component is Loading...</div>
    );
  }
}


const linkStyling = {
  paddingLeft: 10,
  textDecoration: 'none' 
}

export default compose(
  withRouter, 
  withStyles(styles)
)(Categories)
