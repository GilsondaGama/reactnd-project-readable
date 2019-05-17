import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import ExamplePosts from './ExamplePosts'
import Layout from '../container/ContainerCategories'
import ContainerPostsList from '../container/ContainerPostsList'
import NewPost from './NewPost'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={ ContainerPostsList } />
            <Route path="/post/new" component={ NewPost } />            
            <Route path="/:category/edit/:id" children={props => <ExamplePosts {...props} />} />
            <Route path="/:category" exact component={props => <ContainerPostsList {...props} />} />
            <Route path="/:category/:id" exact component={props => <ExamplePosts {...props} />} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Routes;

/*
            <Route path="/" exact component={Main} />
            <Route path="/post/new" exact component={NewPost} />
            <Route path="/:category/edit/:id" children={props => <EditPostContainer {...props} />} />
            <Route path="/:category" exact component={props => <Main {...props} />} />
            <Route path="/:category/:id" exact component={props => <PostDetail {...props} />} />


            <Route exact path='/' component={routeCategoryPosts} />
            <Route exact path='/:category' component={routePosts} />
            <Route exact path='/:category/:postId' component={routeCreateEditPost} />            
*/
