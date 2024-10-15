import React from "react";
import ReactDom from "react-dom/client";

// ! using React.createlement
// const header = React.createElement(
//   "div",
//   { id: "heading" },
//   React.createElement(
//     "h1",
//     { id: "tag" },
//     "hello i am H1 tag",
//     React.createElement("h2", { id: "tag2" }, "hello i am H2 tag")
//   )
// );

//!using JSX

const jsxHeader = (
  <div id="heading">
    <h1 id="h1tag">Hello I ma in h1 tag</h1>
    <h2 id="h2tag">Hello I am in h2 tag</h2>
  </div>
);

//!using functional component

const Component2 = () => (
  <div id="second">
    <h1 className="sec">I am in second component</h1>
  </div>
);

const JsxHeaader = () => (
  <div id="head" className="honh">
    {jsxHeader}
    <Component2 />
    <h1 id="ta">I am in functional component1</h1>
    <h2 id="taa">I am in functional component2</h2>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(jsxHeader);

root.render(<JsxHeaader />);
