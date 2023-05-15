import { FC } from "react";
import styles from "./FavoritesBox.module.scss";

type Props = {
  favoriteItems: string[] | [];
  onClearFavorites: () => void;
};

const FavoritesBox: FC<Props> = ({ favoriteItems, onClearFavorites }) => {
  return (
    <div className={styles.component}>
      <div className={styles.countBox}>
        <p>{favoriteItems?.length} in Favorites</p>
      </div>
      <button
        className={styles.button}
        onClick={onClearFavorites}
        type="button"
      >
        Clear all favorites
      </button>
    </div>
  );
};

export default FavoritesBox;
