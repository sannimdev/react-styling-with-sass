const name = "react";
const message = `hello ${name}`;

console.log(message);
////////////////////
const object = { a: 1 };
const text = `${object}`;
console.log(text);
////////////////////

const fn = () => true;
const msg = `${fn}`;
console.log(msg);

////////////////////
// const red = "빨간색";
// const blue = "파란색";
// function favoriteColors(texts, ...values) {
//     console.log(texts);
//     console.log(values);
// }

// favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`;
////////////////////

const red = "빨간색";
const blue = "파란색";

function favoriteColors(texts, ...values) {
  return texts.reduce(
    (result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ""}`,
    ""
  );
}

favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`;

////////////////////////
// styled-components가 동작하는 방식
// Tagged Template Literal 문법
////////////////////////
function sample(texts, ...fns) {
  const mockProps = {
    title: "안녕하세요",
    body: "내용은 내용내용입니다.",
  };

  console.log(texts);
  return texts.reduce(
    (result, text, i) => `${result}${text}${fns[i] ? fns[i](mockProps) : ""}`,
    ""
  );
}

sample`
  제목: ${(props) => props.title}
  내용: ${(props) => props.body}
`;
/*
  제목: 안녕하세요
  내용: 내용은 내용내용입니다.
*/
