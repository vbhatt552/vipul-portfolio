import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Get in Touch</h1>
      <p className={styles.pageSubtitle}>
        I&apos;m always excited to connect! Whether it&apos;s about a project, collaboration, or just to say hi,
        feel free to reach out through any of the platforms below.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
