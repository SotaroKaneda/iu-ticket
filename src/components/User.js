import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function User(props){
    const [name, setName] = useState(props.name);
    const [icon, setIcon] = useState(props.icon);
    const [email, setEmail] = useState(props.email);
    const [phoneNum, setPhoneNum] = useState(props.phoneNum);

    return(
            <a className={styles.card}>
                <h2>{name}&rarr;</h2>
                <p>{offers.length} offers available</p>
                <p>seller</p>
                <p>{offers[0]}</p>
            </a>
    )
}

export default User;