import React from "react";
import styles from "./timeline.module.css";

export default function Timeline() {
  return (
    <>
      <div className={styles.timelineCard}>
        <h3>Nov &#x27;91</h3>
        <h2>👶 Born</h2>
        <p></p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;06 - &#x27;08</h3>
        <h2>👦 GCSEs</h2>
        <p>English, Maths, Physics, Art, Electronics</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;08 - &#x27;10</h3>
        <h2>🧍 A-Levels</h2>
        <p>AS Computing, L3 Creative Media</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;10 - &#x27;16</h3>
        <h2>👨‍💻 Hobbyist</h2>
        <p>Wordpress Web Designer</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;12 - &#x27;21</h3>
        <h2>🍺 Pubs! </h2>
        <p>Bartender, Chef, Assistant Manager</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;16 - &#x27;20</h3>
        <h2>🎓 University </h2>
        <p>BEng Electronics, Univeristy of York</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>Jul - Aug &#x27;19</h3>
        <h2>🚁 Leonardo</h2>
        <p>Software Summer Placement</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>Q1/2 &#x27;20</h3>
        <h2>✍️ Dissertation</h2>
        <p>Using Evolutionary Algorithms for Battlefield Route Planning</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;21 - &#x27;22</h3>
        <h2>💻 Financial Force</h2>
        <p>Associate Software Engineer</p>
      </div>

      <div className={styles.timelineCard}>
        <h3>&#x27;22 - Present</h3>
        <h2>💻 Certinia</h2>
        <h6>(Formerly Financial Force)</h6>
        <p>Software Engineer</p>
      </div>
    </>
  );
}
