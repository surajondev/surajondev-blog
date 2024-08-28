import Image from "next/image";
import styles from "./page.module.css";
import { ArticleList } from "./ArticleList";

export default function Home() {
  return (
    <div>
      <ArticleList />
    </div>
  );
}
