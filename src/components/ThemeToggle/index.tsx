'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.skeleton}></div>;
  }

  const isDark = theme === 'dark';

  return (
    <button
      className={`${styles.toggleBtn} ${isDark ? styles.isDark : ''}`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      <div className={styles.slider}>
        <div className={styles.iconContainer}>
          {isDark ? <Moon size={14} className={styles.icon} /> : <Sun size={14} className={styles.icon} />}
        </div>
      </div>
    </button>
  );
}
