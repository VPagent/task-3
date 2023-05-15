import { FC, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import { storage } from "../../helpers/storage";
import FavoritesBox from "../../components/FavoritesBox/FavoritesBox";
import Table from "../../components/Table/Table";
import { Data, Item } from "../../types";

const STORAGE_DATA_KEY = "data";
const STORAGE_FAVORITE_KEY = "favorites";

const HomePage: FC = () => {
  const { set, get } = storage;
  const [data, setData] = useState<Data>(get(STORAGE_DATA_KEY) || null);
  const [favoriteItems, setFavoriteItems] = useState<string[] | []>(
    get(STORAGE_FAVORITE_KEY) || []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeData = (data: Data) => {
    setData(data);
  };

  const handleChangeFavorites = (name: Item["name"]) => {
    //@ts-ignore
    if (favoriteItems.includes(name)) {
      const filteredFavorites = favoriteItems.filter((item) => item !== name);

      setFavoriteItems(filteredFavorites);
    } else {
      setFavoriteItems([...favoriteItems, name]);
    }
  };

  const handleClearFavorites = () => {
    setFavoriteItems([]);
  };

  useEffect(() => {
    set(STORAGE_DATA_KEY, data);
    set(STORAGE_FAVORITE_KEY, favoriteItems);
  }, [data, favoriteItems]);

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <Form onChangeData={handleChangeData} onActiveLoader={setIsLoading} />
        {!!favoriteItems?.length && (
          <FavoritesBox
            favoriteItems={favoriteItems}
            onClearFavorites={handleClearFavorites}
          />
        )}

        <Table
          data={data}
          isLoading={isLoading}
          favoriteItems={favoriteItems}
          handleChangeFavorites={handleChangeFavorites}
        />
      </Container>
    </section>
  );
};

export default HomePage;
