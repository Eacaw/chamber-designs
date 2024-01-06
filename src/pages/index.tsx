import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import * as homeElements from "../components/HomepageFeatures/elements/home/HomeElements";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary",
        styles.heroBanner,
        styles.splashBackground
      )}
    >
      <div>
        <h1 className={(styles.fadeUp, styles.siteTitle)}>
          Hi, I&#x27;m David Pinchen
        </h1>
        <div className={styles.fadeUp}>
          <homeElements.SkillIcons />
        </div>
        <p className={styles.fadeUp}> Scroll down for more about me...</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
