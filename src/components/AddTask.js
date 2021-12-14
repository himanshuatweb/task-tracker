import { useState } from 'react';
const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const changeText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please Add A Task !');
      return;
    }
    const task = {
      text,
      day,
      reminder,
    };
    addTask(task);
    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='task'>Task</label>
        <input
          type='text'
          name='task'
          placeholder='Add Task'
          value={text}
          onChange={changeText}
        />
      </div>

      <div className='form-control'>
        <label htmlFor='time'>Day & Time </label>
        <input
          type='text'
          name='time'
          placeholder='Add Date & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label htmlFor='reminder'>Set Reminder</label>
        <input
          type='checkbox'
          name='reminder'
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
