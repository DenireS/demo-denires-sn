import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { FormType } from '../../hoc/FormsControls';

function Dialogs(props) {
  let state = props.dialogsPage;

  let dialogsEmelents = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />
  ));
  let messagesEmelents = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let addNewMessage = (values) => {
    props.sendMessageCreator(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>{dialogsEmelents}</div>
      <div className={s.messages}>
        <div>{messagesEmelents}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
}
const Textarea = FormType('textarea');
const maxLength10 = maxLengthCreator(10);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength10]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;
