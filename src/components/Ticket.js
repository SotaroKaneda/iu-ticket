import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Ticket(props){
    const [name, setName] = useState(props.name);
    const [offers, setOffers]  = useState([20, 30, 40]);
    

    return(
        <Link href="/offers" >
            <a className={styles.card}>
                <h2>{name}&rarr;</h2>
                <p>{offers.length} offers available</p>
                <p>Lowest Offer</p>
                <p>{offers[0]}</p>
            </a>
        </Link>
    )
}

export default Ticket;