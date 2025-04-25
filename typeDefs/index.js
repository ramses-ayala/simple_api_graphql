export const typeDefsTodos = `
  type Query {
    hello: String
    getTodos: [Todo]
  }

  type Mutation {
    createTodo (description: String!): Todo
    deleteTodo (todoId: String!): Boolean
  }

  type Todo {
    id: ID
    description: String
    done: Boolean
  }
`;