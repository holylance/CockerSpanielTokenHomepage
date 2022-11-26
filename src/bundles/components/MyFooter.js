import React from 'react'
import {Footer} from 'react-materialize'
import ImageGitHubMark from '../images/GitHubMarkLight32px.png'
import ImageLinkedInMark from '../images/InWhite34pxR.png'
import '../stylesheets/specific/my_footer.scss'

export default class MyFooter extends React.Component {
  render() {
    return (
      <div className='my_footer'>
        <Footer copyrights='&copy 2023 Copyright'
          moreLinks={
            <div className='grey-text text-lighten-4 right' href='#!'>This webpage can provide English and Korean.</div>
          }
          links={
            <ul>
              <li><img src={ImageGitHubMark} /></li>
              <li><img src={ImageLinkedInMark} /></li>
            </ul>
          }
          className='example'
        >
            <h5 className='white-text'>Made by Hyung-Jun Yoo</h5>
            <p className='grey-text text-lighten-4'>with ReactJS</p>
        </Footer>
      </div>
    );
  }
}
