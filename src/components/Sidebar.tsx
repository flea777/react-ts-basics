import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'

const Sidebar = () => {
    return ( 
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar 
                src="https://github.com/flea777.png"/>

                <strong>Pedro Bim</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
     )
}

export default Sidebar