import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src='/img/logo.png'
        alt='Logo NatuSau'
        width='187'
        height='70'
      />
      <ul>
        <li className={styles.active}>Home</li>
        <li>Empresa</li>
        <li>Produtos</li>
        <li>Contato</li>
        <li>
          <a
            target='_blank'
            href='https://api.whatsapp.com/send?phone=5571992177854'
          >
            Compre aqui
          </a>
        </li>
      </ul>
    </header>
  )
}
