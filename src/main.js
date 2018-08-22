import TaskCollection, { foo } from './TaskCollection';

// class TaskCollection {
//     constructor(tasks = []) {
//         this.tasks = tasks;
//     }

//     dump() {
//         console.log(this.tasks);
//     }
// }

new TaskCollection([
    'Go to the store',
    'Finish screencast',
    'Eat cake'
]).dump();