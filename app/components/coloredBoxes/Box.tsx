import React from 'react';
import styles from './box.module.css';

interface BoxProps {
  value: string;
  label: string;
  backgroundColor: string;
  textColor: string;
}

const Box: React.FC<BoxProps> = ({ 
  value, 
  label, 
  backgroundColor, 
  textColor 
}) => {
  return (
    <div 
      className={styles.box}
      style={{
        backgroundColor,
        color: textColor
      }}
    >
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default Box;