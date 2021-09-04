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


export default App;