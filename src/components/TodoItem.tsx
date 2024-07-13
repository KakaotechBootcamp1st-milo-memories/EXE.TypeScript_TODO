import { memo } from "react";

interface TodoItemProps {
  index: number;
  todo: {
    text: string;
    completed: boolean;
  };
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoItem = ({ index, todo, toggleComplete, deleteTodo }: TodoItemProps) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      <span>{todo.text}</span>
      <button className="delete-btn" onClick={() => deleteTodo(index)}>삭제</button>
    </li>
  );
};

export default memo(TodoItem);