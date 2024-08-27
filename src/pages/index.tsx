import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/main/banner/banner";
import Booking from "../../components/main/booking/booking";
import Subscriber from "../../components/main/subscriber/subscriber";
import Locations from "../../components/main/locations/locations";
import Questions from "../../components/main/questions/questions";



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&family=Playwrite+DE+Grund:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <Header />
      <Booking />
      <Banner />
      <Subscriber/>
      <Locations/>
      <Questions/>
      <Footer />
      </main>
    </>
  );
}
