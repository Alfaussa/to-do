import { nanoid } from "nanoid";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import TextButton from "./components/textButton";
import Spacer from "./components/Spacer";
import Checkbox from "./components/CheckBox";

const Container = styled.div`
  
    display: flex;
    
    flex-direction: column;
    align-items: stretch;
`


const List = styled.div`
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
    max-width: 430px;
    flex-direction: column;

`;

const ListItem = styled.label`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    padding: 4px 0;
`

const Input = styled.input`
    border: none;
    padding: 20px 24px;



`
type Props = {};



type Task = {
    id:string,
    label:string,
    isComplete:boolean,
}


const Listscreen: React.FC<Props> = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
   
    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTaskLabelChange = (e: ChangeEvent <HTMLInputElement>) => setNewTaskLabel(e.target.value);
    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => { 
        if(e.key === 'Enter' && newTaskLabel !== '') {
        setTasks((tasks) => [
        ...tasks, 
        { id: nanoid(), label: newTaskLabel, isComplete: false},
    ]);
        setNewTaskLabel('');
        }
    };

    const handleCompleteChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        setTasks(tasks => tasks.map(task =>{
            if(task.id === handledTask.id) 
            return {...task, isComplete: e.target.checked}
            return task;
        })
        );

    };

    //*********** */

    
    



    const handleClearClick = () =>
        setTasks(filteredTasks => tasks.filter((task => !task.isComplete)));

        // const handleTaskAllClick = () =>
        
        // setTasks(tasks => tasks.filter((task => !task.isComplete)));
    
    const handleTaskActiveClick = () =>
        setTasks(tasks => tasks.filter((task => !task.isComplete)));
    const handleTaskCompletedClick = () =>
        setTasks(filteredTasks => tasks.filter((task => task.isComplete)));




    return (
        <Container>
    <div> 
    <List> 
        <div>
            {tasks.map((task, index) => 
            <ListItem key={task.id}>
             <Checkbox 
            checked={task.isComplete} 
            onChange={handleCompleteChange(task)}
            />
            <Spacer width={24}></Spacer>
          {task.label}
            
            </ListItem>)}
        
        
        </div>
        <Input 
        placeholder = "What needs to be done?"
        value={newTaskLabel} 
        onChange={handleNewTaskLabelChange} 
        onKeyPress={handleNewTaskKeyPress}
        />
    <div>
    

    <TextButton onClick={handleClearClick}>Clear completed</TextButton>

{/* 
    <button onClick={handleTaskAllClick}>All</button> */}
    <button onClick={handleTaskActiveClick}>Active</button>
    
    <button onClick={handleTaskCompletedClick}>completed</button>
    
    </div>
        
</List>
    </div>
    </Container>
    );
};

export default Listscreen;