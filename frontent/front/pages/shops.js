import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import useSWR, { mutate } from 'swr'
import Head from 'next/head'
import styles from '../styles/pets.module.css'
import Navbar from "../components/navbar";

const URL = "http://localhost/api/shops";
const URL2 = "http://localhost/api/purchase";

const fetcher = url => axios.get(url).then(res => res.data)

const SWR2 = () => {
    const [shops, setshops] = useState({ list: [{  id: 1, type: 'cat', age: 1, weight: 5, price: 2000 },] })
    const [shop, setshop] = useState({})
    const [id, setId] = useState(0)
    const [name, setname] = useState('')
    const [price, setPrice] = useState(0)
    const [Deliverycost, setDeliverycost] = useState('')
    const [Delivery, setDelivery] = useState(0)
  //  const { data } = useSWR(URL, fetcher)
    //const { data } = useSWR(URL2, fetcher)


    useEffect(() => { getshops() }, [])

    const getshops = async () => {
        let shops = await axios.get(URL)
        setshops(shops.data)
        //console.log('shop:', shops.data)
    }
    const buyshop = async (id) => {
        const result = await axios.delete(`${URL2}/${id}`)
        console.log(result.data)
        getshops()
    }


    const printshops = () => {
        if (shops && shops.length)
            return shops.map((shop, index) =>
                <li className={styles.listItem} key={index}>
                    <h6>name:{(shop) ? shop.name : 0}</h6>
                    <h6>Price:{(shop) ? shop.price : 0}</h6>
                    <h6>Deliverycost:{(shop) ? shop.Deliverycost : 0}</h6>
                    <h6>Delivery:{(shop) ? shop.Delivery : 0}</h6>

                    <button onClick={() => buyshop(shop.id)} className={styles.byttonupdate} >Buy</button>
                </li>
            )
        else
            return <li> ไม่มีสินค้า </li>
    }
    return (<div className={styles.container}>
        <Navbar />
        <h1>Littelpig shop</h1>
        <ul className={styles.list} >{printPets()}</ul>
    </div>
    )

}

export default SWR2

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}