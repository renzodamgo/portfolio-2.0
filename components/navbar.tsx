import Link from 'next/link'
import styles from '../styles/navbar.module.scss'

export const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <h1 id={styles.logo}>renzo@damian
                    {/* <span id={styles.block}>█</span> */}
                </h1>
                <ul className={styles.nav_links}>
                    <li className={styles.flex_child}>
                        <Link href={'/'}>
                            <a>
                            Projectos

                            </a>

                        </Link>

                    </li>
                    <li className={styles.flex_child}>
                        <Link href={'/acerca-de-mi'}>
                            <a>
                                Acerca de mí
                            </a>
                        </Link>

                    </li>
                    <li className={styles.flex_child}>
                        <a href="mailto:renzo.damian.go@gmail.com">

                        Contáctame
                        </a>

                    </li>
                </ul>



            </nav>
        </>
    )
}