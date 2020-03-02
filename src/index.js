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


// untuk tutorial lifecyclecomp
import ContainerLifeCycle from './Components/LifeCycleComp/ContainerLifeCycle'

//untuk tutorial belajar API
import ApiContainer from './Components/ApiComp/ApiContainer'

// untuk lesson 7
import Container7 from './Components/Timeline/Lesson7/Container'
import FetchedTimeline from './Components/Timeline/Lesson7/FetchedTimeline'


// untuk lesson 8
import Container8 from './Components/Timeline/lesson8/Container'
// import FetchedTimeline from './Components/Timeline/lesson8/FetchedTimeline'



// untuk lesson 9
import Container9 from './Components/Timeline/Lesson9/Container'
// import FetchedTimeline from './Components/Timeline/Lesson9/FetchedTimeline'


// untuk containerComponent
import ContainerComponent from './Components/StyledComponent/ContainerComponent'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<div>
    {/* <Timer />
    <Container9 />
    <ContainerComponent /> */}

    {/* <ContainerLifeCycle /> */}
    <ApiContainer />
</div>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
