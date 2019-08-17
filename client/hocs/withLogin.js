import React from 'react';
import useLogin from '../hooks/useLogin';

const withLogin = Component => props => {
    const isLoggedIn = useLogin();
    return <Component { ...props} />;
};

export default withLogin;