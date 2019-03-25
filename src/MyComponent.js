import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
  }

  static defaultProps = {
    name: '기본 이름2',
    age: 10,
  }

  state = {
    number: 0,
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //   }
  // }

  render() {
    return (
      <div>
        <p>나의 컴포넌트이름 {this.props.name}</p>
        <p>저는 {this.props.age}살 입니다.</p>
        <p>숫자: {this.state.number}</p>
        <button onClick={() => {
            this.setState({
              number: this.state.number + 1
            })
          }
        }>더하기</button>
      </div>
    )
  }
}

export default MyComponent;