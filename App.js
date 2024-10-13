// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello from react world"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1 " }, [
      React.createElement("h1", {}, "I am in H1 tagg"),
      React.createElement("h1", {}, "I am in H1 tagg"),
    ]),
  ],
  [
    React.createElement("div", { id: "child2 " }, [
      React.createElement("h1", {}, "I am in H1 tagg"),
      React.createElement("h1", {}, "I am in H1 tagg"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
