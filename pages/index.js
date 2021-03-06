import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className="">
        {/* <Navbar /> */}
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          ultrices pretium. Curabitur fermentum elit id sapien tristique, vel
          vulputate augue malesuada. Ut dui felis, dictum eget imperdiet id,
          aliquam eu mauris. Donec cursus velit tellus, vel auctor velit
          venenatis vitae. Sed in purus efficitur, tristique purus vitae,
          posuere lectus. Quisque finibus tellus ex, non congue nisi varius vel.
          Donec ac varius arcu, ac laoreet lorem.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  );
}
