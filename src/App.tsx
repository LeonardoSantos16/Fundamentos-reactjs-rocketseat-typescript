import { useState } from 'react'
import { Post, PostType } from './components/Post'

import { Header } from './components/Header'
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts : PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LeonardoSantos16.png',
      name: 'Leonardo dos Santos',
      role: 'estágiario dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-24 10:52:56'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {

  return (
    <div>
      
     <Header />
     <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              post={post}
              />
            )
          })

          }
        </main>
      </div>
    </div>
  )
}

export default App
