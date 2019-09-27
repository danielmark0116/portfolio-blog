import React, { Component } from 'react';
import { Post } from './types/post';

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
      <div>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
