import React, { useReducer, useContext } from 'react';
import './login.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    nickame: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required')
});

const Login = () => {
    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <span>Choose your nickname</span>
            {/*<Formik
                render={props => <ContactForm {...props} />}
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={ (values, actions) => {
                    // Handle form submit, reach an endpoint, w/e.
                }}
            />*/}
        </div>
    )
};

export default Login;