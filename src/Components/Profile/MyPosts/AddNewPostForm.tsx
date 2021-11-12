import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";
import {maxLengthCreator, requiredFeel} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type FormDataTypeForNewPostText = {
    newPostText:string
}

const maxLength10 = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<FormDataTypeForNewPostText>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[requiredFeel, maxLength10]}
                    className={s.TextArea}
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
    form: 'newPost',

})(AddNewPostForm)

