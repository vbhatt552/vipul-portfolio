import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vipul Bhatt</h1>
        <div className={styles.subtitle}>Full-Stack Developer | MERN & AI Enthusiast</div>

        <div className={styles.aboutContent}>
          {/* About Me */}
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hi! I&apos;m Vipul, a software engineer from Uttar Pradesh, India, currently
              pursuing a B.Tech in Electronics and Communication Engineering at IIIT Bhagalpur.
              I specialize in building **full-stack applications** and integrating **AI-powered features**
              for scalable and impactful solutions.
            </p>
            <p className={styles.paragraph}>
              I have hands-on experience with the **MERN stack**, Next.js, and TypeScript, along with strong
              fundamentals in **C++ and algorithms**. My interests lie in **backend development**, 
              **AI integrations**, and **system design**.
            </p>
          </section>

          {/* Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently working as a <span className={styles.highlight}>Software Engineer Intern at Fask.ai</span>, 
              where I&apos;m developing an embeddable AI chatbot for service-based websites using 
              Next.js, Node.js, and OpenAI API. I design scalable backend architectures and collaborate with 
              the product team to optimize chat workflows for various industries.
            </p>
          </section>

          {/* Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Key Projects</h2>
            <ul>
              <li><span className={styles.highlight}>PrepByAI</span> – AI-powered voice interview simulator built with Next.js, Tailwind, and Gemini API.</li>
              <li><span className={styles.highlight}>AutoFixAI</span> – Real-time AI code debugger using MERN stack and OpenAI API.</li>
              <li><span className={styles.highlight}>AI Summarizer Extension</span> – Chrome extension for web content summarization with OpenAI API.</li>
            </ul>
          </section>

          {/* Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Skills</h2>
            <p className={styles.paragraph}>
              Languages: C++, JavaScript, TypeScript, Python | Frameworks: React.js, Next.js, Node.js, Express.js |
              Tools: Git, Postman, Vercel | Databases: MongoDB, MySQL
            </p>
          </section>

          {/* Beyond Code */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside of work, I enjoy exploring new tech trends, solving coding challenges on LeetCode and Codeforces,
              and listening to music (The Weeknd is my favorite!).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
