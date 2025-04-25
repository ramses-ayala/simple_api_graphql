import { Todo } from '../model/Todo.js'
import { checkTodoExists } from '../utils/checkTodoExist.js';

export const resolversTodos = {
    Query: {
      hello: () => 'world',
      getTodos: async () => {
        try {
          return await Todo.find();
        } catch (error) {
          console.error('Occurred an error getting todos: ', error);
        }
      }
    },
    Mutation: {
      createTodo: async (_, { description }) => {
        try {
          const exists = await checkTodoExists(description)
          if (exists) throw new Error ('this item already exist !!!')

          const resp = await Todo.create({ description });
          return resp;
        } catch (error) { 
          console.error('Occurred an error creating todo: ', error);
        }
      },
      deleteTodo: async (_, { todoId }) => {
        const { deletedCount } = await Todo.deleteOne({ _id: todoId });
        return deletedCount !== 1 ? false : true
      }
    }
};