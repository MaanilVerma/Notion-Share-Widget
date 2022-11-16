import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type Props = {
  type: string;
  className?: string;
  children: React.ReactNode;
};

export type Ref = HTMLButtonElement;

const Button: React.FC<Props> = React.forwardRef<Ref, Props>(
  ({ type, className, children, ...restProps }, ref) => {
    return (
      <button
        className={clsx(styles.button, {
          [styles["primary-button"]]: type === "primary",
          [styles["secondary-button"]]: type === "secondary",
          [styles["tag-button"]]: type === "tag",
        })}
        {...restProps}
        ref={ref}
        data-testid="button"
      >
        {children}
      </button>
    );
  }
);

export { Button };
