import { FC } from "react";
import styles from "./Table.module.scss";
import Loader from "../Loader/Loader";
import TableItem from "../TableItem/TableItem";
import cn from "clsx";
import { Data, Item } from "../../types";

type Props = {
  data: Data;
  isLoading: boolean;
  favoriteItems: [] | string[];
  handleChangeFavorites: (name: Item["name"]) => void;
};

const Table: FC<Props> = ({
  data,
  isLoading,
  favoriteItems,
  handleChangeFavorites,
}) => {
  return (
    <div className={styles.component}>
      {isLoading ? (
        <Loader className={styles.loader} />
      ) : (
        data && (
          <>
            {!!data.length && (
              <div className={styles.table}>
                <div className={cn(styles.tableHeader, "row")}>
                  <p className={cn("first", "column")}>#</p>
                  <p className={cn("second", "column")}>Name</p>
                  <p className={cn("third", "column")}>Country</p>
                  <p className={cn("fourth", "column")}>Code</p>
                  <p className={cn("fifth", "column")}>Domians</p>
                  <p className={cn("sixth", "column")}>Web pages</p>
                  <p className={cn("seventh", "column")}>Add</p>
                </div>
                {data?.map((item, index) => (
                  <TableItem
                    key={index}
                    item={item}
                    index={index}
                    onAddToFavorites={handleChangeFavorites}
                    favoriteItems={favoriteItems}
                  />
                ))}
              </div>
            )}
            {!data.length && (
              <div className={styles.errorBox}>
                <h2 className={styles.errorTitle}>
                  There is no info on your request
                </h2>
                <p className={styles.errorText}>
                  Please enter correct country name
                </p>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Table;
