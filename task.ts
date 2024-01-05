class Task{
    constructor(public description: string, public completed: boolean){}
        markAsCompleted(){
            this.completed = true;
        }
    
}
 export default Task;
 