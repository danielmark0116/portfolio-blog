import React, { Component } from 'react';
import { Post } from './types/post';

import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import PostPage from './components/pages/Post/PostPage';
import AddPost from './components/pages/AddPost/AddPostPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

const apiUrl = 'http://localhost:8000/api/posts';

interface IProps {}

interface IState {
  posts: Post[];
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const getPosts = async (): Promise<void> => {
      try {
        const response = await fetch(apiUrl);
        const posts: Post[] = await response.json();

        this.setState({
          posts: posts
        });
      } catch (err) {
        console.error(err);
        console.error('Coulnd not fetch data');
      }
    };

    getPosts();
  }

  render() {
    const { posts } = this.state;

    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/new" exact component={AddPost} />
          <Route path="/posts/:id" exact component={PostPage} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;
