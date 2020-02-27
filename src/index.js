//import package
import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';

//import css
import './index.css';

//import component
import App from './App';
import Timeline from './Components/Timeline/Timeline'

import Timer from './Components/Timeline/Lesson6/Timer'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
    <Timer />
    <Timeline />
</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
