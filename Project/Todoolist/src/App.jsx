import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 TODO LIST</h1>
      
      {/* Add Todo Section */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new todo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add Todo
            </button>
          </div>
        </div>
      </div>

      {/* Todo List */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          {todos.length === 0 ? (
            <div className="text-center text-muted mt-4">
              <p>No todos yet. Add one above!</p>
            </div>
          ) : (
            <ul className="list-group">
              {todos.map((todo) => (
                <li 
                  key={todo.id} 
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />
                    <label 
                      className="form-check-label"
                      style={{ 
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#6c757d' : 'black'
                      }}
                    >
                      {todo.text}
                    </label>
                  </div>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
          
          {/* Stats */}
          {todos.length > 0 && (
            <div className="mt-3 text-muted text-center">
              Total: {todos.length} | 
              Completed: {todos.filter(t => t.completed).length} | 
              Pending: {todos.filter(t => !t.completed).length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;