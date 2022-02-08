import Link from 'next/link'
import styles from '../styles/navbar.module.scss'

export const NavBar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <Link href={'/'}>
                    <a>
                    <h1 id={styles.logo}>renzo@damian
                </h1>

                    </a>
                </Link>
                    {/* <span id={styles.block}>█</span> */}
                <ul className={styles.nav_links}>
                        <Link href={'/'}>
                            <a>
                    <li className={styles.flex_child}>
                            Projectos

                    </li>
                            </a>

                        </Link>

                        <Link href={'/acerca-de-mi'}>
                            <a>
                    <li className={styles.flex_child}>
                                Acerca de mí
                    </li>
                            </a>
                        </Link>

                        <a href="mailto:renzo.damian.go@gmail.com">
                    <li className={styles.flex_child}>

                        Contáctame

                    </li>
                        </a>
                </ul>



            </nav>
        </>
    )
}