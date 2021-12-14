const Task = ({ task, onDelete, onToggle }) => {
  const { text, id, day, reminder } = task;
  return (
    <div
      className={`task ${reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(id)}
    >
      <h3>
        {text}
        <i
          className='fas fa-times'
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(id)}
        ></i>
      </h3>
      <p>{day}</p>
    </div>
  );
};

export default Task;
