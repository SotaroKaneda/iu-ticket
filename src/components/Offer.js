import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Offer(props){
    const [seller, setSeller] = useState(props.seller);
    const [price, setPrice]  = useState(props.price);

    return(
        <a className={styles.card}>
            <p>{seller} selling for ${price}</p>
        </a>
    )
}

export default Offer;