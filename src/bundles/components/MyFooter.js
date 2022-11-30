import React from 'react'
import {Footer} from 'react-materialize'
import ImageGitHubMark from '../images/GitHubMarkLight32px.png'
import ImageLinkedInMark from '../images/InWhite34pxR.png'
import ImageTwitterMark from '../images/twitterMarkLight32.png'
import ImageYoutubeMark from '../images/youtubeMarkKight32.png'
import '../stylesheets/specific/my_footer.scss'

export default class MyFooter extends React.Component {
  render() {
    return (
      <div className='my_footer'>
        <Footer copyrights='&copy 2023 Copyright'
          moreLinks={
            <div className='grey-text text-lighten-4 right' href='#!'>This webpage provides English only.</div>
          }
          links={
            <ul>
              <li><img src={ImageYoutubeMark} /></li>
              <li><img src={ImageTwitterMark} /></li>
              <li><img src={ImageLinkedInMark} /></li>  
              <li><img src={ImageGitHubMark} /></li>
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
