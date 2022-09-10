import React from 'react'
import styles from './styles.module.css'

export default function Modal(
    {
        show = false,
        title = "Modal Title",
        content = 'Modal Content'
    }

){

    const closeModal = () => {
        document.querySelector('#modal').display = 'none';
    }

    return (
        <div className={show ? styles.modalshow : styles.modalhide}>
            <div className={styles.modalbody}>
               <div className={styles.modaltitle}>
                    {title} 
                </div>              
                <div className={styles.modalcontent}>
                    {content}
                </div>
                <a className={styles.close}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                </a>
              

            </div>
        </div>   
       
    )
}
