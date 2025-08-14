import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'vipul-portfolio.vercel.app',
    href: 'https://vipul-portfolio-lvqm.vercel.app/',
  },
  {
    social: 'email',
    link: 'vbhatt552@gmail.com',
    href: 'mailto:vbhatt552@gmail.com',
  },
  {
    social: 'github',
    link: 'vbhatt552',
    href: 'https://github.com/vbhatt552',
  },
  {
    social: 'linkedin',
    link: 'vipul-bhatt-507104250',
    href: 'https://www.linkedin.com/in/vipul-bhatt-507104250/',
  },
  {
    social: 'codeforces',
    link: 'Viper552',
    href: 'https://codeforces.com/profile/Viper552',
  },
  {
    social: 'leetcode',
    link: 'vbhatt552',
    href: 'https://leetcode.com/u/vbhatt552/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
