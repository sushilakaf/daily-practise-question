import { useState } from 'react';
import './App.css'

import QuizMcq from './activeQuestion';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <QuizMcq/>
   </div>
  )
}

export default App;
