import Layout from '../../components/layout'
import styles from '../../styles/proyecto.module.scss'

export default function camupc() {
    return (
        <div className={styles.proyecto}>
            <Layout>

                <div className={styles.bg_img}>
                    <img src="../../img/banner.png" alt="" />

                </div>
                <div>

                </div>
                <div className={styles.container} id={styles.content}>
                    <ul>
                        <li><span className='bold'>Proyecto:</span> Congreso Anual de Marketing UPC</li>
                        <li><span className='bold'>Rol:</span> Estudiante </li>
                        <li><span className='bold'>Duración:</span> Julio - Sept 2021</li>
                    </ul>

                </div>
            </Layout>

        </div>
    )
}