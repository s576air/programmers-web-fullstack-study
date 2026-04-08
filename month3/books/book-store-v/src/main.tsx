import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render((() => {
  // if (process.env.NODE_ENV === "development") {
  //   const { worker } = require("./mock/browser");
  //   worker.start();
  // }

  return <StrictMode>
      <App />
  </StrictMode>
})())
