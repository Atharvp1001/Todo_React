import { useState, useEffect } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const PRIORITIES = [
  { id: 'high', name: 'High', color: '#ff4444', order: 1 },
  { id: 'medium', name: 'Medium', color: '#feca57', order: 2 },
  { id: 'low', name: 'Low', color: '#1dd1a1', order: 3 }
];

const CATEGORIES = [
  { id: 'work', name: 'Work', color: '#ff6b6b' },
  { id: 'personal', name: 'Personal', color: '#48dbfb' },
  { id: 'shopping', name: 'Shopping', color: '#1dd1a1' },
  { id: 'other', name: 'Other', color: '#feca57' }
];

function Todos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, dueDate, category, priority) => {
    setTodos([...todos, { 
      id: Date.now(), 
      text, 
      completed: false,
      dueDate: dueDate || null,
      category: category || 'other',
      priority: priority || 'medium'
    }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearAllTodos = () => {
    if (window.confirm("Are you sure you want to delete ALL todos?")) {
      setTodos([]);
    }
  };

  const sortedTodos = [...todos].sort((a, b) => {
    const priorityA = PRIORITIES.find(p => p.id === a.priority)?.order || 2;
    const priorityB = PRIORITIES.find(p => p.id === b.priority)?.order || 2;
    
    if (priorityA !== priorityB) return priorityA - priorityB;
    if (a.dueDate && b.dueDate) return new Date(a.dueDate) - new Date(b.dueDate);
    return a.category.localeCompare(b.category);
  });

  return (
    <div style={{ 
      maxWidth: '550px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '24px'
      }}>
        My Todo List
      </h2>
      
      <AddTodo 
        addTodo={addTodo} 
        categories={CATEGORIES}
        priorities={PRIORITIES}
      />
      
      <TodoList 
        todos={sortedTodos} 
        onDelete={deleteTodo} 
        onToggle={toggleTodo}
        categories={CATEGORIES}
        priorities={PRIORITIES}
      />
      
      {todos.length > 0 && (
        <button
          onClick={clearAllTodos}
          style={{
            display: 'block',
            margin: '24px auto 0',
            padding: '8px 16px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Clear All Todos
        </button>
      )}
    </div>
  );
}

export default Todos;