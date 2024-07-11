import { useState, FormEvent, ChangeEvent } from "react";

interface TodoFormProps {
  addTodo: (input: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} id="todo-form">
      <input
        type="text"
        id="todo-input"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        required
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;