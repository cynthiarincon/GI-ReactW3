import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real app, you'd get this from shared state or context
  // For now, we'll use dummy data
  const [task, setTask] = useState({
    id: id,
    title: 'Sample Task',
    description: 'This is a sample task description',
    completed: false
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleSave = () => {
    setTask({
      ...task,
      title: editTitle,
      description: editDescription
    });
    setIsEditing(false);
  };

  return (
    <div>
      <Link to="/">← Back to Task List</Link>
      
      <h1>Task Details</h1>
      
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.completed ? 'Completed' : 'Not completed'}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default TaskDetail;