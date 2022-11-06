import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";

const Assignment6 = () => {
    return (
        <>
            <h1>Assignment 6</h1>
            <br/><br/>
            <TodoList/>
            <br/><br/>
            <ConditionalOutput/>
            <br/><br/>
            <Styles/>
            <br/><br/>
            <Classes/>
        </>
    );
}
export default Assignment6;