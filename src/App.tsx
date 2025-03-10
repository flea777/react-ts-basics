import Header from './components/Header'
import Post from './components/Post'
import { PostType } from './components/Post'
import Sidebar from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/flea777.png',
      name: 'Pedro Bim',
      role: 'Software Developer @ Cesar School'
    },
    content: [
      { type: 'paragraph', 
        content: 'Boa noite!! 👋'
      },
      { type: 'paragraph', 
        content: 'Continuando meu aprendizado de React.js com a trilha da Rocketseat!!'
      },
      {
        type: 'link',
        content: 'https://github.com/flea777'
      }  
    ],
    publishedAt: new Date('2025-03-01 20:07:58')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/liv553.png',
      name: 'Lívia Almeida',
      role: 'Software Developer @ Cesar School'
    },
    content: [
      { type: 'paragraph', 
        content: 'Oie! 👋'
      },
      { type: 'paragraph', 
        content: 'Neste momento aprimorando minha base na linguagem C para a cadeira de programação imperativa e funcional na faculdade!'
      },
      {
        type: 'link',
        content: 'https://github.com/liv553'
      }  
    ],
    publishedAt: new Date('2025-03-03 20:07:58')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/yuricsg.png',
      name: 'Yuri França',
      role: 'Software Developer @ Cesar School'
    },
    content: [
      { type: 'paragraph', 
        content: 'Olá! 👋'
      },
      { type: 'paragraph', 
        content: 'Continuando meu aprendizado de Desenvolvimento web no curso Spring Boot Expert do Dougllas Sousa!'
      },
      {
        type: 'link',
        content: 'https://github.com/yuricsg'
      }  
    ],
    publishedAt: new Date('2025-03-03 20:07:58')
  },
]

function App() {

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
          })}
        </main>
      </div>
    </div>
  )
}

export default App

