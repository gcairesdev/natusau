import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>NatuSau</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main>
        <section className={styles.banner}></section>

        <section className={styles.greenCard}>
          <h2>Mais saúde para a sua vida </h2>

          <p>
            Todos os nossos produtos são elaborados a partir de frutas
            especialmente selecionadas, desidratadas e manipuladas com a mais
            alta qualidade e higiene, concentrando o melhor sabor da natureza!
          </p>
        </section>

        <section className={styles.products}>
          <h2>Nossos produtos</h2>

          <div className={styles.productsWrapper}>
            <div className={styles.product}>
              <Image
                width='110'
                height='110'
                src='/img/dehydrated-fruits.png'
                alt='Frutas desidratadas'
              />
              <em>Frutas desidratadas</em>
            </div>

            <div className={styles.product}>
              <Image
                width='110'
                height='110'
                src='/img/institutional.png'
                alt='Institucional'
              />
              <em>Institucional</em>
            </div>

            <div className={styles.product}>
              <Image
                width='110'
                height='110'
                src='/img/premium-mix.png'
                alt='Premium Mix'
              />
              <em>Premium Mix</em>
            </div>
          </div>

          <a href='#'>Confira nossos produtos</a>
        </section>

        <section className={styles.services}>
          <h2>Serviços</h2>

          <div>
            <p>
              Temos capacidade de embalar produtos sólidos em grãos, pedaços,
              entre outos em embalagens plásticas ou metalizadas de acordo com a
              necessidade do cliente. 
            </p>

            <p>
              Dispomos de equipamentos de grande capacidade para desidratar
              frutas, verduras, ervas, legumes entre outros. Envasado a granel
              de acordo com a necessidade do cliente. 
            </p>

            <p>
              Além do serviço de desidratação, temos a capacidade de realizar o
              processo de envase em embalagem de varejo a ser desenvolvida pelo
              cliente.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
