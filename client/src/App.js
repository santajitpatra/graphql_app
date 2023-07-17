import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;



function App() {
    const { loading, data } = useQuery(query);

    if (loading) return "Loading...";

    return (
      <div>
        <table>
          <tbody>
            {data.getTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo?.user?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default App;
