import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import styles from "./wfc-sodoku.module.css";

export default function projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const tempData = ["test1", "test2", "test3", "test4", "test5"];
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Personal Project Portfolio of David Pinchen"
    >
      <div className={styles.content}>
        <main>
          <h2> Wave Function Collapse - Solving sodoku</h2>
          <p> Wave Function Collapse </p>
        </main>
      </div>
    </Layout>
  );
}
