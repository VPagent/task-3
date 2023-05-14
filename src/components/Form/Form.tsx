import { ChangeEvent, FC, useState } from "react";
import styles from "./Form.module.scss";
import { fetchData } from "../../services/Api";

type Props = {
  onChangeData: (data: any) => void;
  onActiveLoader: (x: boolean) => void;
};

const Form: FC<Props> = ({ onChangeData, onActiveLoader }) => {
  const [value, setValue] = useState("");

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
      <input
        className={styles.input}
        onChange={handleChangeInput}
        type="text"
        value={value}
      />
      <button onClick={handleSubmit} type="button">
        Отправить
      </button>
      <button type="button">Сброс</button>
    </div>
  );
};

export default Form;
