import React, {Component} from 'react'
import {Segment, Icon} from 'semantic-ui-react'

import './css/footer.css'

class Footer extends Component {
  constructor(props) {
    super(props);
    const style = `
      position: 'absolute';
      bottom: 0;
    `
  }
  render() {
    return(
     <Segment className='footer right aligned'>
        <p><Icon name='copyright'/> 2017</p>
     </Segment>
    )
  }
}

export default Footer