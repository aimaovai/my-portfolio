'use client';

import styles from './LastUpdated.module.css';

type Props = {
  year?: number;
  text?: string;
  position?: 'left' | 'right';
};

export default function LastUpdated({
  year = new Date().getFullYear(),
  text,
  position = 'right',
}: Props) {
  return (
    <div
      className={`${styles.lastUpdated} ${
        position === 'left' ? styles.left : styles.right
      }`}
      aria-label="Last updated"
    >
      {text ?? `Last updated: ${year}`}
    </div>
  );
}
