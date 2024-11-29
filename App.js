

// <div id="parent">
//     <div id="children">
//         <h1></h1>
//     </div>
// </div>


const parent = React.createElement("div", { id: "parent" },[
     React.createElement("div", { id: "children" },
         [React.createElement("h1", {}, "I am H1 Tagw"),
         React.createElement("h2", {}, "I am H2 Tagw")]
        ),
        React.createElement("div", { id: "childrentwo" },
            [React.createElement("h1", {}, "I am H1 Tagw"),
            React.createElement("h2", {}, "I am H2 Tagw")]
           )
    ])


const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World From React !")

const root = ReactDOM.createRoot(document.getElementById("root"))

// console.log(heading); //object
console.log(parent); //object


// root.render(heading)
root.render(parent)