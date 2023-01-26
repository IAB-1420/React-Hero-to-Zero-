// javascript way
const heading = document.createElement("h1");
heading.innerHTML = "Namaste Everyone from Javascript";
const root = document.getElementById("root");
root.appendChild(heading);

//React way
const heading_react = React.createElement("h1",{
    id: "title",
},"Namaste Everyone from React");
const heading_react2 = React.createElement("h2",{
    id: "title2",
},"Namaste Everyone from React for 2nd time");

const container = React.createElement("div", {
    id: "container"
}, [heading_react,heading_react2])
const root_react = ReactDOM.createRoot(document.getElementById("root"));
root_react.render(container);