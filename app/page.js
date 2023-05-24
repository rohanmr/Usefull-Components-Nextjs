import Styles from "../app/page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className={Styles.main}>
      <Card />
    </main>
  );
}
