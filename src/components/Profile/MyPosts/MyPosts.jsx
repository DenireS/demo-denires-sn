import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from '../../../utils/validators/validators';
import { FormType } from '../../../hoc/FormsControls';

const MyPosts = (props) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post message={p.message} key={p.id} likesCount={p.likesCount} />
    ));

  let onAddPost = (values) => {
    props.addPost(values.newPostBody);
  };
  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost} />
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

const Textarea = FormType('textarea');

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.newPostBody}>
        <Field
          component={Textarea}
          name="newPostBody"
          placeholder="Post"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({
  form: 'addPostForm',
})(AddPostForm);

export default MyPosts;
