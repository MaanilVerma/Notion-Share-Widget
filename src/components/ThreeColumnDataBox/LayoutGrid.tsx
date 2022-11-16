import React from "react";
import clsx from "clsx";

import styles from "./LayoutGrid.module.scss";

type Props = {
  icon: string;
  title: string;
  description: string;
  actionButton: any;
  className?: string;
};

const LayoutGrid: React.FC<Props> = ({
  icon,
  title,
  description,
  actionButton,
  className,
}) => {
  return (
    <div
      className={clsx(styles["layout-grid"], {
        [styles[`layout-grid-${className}`]]: className,
      })}
      data-testid="layoutGrid"
    >
      <img
        className={styles["icon"]}
        src={icon}
        alt={title}
        data-testid="icon"
      />
      <div className={styles["info-container"]} data-testid="infoContainer">
        <div className={styles["title"]} data-testid="title">
          {title}
        </div>
        <div className={styles["description"]} data-testid="description">
          {description}
        </div>
      </div>
      {actionButton}
    </div>
  );
};

export { LayoutGrid };
