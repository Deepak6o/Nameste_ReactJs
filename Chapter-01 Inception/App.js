const heading = React.createElement(
    "h1",
    {
        id: "title",//probs
    }, "Heading 1");
const heading2 = React.createElement(
    "h2",
    {
        id: "title",//probs
    }, "Heading 2");
const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside root
root.render(container);