import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setIntputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setIntputText(e.target.value);

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button>추가</button>
      <ul>{namesList}</ul>
    </>
  );

  // const names = ["눈사람", "얼음", "눈", "바람"];
  // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  // return <ul>{nameList}</ul>;
};

// const IterationsSample = () => {
//   const names = ['눈사람', '얼음', '눈', '바람'];
//   const nameList = names.map(name => <li>{name}</li>);
//   return <ul>{nameList}</ul>;
// };
//   return (
//     <ul>
//       <li>눈사람</li>
//       <li>얼음</li>
//       <li>눈</li>
//       <li>바람</li>
//     </ul>
//   );
// };

export default IterationSample;
