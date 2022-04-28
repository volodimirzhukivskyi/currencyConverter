import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import ThemeProvider from "./ThemeProvider/ThemeProvider";
import Layout from "./modules/Layout/Layout";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <Layout>
                <App/>
            </Layout>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

