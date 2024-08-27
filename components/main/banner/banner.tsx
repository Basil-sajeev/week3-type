import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';


const Banner :React.FC = () => {
    return (

        <main className={styles.main}>
        <div id="mit">
        <Image src="/images/Group 1171275029.svg" layout="responsive"
  width={16} // Aspect ratio width (e.g., 16:9)
  height={9}
  alt={'banner'} />
    </div>
<h3>Most Popular cars</h3>
<div className={styles.scrolling}>
<div className={styles.mitsubhi}>

        <div className={styles.mit1}>
            <div className={styles.mit11}>
                <Image src="/images/Mask group.svg"width={300} height={200}  alt={'banner'}/></div>
           <div className={styles.mit12}><h4>Mitsubhi Eclipse</h4>
        <p className={styles.mitp}>Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.</p>
        <div className={styles.mit121}>
            <div className={styles.mit1211}><Image src="/images/seat.svg" alt="seat" width={12} height={50}/> <p>6 people</p></div>
            <div className={styles.mit1211}><Image src="/images/gear.svg" alt=" gear" width={12} height={50}/><p>automatic</p></div>
            <div className={styles.mit1211}><Image src="/images/door.svg"  alt="door" width={12} height={50}/><p>5 Doors</p></div>
            <div className={styles.mit1211}><Image src="/images/ac.svg"  alt="ac" width={12} height={50}/><p>AC</p></div>
        </div>  
    <div className={styles.mit122}>
        <div className={styles.mit1221}><p>AED 2700/ Monthly</p> <button className={styles.mi}>Book Now</button></div>
    </div>
    </div>  
        </div>
        <div className={styles.mit2}>
            <div className={styles.mit21}>
            <Image src="/images/Mask group(1).svg"  alt={'banner'} width={300} height={200}/></div>
            <div className={styles.mit22}><h4>Jac j7</h4>
            <p className={styles.mitp}>S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.  </p>
        
            <div className={styles.mit121}>
                <div className={styles.mit1211}><Image src="/images/seat.svg" alt="seat" width={12} height={50}/> <p>6 people</p></div>
                <div className={styles.mit1211}><Image src="/images/gear.svg" alt=" gear"width={12} height={50}/><p>automatic</p></div>
                <div className={styles.mit1211}><Image src="/images/door.svg"  alt="door" width={12} height={50}/><p>5 Doors</p></div>
                <div className={styles.mit1211}><Image src="/images/ac.svg" alt="ac" width={12} height={50}/><p>AC</p></div>
          
            </div>
            <div className={styles.mit122}>
                <div className={styles.mit1221}><p>AED 2700/ Monthly</p> <button className={styles.mi}>Book Now</button></div>
            </div>
        </div>
            
        </div>
        </div>
        </div>



</main>

    );
};



export default Banner;