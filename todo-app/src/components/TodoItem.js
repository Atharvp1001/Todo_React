function TodoItem({ todo, onDelete, onToggle, categories, priorities }) {
  const categoryData = categories.find(cat => cat.id === todo.category) || 
                      categories.find(cat => cat.id === 'other');
  
  const priorityData = priorities.find(p => p.id === todo.priority) || 
                      priorities.find(p => p.id === 'medium');

  const formattedDate = todo.dueDate 
    ? new Date(todo.dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : 'No deadline set';

  const isOverdue = todo.dueDate && 
                   new Date(todo.dueDate) < new Date() && 
                   !todo.completed;

  return (
    <li style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '14px 0 14px 5px',
      borderBottom: '1px solid #eee',
      position: 'relative',
      backgroundColor: todo.completed ? '#f9f9f9' : 'white',
      borderLeft: `5px solid ${priorityData.color}`
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ 
          margin: '0 14px',
          width: '18px',
          height: '18px',
          cursor: 'pointer'
        }}
        aria-label={todo.completed ? 'Mark task incomplete' : 'Mark task complete'}
      />
      
      <div style={{ 
        flex: 1,
        marginRight: '14px',
        opacity: todo.completed ? 0.7 : 1
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          marginBottom: '6px',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span style={{ 
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#888' : '#333',
            flex: '1 1 200px',
            fontSize: '16px'
          }}>
            {todo.text}
          </span>
          
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{
              fontSize: '0.75rem',
              padding: '4px 8px',
              backgroundColor: categoryData.color,
              color: 'white',
              borderRadius: '12px',
              fontWeight: 'bold'
            }}>
              Category: {categoryData.name}
            </span>
            <span style={{
              fontSize: '0.75rem',
              padding: '4px 8px',
              backgroundColor: priorityData.color,
              color: 'white',
              borderRadius: '12px',
              fontWeight: 'bold'
            }}>
              Priority: {priorityData.name}
            </span>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.85rem'
        }}>
          <span style={{ 
            color: isOverdue ? '#ff4444' : '#666',
            fontWeight: isOverdue ? 'bold' : 'normal'
          }}>
            📅 Due Date: {formattedDate}
          </span>
          
          {isOverdue && (
            <span style={{ 
              marginLeft: '10px',
              color: '#ff4444',
              fontWeight: 'bold'
            }}>
              OVERDUE
            </span>
          )}
        </div>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          padding: '6px 12px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          minWidth: '70px'
        }}
        aria-label="Delete task"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;