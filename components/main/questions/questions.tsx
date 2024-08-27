import React from 'react';
import styles from './questions.module.css';
import Image from 'next/image';


const Questions : React.FC= () => {
    return (
        <main className={styles.main}>
            <div className={styles.questions}>
     <h4>Frequently asked questions</h4>
 
     <div className={styles.question_item}>
         <div className={styles.question_header}>
             <p className={styles.ques}>What is my eligibility to book a car?</p>
             <button className={styles.dropbtn}>X</button>
         </div>
         <div className={styles.dropdown_content}>
             <p>You should be 18 years old or above, and you must possess a valid driving license.</p>
         </div>
     </div>
     <div className={styles.question_item}>
         <div className={styles.question_header}>
             <p className={styles.ques}>Can I book for any period of time?</p>
             <button className={styles.dropbtn}>+</button>
         </div>
     </div>
     
     <div className={styles.question_item}>
         <div className={styles.question_header}>
             <p className={styles.ques}>Is there home delivery option available?</p>
             <button className={styles.dropbtn}>+</button>
         </div>
     </div>

     <div className={styles.question_item}>
         <div className={styles.question_header}>
             <p className={styles.ques}>How can i make the payment?</p>
             <button className={styles.dropbtn}>+</button>
         </div>
     </div>



 </div>




        </main>
    );
};


export default Questions;