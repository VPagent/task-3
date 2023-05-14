import { FC, useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import TableItem from "../../components/TableItem/TableItem";
import Loader from "../../components/Loader/Loader";

const HomePage: FC = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeData = (data: any) => {
    setData(data);
  };

  if (isLoading) {
    return <Loader className={styles.loader} />;
  }

  return (
    <section className={styles.section}>
      <Container>
        <Form onChangeData={handleChangeData} onActiveLoader={setIsLoading} />

        {data && (
          <table>
            <tr>
              <td>
                <th>#</th>
              </td>
              <td>
                <th>Name</th>
              </td>
              <td>
                <th>Country</th>
              </td>
              <td>
                <th>Alpha_two_code</th>
              </td>
              <td>
                <th>Domians</th>
              </td>
              <td>
                <th>Web pages</th>
              </td>
              <td>
                <th></th>
              </td>
            </tr>
            {data?.map((item, index) => (
              <TableItem item={item} index={index} />
            ))}
          </table>
        )}
      </Container>
    </section>
  );
};

export default HomePage;
