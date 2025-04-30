import { Todo } from '../model/Todo.js'
import { checkTodoExists } from '../utils/checkTodoExist.js';
import { descriptionValidator } from '../utils/validatorInputs/validatorsInputs.js';
import { ErrorHandler } from '../utils/ErrorHandler.js';

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
        await descriptionValidator.validate({ description }, { abortEarly: false })

        const exists = await checkTodoExists(description)
        if (exists) {
          console.log('entro al if exists')
          throw new Error('this item already exists !!!') 
        }
        const resp = await Todo.create({ description });
        resp
      } catch (error) {
        console.log('entro al catch')
        console.log('error: ', error)
        const err = ErrorHandler.formatError(error)
        console.log('err: ',err)
        return err
      }
    },
    deleteTodo: async (_, { todoId }) => {
      const { deletedCount } = await Todo.deleteOne({ _id: todoId });
      return deletedCount !== 1 ? false : true
    }
  },
  dataTodoResponse: {
    __resolveType(obj) {
      if (obj.description !== undefined) return 'Todo'
      if (obj.message !== undefined) return 'TodoError'
    }
  }
}