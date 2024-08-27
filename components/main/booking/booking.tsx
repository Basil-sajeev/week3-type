import React from 'react';
import styles from './booking.module.css';
import Image from 'next/image';


const Booking :React.FC= () => {

    function myFunction() {
        var book = document.getElementById("book");
        if (book.style.display === "flex") {
            book.style.display = "none";
        } else {
            book.style.display = "flex";
        }
        }


        function myFunction1() {
            var book1=document.getElementById("book1");
            if(book1.style.display==="block"){
              book1.style.display="none";
            }
            else {
              book1.style.display = "block";
            }
        }
        
        function myFunction2(){
        
          var book2=document.getElementById("book2");
            if(book2.style.display==="block"){
              book2.style.display="none";
            }
            else {
              book2.style.display = "block";
            }
        
        }



    return (

        <main className={styles.main}>
        <div className={styles.m1}>
        <div className={styles.booking_form}>
        <div className={styles.m11}>
            <div className={styles.same}
            ><a href="">Same as Pick-Up</a></div>
            <div className={styles.same}><a href="">Different Drop-off</a></div>
            <div className={styles.same}><a href="">Select Vehicle type <Image src="/images/dropw.svg" width={12} height={12} alt="dropdown"/> </a></div>
        </div>



        
            <div className={styles.input_group}>
                <div className={styles.in}><Image id="ic" src="/images/map.svg" alt='map' width={12} height={12} />
                 <input type="text" id="location" placeholder="Al Quoz"/></div>
              <div className={styles.in}><Image src="/images/date.svg"  alt='date' width={12} height={12}  />
              <input type="datetime" id="pickup-date" value="2023/10/30   09:00  am"/>
              </div>
                <div className={styles.in}><Image src="/images/date.svg" alt='date'  width={12} height={12}  /> 
                  <input type="datetime" id="dropoff-date" value="2023-11-29  09:00  am"/>
              </div>
                <button id="search_btn"><Image src="/images/clarity_search-line.svg" alt='line' width={20} height={20} /></button>
                <Image src="/images/Line 61.svg"  width={50} height={40} />
                <button id="quick-book-btn">Quick Book</button>
            </div>

            <div className={styles.app_download}>
                <div className={styles.app1}>  <p>Download our App for easy accessibility anytime, anywhere!</p></div>
                  <div className={styles.store_buttons}>
                      <a href="#"><Image src="/images/Group 1261156297.svg" alt="App Store" width={135} height={40}/></a>
                      <a href="#"><Image src="/images/Group 1261156298.svg" alt="Google Play" width={135} height={40} /></a>
                  </div>
              </div>
            
        </div>
    </div>
    <div className={styles.booking}>
        <button id="bookacar" onClick={ myFunction}>Book A Car</button>
        <button id="quickbook">Quick Book</button>
    </div>


    <div id="book">
           <button className={styles.book_button} onClick={myFunction1}> Same as Pick-up</button>
            <button className={styles.book_button} onClick={myFunction2}>Different Drop-Off</button>
            <a href="">Vehicle type</a><Image src="/images/dropred.svg" alt='dropred' width={12} height={60}/>
            

        </div>

        <div id="book1">
            <div className={styles.drop}><div className={styles.drop1}><Image id="ic" src="/images/map.svg" alt='map' width={12} height={12}/><a href="">Pickup Location</a><Image src="images/dropred.svg" width={12} height={12}/></div></div>    
            <div className={styles.drop}><div className={styles.drop1}><Image src="/images/date.svg" alt='date' width={12} height={12}/><a href="">Pick-Up Date & Time</a><Image src="images/dropred.svg"  width={12} height={12} /></div></div>    
            <div className={styles.drop}><div className={styles.drop1}><Image src="/images/date.svg" alt='date' width={12} height={12}/><a href="">Drop off  Date & time</a></div></div>    
    </div>

    <div id="book2">
                
    <div className={styles.drop}><div className={styles.drop1}><Image id="ic" src="/images/map.svg"width={12} height={12} alt={'map'}/><a href="">Pickup Location</a><Image src="/images/dropred.svg" width={12} height={12} alt={'dropdown'}/></div></div>    
    <div className={styles.drop}><div className={styles.drop1}><Image src="/images/map.svg" width={12} height={12} alt={'map'} /><a href="">Drop off Location</a><Image src="/images/dropred.svg" width={12} height={12} alt={'dropdown'}/></div></div>    

    <div className={styles.drop}><div className={styles.drop1}><Image src="/images/date.svg"width={12} height={12}  alt={'date'}/><a href="">Pick-Up Date & Time</a></div></div>    
    <div className={styles.drop}><div className={styles.drop1}><Image src="/images/date.svg"width={12} height={12} alt={'date'} /><a href="">Drop off  Date & time</a></div></div>    


</div>


</main>

    );
};

export default Booking;