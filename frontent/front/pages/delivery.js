import Layout from '../components/layout'
import Head from 'next/head'
import config from '../config/config'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const delivery = () => {
    return (<Layout>
        <Head>
            <title>วิธีจัดส่ง</title>
        </Head>
        <div className={styles.container}>
            <Navbar />
            <h2> วิธีจัดส่ง </h2>
            <b>Config: </b> {JSON.stringify(config)}
            <ul>
                <li>npm run dev  (for development mode)</li>
                <li>npm run build; npm run start  (for production mode)</li>
            </ul>
        </div>

    </Layout>)
}

export default delivery