import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import { SunOne, Moon } from '@icon-park/react';

function Switcher({ blockName, blockLink }: SwitchProps) {
  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <>
      <div className={styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className={styles.handle} layout transition={spring}>
          {isOn === true ? (
            <SunOne
              theme="outline"
              size="20"
              fill="#333"
              style={{ marginTop: '0.5rem' }}
            />
          ) : (
            <Moon
              theme="outline"
              size="20"
              fill="#333"
              style={{ marginTop: '0.5rem' }}
            />
          )}
        </motion.div>
      </div>
    </>
  );
}

interface SwitchProps {
  blockName?: string;
  blockLink?: string;
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default Switcher;
