export function createToDoStore() {
    return {
        todo: [],
        addToDo(text) {
            this.todo.push({
                text, 
                id: Date.now(),
            })
        },
        deleteToDo(id) {
            this.todo = this.todo.filter(item => item.id !== id)
        }
    };
};
