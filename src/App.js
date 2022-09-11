import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';

const App = () => {
  return (
    <div className='App'>
      <Category />
      <Search />
      <Pages />
    </div>
  )
}

export default App