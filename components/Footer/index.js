import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        width='187'
        height='70'
        src='/img/logo-white-stroke.png'
        alt='Logo NatuSau com borda branca'
      />

      <address>
        <a href='https://goo.gl/maps/gMxkmLhqKaSAsLtN6' target='_blank'>
          R. do Beija-Flor, 62 - Imbuí, Salvador - BA, 41720-050
        </a>
        <br /> <br />
        Fale conosco: <a href='tel:+5571992177854'>+55 (71) 99217-7854</a>
      </address>

      <a href='#'>www.natusau.com</a>
    </footer>
  )
}
