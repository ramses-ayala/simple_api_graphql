import { Todo } from '../model/Todo.js'

export const checkTodoExists = async (description) => {
    const descriptionLowerCase = description.toLowerCase();
    const existingTodo = await Todo.findOne({ description: descriptionLowerCase });
    return !!existingTodo;
};  