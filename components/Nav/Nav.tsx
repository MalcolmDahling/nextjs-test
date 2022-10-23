import Link from 'next/link';
import styles from './Nav.module.scss';

function Nav(){

    return(
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>

                <li>
                    <Link href='/about'>About</Link>
                </li>

                <li>
                    <Link href='/other'>Other</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;