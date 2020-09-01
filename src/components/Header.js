import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__title'>
        Todo<span>List</span>
      </h1>
      <h2 className='header__subtitle'>
        A simple todolist app built with React and Redux
      </h2>
    </header>
  );
};

export default Header;
