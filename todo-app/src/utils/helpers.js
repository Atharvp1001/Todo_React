// Utility functions for Todo App

/**
 * Filters todos based on status (all/active/completed)
 * @param {Array} todos - List of todos
 * @param {string} filter - 'all', 'active', or 'completed'
 * @returns {Array} Filtered todos
 */
export const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

/**
 * Generates a unique ID for new todos
 * @returns {string} Unique ID
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Saves todos to localStorage
 * @param {Array} todos - Todos to save
 */
export const saveToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

/**
 * Loads todos from localStorage
 * @returns {Array} Saved todos or empty array if none exist
 */
export const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
};

/**
 * Formats date to display (e.g., "May 25, 2023")
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};