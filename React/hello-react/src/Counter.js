import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  // constructor(props) {
  //   super(props);
  //   // state의 초깃값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0
  //   };
  // }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // // 위 코드와 아래 코드는 완전히 똑같은 기능
            // // 아래 코드는 함수에서 바로 객체를 반환함
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
            // this.setState({ number: number + 1 });
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
