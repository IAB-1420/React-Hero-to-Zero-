import React from "react";
import ReactDOM from "react-dom/client";


/*// javascript way
const heading = document.createElement("h1");
heading.innerHTML = "Namaste Everyone from Javascript";
const root = document.getElementById("root");
root.appendChild(heading);*/

/*//React way
const heading_react = React.createElement(
    "h1",
{
    id: "title",
    key: "H1"
},
"Namaste Everyone from React"
);
const heading_react2 = React.createElement("h2",{
    id: "title2",key: "H2"
},"Namaste Everyone from React for 2nd time");*/
// this is known as an element in React.

//React.createElement ==> Object ==> HTML (DOM)

/*//JSX ==> React.createElement ==> Object ==> HTML (DOM)
const heading = (
<h1 id="title" key="H3">
    Namaste React
</h1>
)
// this is known as jsx Expression



const container = React.createElement("div", {
    id: "container"
}, [heading_react,heading_react2,heading3])*/

const heading = (
    <h1 id="title" key="H3">
        Namaste React
    </h1>
    )

//React Components
// - Functional Component
// - Class based Component

//functional component is nothing but a function.
// it is a javascript functions which returns jsx or react element.
// Any Components name starts with a Capital letter.
const HeaderComponent = () => {
//return <div><h1>Namaste React Functional Component</h1><h2>this is a fuctional component</h2></div>;
return (
    <div>
        <h1>Namaste React Functional Component header1</h1>
        <h2>this is a fuctional component</h2>
    </div>
    )
}

const HeaderComponent2 = () => (
        <div>
                <h1>Namaste React Functional Component header2</h1>
                <h2>this is a fuctional component</h2>
        </div>
)

const HeaderComponent3 = function(){
    return (
        <div>
            {heading}
            <HeaderComponent/>
            {HeaderComponent2()}
            <h2>Namaste React Functional Component</h2>
            <h2>this is a fuctional component</h2>
        </div>
        )
}

const root_react = ReactDOM.createRoot(document.getElementById("root"));
root_react.render(heading);
root_react.render(<HeaderComponent3/>);