import React from "react";
import styles from "./Toggle.module.scss";

type Props = {
  value: boolean;
  onClick: () => void;
};

const Toggle: React.FC<Props> = ({ value, onClick }) => {
  return (
    <label className={styles.toggle} data-testid="toggle">
      <input
        className={styles.input}
        type="checkbox"
        checked={value}
        readOnly
        onClick={onClick}
        data-testid="input"
      />
      <span className={styles.slider} data-testid="slider"></span>
    </label>
  );
};

export { Toggle };
