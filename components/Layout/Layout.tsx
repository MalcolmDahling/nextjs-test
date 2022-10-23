import Head from 'next/head';
import styles from './Layout.module.scss';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

function Layout({children}:any){

    return(
        <div className={styles.wrapper}>
            <Head>
                <title>NextJS Test</title>
            </Head>

            <header className={styles.header}>
                <Nav></Nav>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <Footer></Footer>
        </div>
    );
}

export default Layout;