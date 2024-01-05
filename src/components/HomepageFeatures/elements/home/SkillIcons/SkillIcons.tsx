import React from "react";
import svgData from "./icons.json";

type iconData = {
  name: string;
  path: string;
};

export default function SkillIcons(): JSX.Element {
  const icons: iconData[] = svgData.icons;
  return (
    <div>
      {icons.map((icon) => (
        <svg
          stroke="white"
          fill="white"
          stroke-width="0"
          role="img"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{icon.name}</title>
          <path d={icon.path}></path>
        </svg>
      ))}
    </div>
  );
}
