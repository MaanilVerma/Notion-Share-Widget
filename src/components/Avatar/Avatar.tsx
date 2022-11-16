import React from "react";
import clsx from "clsx";

import styles from "./Avatar.module.scss";

type Props = {
  type: string;
  className?: string;
  name: string;
  imageUrl: string;
};

const Avatar: React.FC<Props> = ({
  type,
  className,
  name,
  imageUrl,
  ...restProps
}) => {
  return (
    <div
      className={clsx(styles.avatar, {
        [styles["circle-avatar"]]: type === "person",
        [styles["square-avatar"]]: type === "group",
        [styles["circle-avatar"]]: type === "workspace",
        [styles["large-avatar"]]: type === "large",
      })}
      data-testid="Avatar"
    >
      {" "}
      {imageUrl ? (
        <img
          className={styles["avatar-image"]}
          src={imageUrl}
          alt={name}
          height="100%"
          width="100%"
          {...restProps}
          data-testid="AvatarImage"
        />
      ) : (
        name.charAt(0)
      )}
    </div>
  );
};

export { Avatar };
