import React from 'react';
import { ResetStyle, GlobalStyle } from './globalStyle';
import Home from './pages/Home';

const App = () => {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <Home />
        </>
    );
};

export default App;