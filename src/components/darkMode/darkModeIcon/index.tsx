import React from "react";
import Image from "next/image";
interface Props {
  theme: string | boolean | (() => void);
}
const DarkModeIcon = ({ theme }: Props) => {
  return (
    <div>
      {theme === "light" ? (
        <Image
          alt={theme}
          src="/crescent-moon-light.svg"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/crescent-moon-dark.svg"
          alt={"dark"}
          width={24}
          height={24}
        />
      )}
    </div>
  );
};

export default DarkModeIcon;
