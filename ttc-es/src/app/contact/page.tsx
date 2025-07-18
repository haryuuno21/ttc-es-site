import { FeedbackForm } from "@/components/feedbackForm";
import styles from "./contact_page.module.css";
import { Navbar } from "@/components/navbar";
import { CatalogCard } from "@/components/catalogCard";

export default function Contact() {
  return (
    <div className={styles.page}>
      
      <CatalogCard/>
    </div>
  );
}
