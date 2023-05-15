import { FC } from "react";
import cn from "clsx";
import styles from "./Loader.module.scss";
import { Oval } from "react-loader-spinner";

type Props = {
  className: string;
};

const Loader: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.loader, className)}>
      <Oval
        height={80}
        width={80}
        color="red"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="red"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loader;
