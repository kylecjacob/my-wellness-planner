// We can create an object "Task" in case we need to add more stuff

export class Task{
    public task: string;
    public description: string;
    public priority: number;

    constructor(task: string, desc: string, priority: number ){
        this.task = task;
        this.description = desc;
        this.priority = priority;
    }
}