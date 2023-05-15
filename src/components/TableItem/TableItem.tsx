import cn from "clsx";
import { FC } from "react";
import CheckBox from "../CheckBox/CheckBox";
import { Item } from "../../types";

type Props = {
  item: Item;
  index: number;
  onAddToFavorites: (name: Item["name"]) => void;
  favoriteItems: [] | string[];
};

const TableItem: FC<Props> = ({
  item,
  index,
  favoriteItems,
  onAddToFavorites,
}) => {
  const { alpha_two_code, country, domains, web_pages, name } = item;
  //@ts-ignore
  const isChecked = favoriteItems.includes(name);

  return (
    <div className={"row"}>
      <p className={cn("first", "column")}>{index + 1}</p>
      <p className={cn("second", "column")}>{name}</p>
      <p className={cn("third", "column")}>{country}</p>
      <p className={cn("fourth", "column")}>{alpha_two_code}</p>
      <p className={cn("fifth", "column")}>{domains}</p>
      <p className={cn("sixth", "column")}>
        {web_pages?.map((link: string) => (
          <a href={link}>Link</a>
        ))}
      </p>
      <p className={"seventhCol"}>
        <CheckBox onChange={() => onAddToFavorites(name)} checked={isChecked} />
      </p>
    </div>
  );
};

export default TableItem;
