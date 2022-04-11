import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [presupuesto, setPresupuesto] = useState('');

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
