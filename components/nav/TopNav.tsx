import React from 'react';
import Link from 'next/link'

import styles from './TopNav.module.scss';

export const TopNav = () => {
  return (
    <div className={styles.topNavContainer}>
      <h1>Michael of the Busbies</h1>
      <div className={styles.topNav}>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/resume">
          <a>Resume/CV</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  )  
};
