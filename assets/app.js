import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TodoTable from "./components/TodoTable";
import TodoContextProvider from "./contexts/TodoContext";
import {CssBaseline} from "@material-ui/core";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>
                <CssBaseline>
                    <TodoTable/>
                </CssBaseline>
            </TodoContextProvider>

        );
    }
}

ReactDom.render(<App/>,document.getElementById('root'));