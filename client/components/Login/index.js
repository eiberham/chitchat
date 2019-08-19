import React from 'react';
import './login.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useLogin from "../../hooks/useLogin";
import LoginForm from "../Forms/LoginForm";
import Loading from '../Loading';
import { useMutation } from '@apollo/react-hooks';
import mutation from '../../mutations/Login';
import history from '../../history';

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Login = () => {
    const { isLoggedin } = useLogin();
    const [auth, { data, loading }] = useMutation(mutation);
    console.log("rendering login");
    return (
        <div className="login-wrapper">
            { auth && !loading ? (
                <React.Fragment>
                    <h1>Login</h1>
                    <span>Enter your credentials</span>
                    <Formik
                        render={props => <LoginForm {...props} />}
                        initialValues={{ email: '', password: '' }}
                        validationSchema={SignInSchema}
                        onSubmit={ async ({email, password}, actions) => {
                            try {
                                const {data: {login}} = await auth({ variables: { email, password } });
                                if(login) {
                                    history.push('/chat')
                                } else {
                                    console.log('Invaid credentials');
                                }
                            }catch(error){
                                console.error(error);
                            }

                        }}
                    />
                </React.Fragment>
            ) : (
                <Loading />
            )}

        </div>
    )
};

export default Login;