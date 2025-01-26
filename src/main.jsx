import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Board from "./TicTacToe.jsx"
import Transit from './transit/Transit.jsx'
import ReactTutorial from './tutorial/ReactTutorial.jsx'
import TestComponentsContainer from './test_components/TestComponentsContainer.jsx'
import MongoDBTest from './test_components/MongoDBTest.jsx'
import { DndContext } from '@dnd-kit/core'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <MongoDBTest/>

      

    </>
  </StrictMode>
)
