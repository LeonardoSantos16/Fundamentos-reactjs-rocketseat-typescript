import React from 'react'
import ReactDOM from 'react-dom/client' // integrando do react coma a DOM (document object model)
import App from './App.js'
//javascript que cria a interface da aplicação

// react: criar um html e tudo que usuário interagem a partir do javascript
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
