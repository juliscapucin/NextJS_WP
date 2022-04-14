import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Header from "./Header";
import Hero from "./Hero";

import styles from "@/styles/Layout.module.scss";

const containerVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "0%",
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const contentContainerVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "0%",
    transition: { duration: 1 },
  },
  exit: {
    x: "-100%",
    transition: { duration: 3 },
  },
};

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      key='child'
    >
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.mainContainer}>
        {router.pathname === "/" && <Hero />}
        {children}
      </div>
    </motion.div>
  );
}

Layout.defaultProps = {
  title: "Website XYZ",
  description: "Here goes description for meta tag.",
  keywords: "film, filmmaking, edition",
};
