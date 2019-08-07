import React, { Component } from 'react'
import {Button} from 'antd'
import './home.less'
export default class Home extends Component {
    render() {
        return (
            <div >
              <Button>button</Button>
              <div className='wrap'>
                  <div className='inner'></div>
              </div>
            </div>
        )
    }
}
