import Styles from "../app/page.module.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        <Card />
      </main>
    </>
  );
}
