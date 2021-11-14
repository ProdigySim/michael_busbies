import React from 'react';
import Link from 'next/link'

import styles from './TopNav.module.scss';

export const TopNav = () => {
  return (
    <div className={styles.topNavContainer}>
      <h1>Michael of the Busbies</h1>
      <div className={styles.topNav}>
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Blog</a>
        </Link>
        <Link href="/resume" as={process.env.BACKEND_URL + '/'}>
          <a>Resume/CV</a>
        </Link>
        <Link href="/about" as={process.env.BACKEND_URL + '/'}>
          <a>About</a>
        </Link>
      </div>
    </div>
  )  
};
