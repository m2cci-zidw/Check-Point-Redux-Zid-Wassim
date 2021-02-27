import React  from 'react'
import {Card,Button,Form}from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Delete_Task, Done_Task } from '../Redux/actions'
import EditTask from './EditTask'

const TaskCard = ({task}) => {
    const dispatch = useDispatch()

   
    return (
                   <Card className="Task-Card" style={{ width: '18rem' }}>
                <div>
                <Form>
                    <Form.Check 
                        type="switch"
                        id={task.id}
                        label= {task.isDone? "Done":"Undone"} 
                        
                        onClick={()=>dispatch(Done_Task(task.id))}
                    />
                   

                   
                </Form>
                </div>
                
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                 </Card.Body>
                 <div className="ButtonCard">
                     
                    

                    <Button variant="danger"
                    onClick={()=>dispatch(Delete_Task(task.id))}
                    >Delete</Button>

                    <EditTask task={task}/>
                 </div>
                 

            
                 
            </Card>
  
    )
}

export default TaskCard
