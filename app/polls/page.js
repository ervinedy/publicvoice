// app/polls/page.js
'use client';

import { useState } from 'react';
import styles from '../../styles/polls.module.css'; // Ensure the correct path

export default function PollsPage() {
  const [votes, setVotes] = useState({
    question1: null,
    question2: null,
    question3: null,
  });

  const handleVote = (question, vote) => {
    setVotes((prevVotes) => ({ ...prevVotes, [question]: vote }));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pollsContainer}>
        <h1 className={styles.heading}>Vote for Community Initiatives</h1>
        
        {/* Question 1 */}
        <div className={styles.questionContainer}>
          <h2>Do you support the proposed park improvement?</h2>
          <button 
            className={styles.voteButton} 
            style={{ backgroundColor: votes.question1 === 'yes' ? 'green' : '' }}
            onClick={() => handleVote('question1', 'yes')}
          >
            Yes
          </button>
          <button 
            className={styles.voteButton} 
            style={{ backgroundColor: votes.question1 === 'no' ? 'red' : '' }}
            onClick={() => handleVote('question1', 'no')}
          >
            No
          </button>
        </div>

        {/* Question 2 */}
        <div className={styles.questionContainer}>
          <h2>Should we repair the local road?</h2>
          <button 
            className={styles.voteButton} 
            style={{ backgroundColor: votes.question2 === 'yes' ? 'green' : '' }}
            onClick={() => handleVote('question2', 'yes')}
          >
            Yes
          </button>
          <button 
            className={styles.voteButton} 
            style={{ backgroundColor: votes.question2 === 'no' ? 'red' : '' }}
            onClick={() => handleVote('question2', 'no')}
          >
            No
          </button>
        </div>

        {/* Question 3 */}
        <div className={styles.questionContainer}>
          <h2>Do you think new bike lanes are needed?</h2>
          <button 
            className={styles.voteButton} 
            style={{ backgroundColor: votes.question3 === 'yes' ? 'green' : '' }}
            onClick={() => handleVote('question3', 'yes')}
          >
            Yes
          </button>
          <button 
            className={styles.voteButton} 
            style={{ backgroundColor: votes.question3 === 'no' ? 'red' : '' }}
            onClick={() => handleVote('question3', 'no')}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
