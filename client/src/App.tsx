import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import PostRandom from './components/pages/RandomPost/RandomPostPage';
import PostPage from './components/pages/Post/PostPage';
import PostEditPage from './components/pages/EditPost/PostEditPage';
import AddPost from './components/pages/AddPost/AddPostPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends Component<{}, {}> {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/posts"></Redirect>
          </Route>
          <Route
            path="/home"
            component={() => {
              window.location.href = 'https://danielgrychtol.com/';
              return null;
            }}
          />
          <Route path="/posts" exact component={Posts} />
          {/* <Route path="/posts/new" exact component={AddPost} /> */}
          <Route path="/posts/:id" exact component={PostPage} />
          {/* <Route path="/posts/edit/:id" exact component={PostEditPage} /> */}
          {/* <Route path="/contact" exact component={Contact} /> */}
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
