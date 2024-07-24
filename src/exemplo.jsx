import { useState } from 'react'
import Post from './Post'

import { Header } from './components/Header'
import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <div>
      
     <Header />
     <Post 
     author="Diego Fernandes"
      content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, a debitis nam tenetur ipsum sit aut neque amet praesentium corrupti, rem mollitia ex. Iste id voluptatem adipisci, veritatis perspiciatis dignissimos."
    />
    </div>
  )
}

export default App
