import React from 'react';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';

import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import './PostForm.scss';

interface IState {
  post: { title: string; author: string; content: string };
}

interface IProps {
  pending: Boolean;
  success: Boolean;
  successMsg: string;
  error: Boolean;
  errorMsg: string;
  addPost: Function;
  editPost: Function;
  resetRequestData: Function;
  edit: Boolean;
  author: string;
  title: string;
  content: string;
  postId: string;
  buttonText?: string;
}

class PostForm extends React.Component<IProps, IState> {
  static defaultProps = {
    buttonText: 'Button',
    title: '',
    author: '',
    content: '',
    postId: '',
    successMsg: 'Success!',
    addPost: () => null,
    editPost: () => null
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      post: {
        title: '',
        author: '',
        content: ''
      }
    };
    if (this.props.edit) {
      this.state = {
        post: {
          title: this.props.title,
          author: this.props.author,
          content: this.props.content
        }
      };
    }
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { post } = this.state;
    const { addPost, editPost, edit, postId } = this.props;

    edit
      ? editPost(postId, {
          title: post.title,
          content: post.content,
          author: post.author
        })
      : addPost(post);
  };

  handleInputs = (e: React.SyntheticEvent) => {
    const { post } = this.state;
    let target = e.target as HTMLInputElement;

    this.setState({
      post: { ...post, [target.name]: target.value }
    });
  };

  handleEditor = (text: string) => {
    const { post } = this.state;

    this.setState(
      {
        post: { ...post, content: text }
      },
      () => console.log(this.state.post.content)
    );
  };

  render() {
    const { post } = this.state;
    const { pending, error, success, buttonText, successMsg } = this.props;

    if (success) return <Alert variant="success">{successMsg}</Alert>;
    if (error)
      return <Alert variant="error">Something went wrong.. Sorry</Alert>;
    if (pending) return <Spinner></Spinner>;

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextField
            label="Title"
            value={post.title}
            onChange={this.handleInputs}
          />

          <TextField
            label="Author"
            value={post.author}
            onChange={this.handleInputs}
          />

          <SectionTitle>Edit post content</SectionTitle>

          <Editor
            className="content-editor"
            text={post.content}
            onChange={this.handleEditor}
            options={{
              placeholder: false,
              toolbar: {
                buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']
              }
            }}
          />

          <Button variant="primary">{buttonText}</Button>
        </form>
      </div>
    );
  }
}

export default PostForm;
