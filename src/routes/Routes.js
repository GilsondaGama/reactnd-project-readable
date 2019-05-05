import React, { Component } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Layout from "../components/Layout"
import CategoryPageContainer from "./routeCategoryPosts"
import PostPageContainer from "./routePosts"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={CategoryPageContainer} />
            <Route exact path='/:category' component={CategoryPageContainer} />
            <Route exact path='/:category/:postId' component={PostPageContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Routes;