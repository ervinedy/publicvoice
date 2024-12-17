'use client'; // Ensure it's a client component

import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import styles from '../styles/page.module.css'; // Correct path for styles

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      {/* Banner Image */}
      <div className={styles.bannerContainer}>
        <Image 
          src="/images/banner.jpg" 
          alt="PublicVoice Banner" 
          width={1200} 
          height={300} // Smaller height value for the banner
          className={styles.bannerImage} 
        />
      </div>

      {/* Content */}
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>Welcome to PublicVoice</h1>
        <p className={styles.paragraph}>
          Your platform to vote on community improvements, give feedback, and participate in polls.
        </p>

        {/* Go to Polls Button */}
        <Link href="/polls">
          <button className={styles.voteButton}>Go to Polls</button> {/* Using button directly inside Link */}
        </Link>
      </div>
    </div>
  );
}
