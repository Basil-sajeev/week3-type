import React from 'react';
import styles from './subscriber.module.css';
import Image from 'next/image';


const Subscriber:React.FC = () => {
    return (
        <main className={styles.main}>

<div className={styles.subscriber}>
             <div className={styles.sub1}>
 <div className={styles.subh}> <h4>Subscribe here for exclusive offers and updates!</h4></div>
 <input type="text" id="name" placeholder="Name" />
 <input type="text" id="email" placeholder="Email" />
 <p>Don't miss out! enter your email and your name, then hit subscribe to unlock a world of special offers and details.</p>
 <button>Subscribe</button>
             </div>
             <div className={styles.sub2}>
                 <div className={styles.sub21}> <Image src="/images/Rectangle.png"alt={'phone'} width={231} height={432} id="phone"/>
                     <div id="numberm"> <input type="text" placeholder="Enter phonenumber" id="number" />
                         <button className={styles.bt}>Get the link</button></div>
                 </div>
                 <div className={styles.sub22}><div><p>Enter your number and receive a direct link to download the app</p></div>
                    <div id="numberd"> <input type="text" placeholder="Enter phonenumber" id="number"/></div>
                    <div><button className={styles.bt}>Get the link</button></div>
                     <p>Get in on</p>
                     <div className={styles.sub221}>
                    <a href=""><Image src="/images/appstore.svg" alt={'appstore'} width={135} height={40} /></a> 
                     <a href=""><Image src="/images/playstore.svg"alt={'playstore'}  width={135} height={40} /></a>
                 </div>
                </div>
                <div className={styles.sub23}>
                 <div className={styles.sub221}>
                     <p>Get in on</p>
                     <a href=""><Image src="/images/appstore.svg" alt={'appstore'} width={135} height={40} /></a> 
                      <a href=""><Image src="/images/playstore.svg" alt={'playstore'} width={135} height={40} /></a></div>
                      <p>Enter your number and receive a direct link to download the app</p>
                  
                </div>
                
                 
             </div>
         </div>
        </main>    



    );
};

export default Subscriber;