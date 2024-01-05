import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";

import styles from "./tw-monkeys.module.css";
import TopFiveDisplay from "../../../components/TypewritingMonkeys/TopFiveDisplay";

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
          <TopFiveDisplay data={tempData} />
        </main>
      </div>
    </Layout>
  );
}
