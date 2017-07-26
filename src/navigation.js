import React, {Component} from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

class Navigation extends Component {
  render() {
    return(
      <nav>
        <Menu attached='top'>
          <Menu.Item header>Company</Menu.Item>
            <Menu.Item>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item>
              <Icon name='mail'/>
              Contact
            </Menu.Item>
            <Menu.Item>
              <Icon name='question'/>
              About
            </Menu.Item>
          <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search...' />
                <i className='search link icon' />
              </div>
              <div className='results'></div>
            </div>
            <Dropdown item icon='wrench' simple>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown.Menu>
                    <Dropdown.Item>Document</Dropdown.Item>
                    <Dropdown.Item>Image</Dropdown.Item>
                  </Dropdown.Menu>
                  <span className='text'>New</span>
                  <Icon name='dropdown' />
                </Dropdown.Item>
                <Dropdown.Item>Open</Dropdown.Item>
                <Dropdown.Item>Save...</Dropdown.Item>
                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Export</Dropdown.Header>
                <Dropdown.Item>Share</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <br/>
      </nav>
     )
  }
}

export default Navigation