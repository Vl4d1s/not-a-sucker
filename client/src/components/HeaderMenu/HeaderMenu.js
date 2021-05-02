import React, { Component } from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import DropDownUser from "./DropDownUser/DropDownUser";
import Negishut from "./DropDownUser/Negishut";

class HeaderMenu extends Component {
  render() {
    const { items } = this.props;

    let menuItems = [];
    for (let i = 0; i < items.length; i++) {
      if (this.props.items[i].length !== 2) {
        console.error('HeaderMenu: items format should be ["name", "route"]');
        break;
      }
      const name = items[i][0];
      const route = items[i][1];
      menuItems.push(
        <Menu.Item key={"item-" + i} index={i} as={Link} to={route}>
          {name}
        </Menu.Item>
      );
    }

    return (
      <Menu size="small" secondary>
        <Menu.Menu position="right">
          {menuItems}
          <Menu.Item>
            {/* <DropDownUser /> */}
            <Negishut/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(HeaderMenu);
