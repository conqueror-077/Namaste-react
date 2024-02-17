// const heading = React.createElement("h1", {}, "Hello World from React");

//{} -> this missing object is used to give the attributes of h1 tag
// we can give the attributes in the Object
// const heading = React.createElement(
//     "h1",
//     { id : "heading", xyz : "abc"    },
//     "Hello world form React"
// );


// // console.log(heading);   //returns an object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// ReactElement(Object) => HTML (Browser Understands)
// ReactElement is an object and it converts in to the HTML which the borwser understands

//..................
//create a nested structure of HTML

// <div id id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//     </div>
// </div>

// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//         React.createElement("h1", {}, "I'm h1 tag")
//     )
// );

//........................

// <div id id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h1>I'm h1 tag</h1>
//     </div>
// </div>


//if you want to add the siblings -> then use array
// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//         [React.createElement("h1",{}, "I'm h1 tag"),
//         React.createElement("h2", {}, "I'm h2 tag")]
//     )
// );

//.......................

// <div id id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h1>I'm h1 tag</h1>
//     </div>
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h1>I'm h1 tag</h1>
//     </div>
// </div>

//add sibling of child and again add sibling of its children
const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child"}, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {id : "child"}, [
        React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])
]);


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// // console.log(heading);   //returns an object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



/*
//SUMMARY
crated an element using React.createElement("tag", {attributes}, "children");
ReactElement is an Object
ReactDOM is responsible to assign a root
render method is used to put element into the page

if want to add siblings
if multiple children then pass it as a Array
Inside HTML, root.render() will replace the content in HTML root

React will affeect only root, rest of the page remains same

*/