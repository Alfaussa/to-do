import { nanoid } from "nanoid";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import TextButton from "./components/textButton";
import Spacer from "./components/Spacer";
import Checkbox from "./components/checkBox";


const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-decoration:none;
    font-family: "Arial Narrow", monospace;
    color:#444242;
    border: 1px; 
    border-style:solid; 
    border-color:#c6c2c2; 

`


const List = styled.div`
    background-color: #fff;
    border-radius: 4px;
    width: 100%;
   min-width: 400px;
    flex-direction: column;

`;

const ListItem = styled.label`
    margin: 10px;
    align-items: center;
    display: flex;
    padding: 4px; 
    
`;



const Item = styled.div`
    border: 1px; 
    border-style:solid; 
    border-color:#c6c2c2; 

    
`;
const Border = styled.div`
    border: 1px; 
    border-style:solid; 
    border-color:#c6c2c2; 
`;
const Input = styled.input`
    border: none;
    padding: 20px 24px;
    font-size: 15px;
    font-style: italic;
    outline:none;

`;
const ButtonSection = styled.div`
display: flex;
justify-content: space-between;
    padding: 10px;
    border: 1px; 
    border-style:solid; 
    border-color:#c6c2c2; 
`


type Props = {};



type Task = {
    id: string,
    label: string,
    isComplete: boolean,
}


const Listscreen: React.FC<Props> = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    const [newTaskLabel, setNewTaskLabel] = useState('');

    const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) => setNewTaskLabel(e.target.value);
    const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTaskLabel !== '') {
            setTasks((tasks) => [
                ...tasks,
                { id: nanoid(), label: newTaskLabel, isComplete: false },
            ]);
            setNewTaskLabel('');
        }
    };

    const handleCompleteChange = (handledTask: Task) => (e: ChangeEvent<HTMLInputElement>) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === handledTask.id)
                return { ...task, isComplete: e.target.checked }
            return task;
        })
        );

    };

    //*Buttons*/


    // const handleTaskAllClick = () =>

    // setTasks(tasks => tasks.filter((task => !task.isComplete)));

    const handleTaskActiveClick = () =>
        setTasks(tasks => tasks.filter((task => !task.isComplete)));
    const handleTaskCompletedClick = () =>
        setTasks(tasks => tasks.filter((task => task.isComplete)));
    const handleClearClick = () =>
        setTasks(tasks => tasks.filter((task => !task.isComplete)));


    return (
        <Container>
            <div>
                <List>
                    <Border>
                        <Input
                            placeholder="What needs to be done?"
                            value={newTaskLabel}
                            onChange={handleNewTaskLabelChange}
                            onKeyPress={handleNewTaskKeyPress}
                        />
                    </Border>
                    <div>
                        {tasks.map((task, index) =>
                            <Item>
                                <ListItem data-testid='newTask' key={task.id}>

                                    <Checkbox
                                        checked={task.isComplete}
                                        onChange={handleCompleteChange(task)}
                                    />
                                    <Spacer width={24}></Spacer>


                                    {task.label}

                                </ListItem>

                            </Item>)}
                    </div>

                    <ButtonSection>



                        <TextButton data-testid="button" onClick={handleClearClick}>Clear completed</TextButton>

                        {/* 
    <button onClick={handleTaskAllClick}>All</button> */}
                        <TextButton onClick={handleTaskActiveClick}>Active</TextButton>

                        <TextButton onClick={handleTaskCompletedClick}>Completed</TextButton>


                    </ButtonSection>
                </List>
            </div>
        </Container>
    );
};

export default Listscreen;