import React from 'react';
import './nick.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NickForm from '../Forms/NickForm';
import history from '../../history';

const NickSchema = Yup.object().shape({
    nickname: Yup.string()
        .required('Required'),
});

const Nick = props => {
    return (
        <React.Fragment>
            <Formik
                render={props => <NickForm {...props} />}
                initialValues={{ nickname: ''}}
                validationSchema={NickSchema}
                onSubmit={ async ({nickname}, actions) => {
                    actions.resetForm();
                    history.push('/chat')
                }}
            />
        </React.Fragment>
    )
}

export default Nick;