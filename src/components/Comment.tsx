import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return ( 
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/flea777.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Bim</strong>
              <time title="26 de fevereiro as 22:35h" dateTime="2025-02-25 22:35:19">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
   )
}
 
export default Comment