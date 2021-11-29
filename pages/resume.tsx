import Head from 'next/head';

// css
import styles from './resume.module.scss';
export default function Resume() {
  return (
    <main className="resume content-block">
      <Head>
        <title>Michael Busby | Rseume</title>
      </Head>
      <h1>Michael Busby</h1>
      <p> I'm a full-stack Software Developer, with a focus on front-end systems.
        I've been working fully remote since 2018, after moving from Seattle to Kansas City.
        I have a passion for security and user-centered design. Developers are users, too!
      </p>
      <hr />
      <h2>Salaried positions</h2>
      <div className={styles.companyHeader}>
        <div>
          <h3>BazaarVoice Inc. - Senior Staff Software Engineer</h3>
          <h4>August 2020 – May 2021 (10 months)</h4>
        </div>
        <img className={styles.logo} src={require('../images/resume/bv-logo.jpg')} alt="BazaarVoice Logo" />
      </div>
      <p>Continuation of my Curalate Software Engineering role, with some additional responsibilities relating to the acquisition.</p>
      <p>Collaborated with existing BV teams in the US & abroad on unifying the Identity & Login systems between Curalate and BV.</p>
      <p>Worked on documentation, tech debt paydown, and mentorship in order to knowledge & ownership transfer for:
        <ul>
          <li>Authentication & Authorization systems</li>
          <li>Mobile app security</li>
          <li>Feature management systems</li>
          <li>Frontend architecture and infrastructure</li>
        </ul>
      </p>
      <div className={styles.companyHeader}>
        <div>
          <h3>Curalate (Acquired by BazaarVoice) - Software Engineer III</h3>
          <h4>November 2015 to August 2020 (4 yrs 10 months) </h4>
        </div>
        <img className={styles.logo} src={require('../images/resume/curalate-logo.png')} alt="Curalate Logo" />
      </div>
      <p>Full stack problem solver at a roller coaster of a startup. We built smart tools to help brands blend social and ecommerce end-to-end!</p>
      <ul className="emoji-bulleted">
        <li>💪 Full-Stack Developer on web+mobile applications on Scala+JS stack.</li>
        <li>💅 Built our first Design Pattern Library for the company in AngularJs/CSS.</li>
        <li>🔒 AppSec focused:
          <ul>
            <li>Built Authentication & CSRF schemes; integrated Cognito IdP and JWT validation.</li>
            <li>Ran Pen-Testing, built XSS, SSRF, CSRF mitigations, secure coding patterns, and developer education.</li>
          </ul>
        </li>
        <li>🧑‍🔬 DX Focused:
          <ul>
            <li>Managed large frontend application build, boot, auth, tooling, and environment.</li>
            <li>Modernized our main app from AngularJS/JS app to TypeScript, React, Redux.</li>
            <li>Built a system to incrementally increase the static analysis coverage of our codebase over time.</li>
            <li>Scaffolded a swagger-based TypeScript code generation system for our web API</li>
            <li>Rebuilt our mobile application in React Native for iOS and Android.</li>
            <li>Ran our Frontend Working Group--designing patterns, doing presentations, knowledge sharing, and celebrating the complex world of Frontend Development!</li>
          </ul>
        </li>
        <li>❤️ Learned user empathy and collaborative developer culture with teams spread across the US.</li>
        <li>😲 Watched mountains move and helped hack solutions to move them 😉</li>
      </ul>
      <div className={styles.companyHeader}>
        <div>
          <h3>BevyUp (Acquired by Nordstrom) - Software Developer</h3>
          <h4>August 2012 to April 2015 (2 years 9 months)</h4>
        </div>
        <img className={styles.logo} src={require('../images/resume/bevyup-logo.png')} alt="BevyUp Logo" />
      </div>
      <p>Employee no. 7 at a small startup. We enabled ecommerce customers to browse online stores together, with rich interactivity, screen sharing, and video chat--all within a single JS tag!</p>
      <ul className="emoji-bulleted">
        <li>😅 Lead Frontend Developer on a responsive co-browsing web application.</li>
        <li>😎 Built MVVM Framework and Frontend Application in Script#/Saltarelle. (C#→JS)</li>
        <li>🏃 Performance optimized CSS & animations for iOS Safari, Android Browser, and desktop browsers.</li>
        <li>🕵️ Built cross frame/tab/browser communication to track users & create P2P interactivity.</li>
        <li>🙇 Learned to ship code and do whatever is needed.</li>
        <li>🍹 Mixed cocktails for happy hour.</li>
      </ul>
    </main>
  )
}
