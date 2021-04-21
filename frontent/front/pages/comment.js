import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'


const comment = ({ token }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/comment`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
    const show = (text1,text2) => {
       
        return (
            <div>
                <label >Email address</label>
            <h6>{text1}</h6>
        <h6>{text2}</h6>
        </div>
        )
        
        
    }

    return (
        <Layout>
            <Head>
            <meta charset="utf-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
                <title>comment</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>User comment</h1>
                <div>
                    {JSON.stringify(user)}
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="text1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="text2" rows="3"></textarea>
                    </div>
                    
                </div>

                <button type="submit" onClick={() => show(text1,text2)}class="btn btn-primary">Submit</button>
                
            </div>

            
        </Layout>
        
        
    )



}

export default withAuth(comment)


export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}