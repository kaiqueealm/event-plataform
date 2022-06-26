
import React from 'react'
import ReactDOM from 'react-dom/client' // react dom e importação para react funcionar dentro da dom
import App from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App /> 
  </React.StrictMode>
)


// dentro da div no html vai chamar uma unica vez o root vai redenrizar ou mostrar em tela

// cria um app pra utiliza como uma tag html