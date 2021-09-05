import React, {Component} from "react";
import ReactQuill, { Quill } from 'react-quill';
import "./App.css";

class App extends Component{

    render(){
        return(
            <div>
                <ReactQuill
                modules={App.modules}
                formats={App.formats}
                placeholder={"Start writing from here..."}
                theme="snow"
                />
            </div>
        );
    }
}


//importing extra fonts
let Font = Quill.import('formats/font');
Font.whitelist = ['times-new-roman', 'arial'];
Quill.register(Font, true)

App.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [' ', 'times-new-roman', 'arial'] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        ["link", "image", "video"],
        ["clean"]
    ],
    clipboard: {
        matchVisual: false
    }
};

App.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block"
];


export default App;