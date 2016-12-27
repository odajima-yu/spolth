import React, { PropTypes, Component } from 'react';

import { Input, Menu, Segment } from 'semantic-ui-react'

export default class HeaderMenu extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <Menu pointing>
          <Menu.Item href='/'>
            メニュー１
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
