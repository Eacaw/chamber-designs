import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import styles from "./projects.module.css";

export default function projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Personal Project Portfolio of David Pinchen"
    >
      <div className={styles.content}>
        <main>
          <h1>Welcome to My Projects</h1>
          <div>
            <div className={styles.card}>
              <h2>Typewriting Monkeys</h2>
              <p>An exercise in Genetic Algorithms</p>
              <a href="/project1">View Project</a>
            </div>
            <div className={styles.card}>
              <h2>Wave Function Collapse Sodoku</h2>
              <p>Breadth first search implementation</p>
              <a href="/project2">View Project</a>
            </div>
            {/* Add more project cards here */}
          </div>
        </main>
      </div>
    </Layout>
  );
}
