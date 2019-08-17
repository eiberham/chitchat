import React, { useState } from 'react';

export default function useLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return isLoggedIn;
};