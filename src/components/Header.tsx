import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}

export default Header