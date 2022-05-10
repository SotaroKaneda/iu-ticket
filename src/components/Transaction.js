import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Transaction(props){
    const [seller, setSeller] = useState(props.offer.seller);
    const [buyer, setBuyer] = useState(props.buyer);
    const [price, setPrice]  = useState(props.offer.price);
    const [transactionDate, setTransactionDate] = useState(props.transactionDate);


    return(
            <a className={styles.card}>
                <h2>{name}&rarr;</h2>
                <p>{offers.length} offers available</p>
                <p>seller</p>
                <p>{offers[0]}</p>
            </a>
    )
}

export default Ticket;