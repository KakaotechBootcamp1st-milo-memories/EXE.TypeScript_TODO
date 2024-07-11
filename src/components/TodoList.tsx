import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { text: string; completed: boolean; }[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTodo }: TodoListProps) => {
  if (!Array.isArray(todos)) {
    console.error("Todos should be an array");
    return null; // todos가 배열이 아닌 경우 null 반환
  }

  return (
    <ul id="todo-list">
      {todos.map((todo, index) => (
        <TodoItem 
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;