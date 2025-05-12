import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle, categories, priorities }) {
  return (
    <ul style={{ 
      padding: 0,
      margin: '0',
      borderTop: '1px solid #eee',
      listStyle: 'none'
    }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          categories={categories}
          priorities={priorities}
        />
      ))}
    </ul>
  );
}

export default TodoList;