import React from 'react';
import './login.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginForm from "../Forms/LoginForm";
import Loading from '../Loading';
import { useMutation } from '@apollo/react-hooks';
import mutation from '../../mutations/Login';
import { Link } from 'react-router-dom';
import history from '../../history';

import useChitChat from '../../hooks/useChitChat';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Login = () => {
    const [auth, { data, loading }] = useMutation(mutation);
    const { setLoggedIn, isLoggedIn } = useChitChat();
    console.log("logueado?: ", isLoggedIn);

    console.log("rendering login");
    return (
        <div className="login-wrapper">
            { !isLoggedIn && !loading ? (
                <React.Fragment>
                    <h1>Login</h1>
                    <span>Enter your credentials</span>
                    <Formik
                        render={props => <LoginForm {...props} />}
                        initialValues={{ email: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={ async ({email, password}, actions) => {
                            try {
                                const {data: {login}} = await auth({ variables: { email, password } });
                                if(login) {
                                    setLoggedIn(true);
                                    history.push('/chat')
                                } else {
                                    console.log('Invalid credentials');
                                }
                            }catch(error){
                                console.error(error);
                            }

                        }}
                    />
                    <div className="sign-up__link">
                        Don't have an account ? <Link to="/signup">Sign up </Link>
                    </div>
                </React.Fragment>
            ) : (
                <Loading />
            )}

        </div>
    )
};

export default Login;