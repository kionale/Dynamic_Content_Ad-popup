import React from 'react'
import styles from './Ad.module.css'
import { useState } from "react"

export default function Ad() {

    const [popup, setPopUp] = useState(true);
    return (
        <div>
            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup_area}>
                            <div onClick={() => setPopUp(false)}>Close</div>
                            <h1>Ad content</h1>
                        </div>
                    </div> : null
            }
        </div>
    )
}
