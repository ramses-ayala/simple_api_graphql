export const typeDefsTodos = `
  type Query {
    hello: String
    getTodos: [Todo]
  }

  type Todo {
    id: ID
    description: String
    done: Boolean
  }

  type TodoError {
    message: String
    errorType: String
    errors: [String]
  }

  union dataTodoResponse = Todo | TodoError

  type createTodoResponse {
    data: dataTodoResponse
  }

  type Mutation {
    createTodo (description: String!): createTodoResponse
    deleteTodo (todoId: String!): Boolean
  }
`;