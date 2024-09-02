import { NavLink } from "react-router-dom";
import "./style.scss";

interface ILink {
  path: string;
  label: string;
  // render: any; // to-do: set type
  icon?: any; // to-do: set type
  children?: ILink[];
}

interface IProps {
  links: ILink[];
}

const Sidebar = (props: IProps) => {
  const { links } = props;
  return (
    <nav className="h-100 d-flex flex-column">
      {links.map(link => (
        <>
          <NavLink className="p-3" to={link.path} key={link.path}>
            {link.icon && <i className={`fa-${link.icon[0]} fa-${link.icon[1]}`} />}
            <span className="ms-3">{link.label}</span>
          </NavLink>
          {(link.children || []).map(child => (
            <NavLink className="p-3" to={link.path+child.path} key={child.path}>
              <span className="ms-5">{child.label}</span>
            </NavLink>
          ))}
        </>
      ))}
    </nav>
  );
}

export default Sidebar;