import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";

export type FormDataTypeForNewPostText = {
    newPostText:string
}

export const AddNewPostForm: React.FC<InjectedFormProps<FormDataTypeForNewPostText>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.TextArea}
                    component={'textarea'}
                    placeholder={'enter new post text'}
                    name={'newPostText'}
                > </Field>
            </div>
            <div>
                <button className={s.AddPostButton} type={'submit'}>add post</button>
            </div>
        </form>
    )
}

export const AddNewPostReduxForm = reduxForm<FormDataTypeForNewPostText>({
    // a unique name for the form
    form: 'newPost'
})(AddNewPostForm)

