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
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
