import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import * as React from "react";

import styles from "./projects.module.css";

export default function projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const tempData = ["test1", "test2", "test3", "test4", "test5"];
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Personal Project Portfolio of David Pinchen"
    >
      <div className={styles.content}>
        <main>
          <h1>Welcome to My Projects</h1>
          <div>
            <div className={styles.card}>
              <h2>Typewriting Monkeys</h2>
              <p>An exercise in Genetic Algorithms</p>
              <a href="/projects/typewriting-monkeys">View Project</a>
            </div>
            <div className={styles.card}>
              <h2>Wave Function Collapse Sodoku</h2>
              <p>Breadth first search implementation</p>
              <a href="/projects/wfc-soduku">View Project</a>
            </div>
            {/* Add more project cards here */}
          </div>
        </main>
      </div>
    </Layout>
  );
}
