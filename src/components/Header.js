import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import Button from './Button';

export default function Header(props) {
  let { title, onAdd, showAddTask } = props;

  const location = useLocation();

  return (
    <header className='header'>
      <h1> {title} </h1>
      {location.pathname === '/' && (
        <Button
          color={showAddTask ? 'red' : 'green'}
          text={showAddTask ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  );
}
Header.defaultProps = {
  title: 'Tasks Tracker',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
