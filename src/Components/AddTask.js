import React,{useState}from 'react';
import {useDispatch}from 'react-redux';
import {InputGroup,FormControl,Button}from 'react-bootstrap'
import {Add_Task}from '../Redux/actions'

const AddTask = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState('');
    return (
        
         <div className="AddTask">
                <InputGroup className="mb-3 Formulaire ">
                    <FormControl
                    onChange={(e)=>setNewTask(e.target.value)}
                    value={newTask}
                    placeholder="Add Task"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                    <Button
                    onClick={()=> {dispatch(Add_Task({
                        title: newTask,
                        isDone:false,
                        id:Math.ceil(Math.random()*100)}))
                        
                        setNewTask('')}
                } 
                    variant="success">Add Task</Button>
                </InputGroup>
            
        </div>
    )
}

export default AddTask
