import { FC } from "react";

export interface CustomProps {
  value: string;
}

const CustomItem: FC<CustomProps> = ({ value }) => {
  return (
    <li className="nav-item dropdown dropdown-mega">
      <a href="#" className="nav-link dropdown-item">
        {value}
      </a>
    </li>
  );
};

export default CustomItem;
