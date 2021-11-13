import React from 'react';
import s from './Dialogs.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredFeel} from "../../utils/validators";


export type FormDataTypeForDialogsNewMessage = {
    newMessageText:string
}

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm: React.FC<InjectedFormProps<FormDataTypeForDialogsNewMessage>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.TextArea}
                    component={Textarea}
                    validate={[requiredFeel, maxLength50]}
                    placeholder={'enter new message'}
                    name={'newMessageText'}
                > </Field>
            </div>
            <div>
                <button type={'submit'}>send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormDataTypeForDialogsNewMessage>({
    // a unique name for the form
    form: 'dialogs'
})(AddMessageForm)

