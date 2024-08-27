import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';

const Header : React.FC = () => {

    function toggleMenu(){:
        const head=document.getElementById("head1");
        if(head){
          head.style.display = head.style.display === 'flex' ? 'none' : 'flex';
        }
      
      }


    return (
        <header className = {styles.header} >
    
        <div className={styles.ellipse}>
             <Image id="ca" src="/images/Layer_1.svg" alt={'banner'} width={500} height={50} />
            <div className={styles.top}>
                 <div className={styles.social}>
                     <div className={styles.social1}>
            <div className={styles.social11}><a href=""><Image src="/images/facew.svg" alt="Facebook" width={20} height={20} /></a></div>
            <div className={styles.social11}><a href=""><Image src="/images/xw.svg" alt="Twitter" width={20} height={20} /></a></div>
            <div className={styles.social11}><a href=""><Image src="/images/instaw.svg" alt="Instagram"  width={20} height={20} /></a></div>
            <div className={styles.social11}><a href=""><Image src="/images/linkw.svg" alt="LinkedIn" width={20} height={20} /></a></div>
        </div>
    
    <div className={styles.head} id="head1">
        
    
           <div className={styles.nav}> <a className={styles.top} href="">About</a></div>
          <div className={styles.nav}>  <a className={styles.top} href="">Offers</a></div>
            <div className={styles.nav}><a className={styles.top} href="">Corporate</a></div>
          <div className={styles.nav}> <a className={styles.top} href="">Personal</a></div>
          <div className={styles.nav}><a className={styles.top} href="">Locations</a></div>
           <div className={styles.nav}> <a className={styles.top} href="">Contact Us</a></div>
          <div className={styles.nav}> <Image className={styles.head2} src="/images/Group 1171275109.svg" width={100} height={20} alt="Group" /></div>
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>&#9776;

          </div>
          <div >
            <p className={styles.note}>Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All Rates inclusive of VAT. T&C 's apply | Follow us on Social Media for New Offers</p>
        </div>
    </div>
    
    </div>
    </div>



</header>
    );
};


export default Header;