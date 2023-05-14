import { FC } from "react";
import styles from "./TableItem.module.scss";

type Props = {
  item: any;
  index: number;
};

const TableItem: FC<Props> = ({ item, index }) => {
  const { alpha_two_code, country, domains, web_pages, name } = item;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{country}</td>
      <td>{alpha_two_code}</td>
      <td>{domains}</td>
      <td>
        {web_pages?.map((link: string) => (
          <a href="link">{link}</a>
        ))}
      </td>
    </tr>
  );
};

export default TableItem;
