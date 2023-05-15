import { FC, useState } from "react";
import styles from "./CheckBox.module.scss";
import cn from "clsx";

type Props = {
  checked: boolean;
  onChange: () => void;
};

const CheckBox: FC<Props> = ({ checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onChange();
  };
  return (
    <button className={styles.button} onClick={handleClick} type="button">
      <span className={styles.border}>
        <span
          className={cn(styles.fill, isChecked && styles.fillChecked)}
        ></span>
      </span>
    </button>
  );
};

export default CheckBox;
