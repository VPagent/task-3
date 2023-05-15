import { ChangeEvent, FC, useState } from "react";
import styles from "./Form.module.scss";
import { fetchData } from "../../services/Api";
import { Data } from "../../types";

type Props = {
  onChangeData: (data: Data) => void;
  onActiveLoader: (x: boolean) => void;
};

const Form: FC<Props> = ({ onChangeData, onActiveLoader }) => {
  const [value, setValue] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClearData = () => {
    setValue("");
    onChangeData(null);
  };

  const handleSubmit = async () => {
    if (value) {
      onActiveLoader(true);
      try {
        const response = await fetchData(value);
        onChangeData(response);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        onActiveLoader(false);
      }
    }
  };

  return (
    <div className={styles.form}>
      <p>Please enter country</p>
      <input
        className={styles.input}
        onChange={handleChangeInput}
        type="text"
        value={value}
        placeholder="Country name"
      />
      <button className={styles.button} onClick={handleSubmit} type="button">
        Send
      </button>
      <button className={styles.button} onClick={onClearData} type="button">
        Clear
      </button>
    </div>
  );
};

export default Form;
