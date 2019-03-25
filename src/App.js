import React, { Component } from 'react';
import EventPractice from './EventPractice';
// import MyComponent from './MyComponent';

class App extends Component {
  render() {
    // const text = '당신은 어썸한가요?';
    // const condition = false;
    // const style = {
    //   backgroundColor: 'gray',
    //   border: '1px solid black',
    //   height: Math.round(Math.random() * 300) + 50,
    //   width: Math.round(Math.random() * 300) + 50,
    //   WebkitTransition: 'all',
    //   MozTransition: 'all',
    //   msTransition: 'all',
    // };

    return (
      // <div className="my-div">
      //   <h1>리액트 안녕!</h1>
      //   <h2>{text}</h2>
      //   { condition && '보여주세요' }
      //   <div style={style}></div>
      //   <MyComponent name="React" age={29} />
      // </div>
      <EventPractice />
    );
  }
}

export default App;