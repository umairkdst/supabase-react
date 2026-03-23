import { Fragment } from 'react';
import './App.css'
import TaskManager from './components/task-manager';
import Auth from './components/auth';

function App() {
  return (
    <Fragment>
      <TaskManager />
      <Auth />
    </Fragment>
  )
}

export default App
