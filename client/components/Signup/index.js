import React from 'react';
import './signup.scss';
import * as Yup from "yup";
import {Formik} from "formik";
import SignupForm from "../Forms/SignupForm";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, 'Too Short!')
        .max(25, 'Too Long!')
        .required('Required'),
    gender: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
});

const Signup = () => {
    return (
        <div className="signup-wrapper">
            <h1>Sign Up</h1>
            <span>Fill out the form below to create an account</span>
            <Formik
                render={props => <SignupForm {...props} />}
                initialValues={{ name: '', gender: '', email: '', password: ''}}
                validationSchema={SignupSchema}
                onSubmit={ async (values, actions) => {
                    console.log("submitted", values);
                }}
            />
        </div>
    )
};

export default Signup;