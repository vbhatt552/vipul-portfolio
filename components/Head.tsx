import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Vipul Bhatt is a passionate software engineer specializing in MERN stack and AI-powered applications, building modern web solutions."
      />
      <meta
        name="keywords"
        content="vipul bhatt, vipul, bhatt, web developer portfolio, vipul web developer, vipul developer, mern stack, vipul bhatt portfolio, full stack developer"
      />
      <meta property="og:title" content="Vipul Bhatt's Portfolio" />
      <meta
        property="og:description"
        content="Full-Stack Developer passionate about MERN stack, AI integrations, and building scalable applications."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vipul-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Vipul Bhatt',
};
