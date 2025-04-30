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
  }

  union dataTodoResponse = Todo | TodoError

  type createTodoResponse {
    data: dataTodoResponse
    success: Boolean
    httpCode: Int
    errors: [String]
  }

  type Mutation {
    createTodo (description: String!): createTodoResponse
    deleteTodo (todoId: String!): Boolean
  }
`;