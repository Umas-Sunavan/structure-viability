import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppForAlt from './AppForAlt';
import * as serviceWorker from './serviceWorker';
import FullPager from './FullPager';


ReactDOM.render(<FullPager/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
