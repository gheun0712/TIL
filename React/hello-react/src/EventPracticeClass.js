import { Component } from "react";

class EventPracticeClass extends Component {
  state = {
    username: "",
    message: "",
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // message: e.target.value,
    });
  };
  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value,
  //   });
  // }

  handleClick = () => {
    // alert(this.state.message);
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };
  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: "",
  //   });
  // }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          // onChange={(e) => {
          //   this.setState({
          //     message: e.target.value,
          //   });
          //   console.log(e.target.value);
          // }}
        />
        <button
          onClick={this.handleClick}
          // onClick={() => {
          //   alert(this.state.message);
          //   this.setState({
          //     message: "",
          //   });
          // }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPracticeClass;