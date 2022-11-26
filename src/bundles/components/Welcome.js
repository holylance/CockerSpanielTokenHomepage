import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {Parallax} from 'react-parallax'
import Icon from 'react-materialize'
import ImageGitHubMark from '../images/GitHubMark.png'
import ImageBerlin from '../images/berlin.jpg'
import '../stylesheets/specific/welcome.scss'

export default class Welcome extends React.Component {
  render() {
    return (
      <div className='welcome'>
        <br/>
        <Parallax bgImage={ImageBerlin} strength={400} bgWidth='100%' bgHeight='100%'>
          <div className='parallax-container'>
            <div className='parallax-contents'>
              <h1>Welcome Cocker-beagle Token Webpage</h1>
            </div>
          </div>
        </Parallax>
        <br />
        <h4>{this.props.mainTitle}</h4>
        <Collapsible popout defaultActiveKey={0}>
          <CollapsibleItem header='Cocker-Beagle Token:' data-tip='Click me please!'>
            {this.props.cobeToken}
          </CollapsibleItem>
          <CollapsibleItem header='Cobe Talk App:' data-tip='Click me please!'>
            {this.props.cobeTalkApp}
          </CollapsibleItem>
          <CollapsibleItem header='Cobe Lucky App:' data-tip='Click me please!'>
            {this.props.cobeLuckyApp}
          </CollapsibleItem>
        </Collapsible>
        <br />
        <div>
          <a target='_blank' rel='noopener noreferrer' href={this.props.github_link}>
            <img data-tip='Go to this project in Github!' src={ImageGitHubMark} alt="" />
          </a>
        </div>
        <ReactTooltip place='right' type='info' effect='float'/>
      </div>
    );
  }
}

Welcome.defaultProps = {
  mainTitle: 'This webpage is made for cobe token and dApps.',
  cobeToken: 'BSC token: https://testnet.bscscan.com/token/0xb72858cf2ad854ebaf0f14da997847fcd37a5294',
  cobeTalkApp: '준비중입니다',
  cobeLuckyApp: '준비중입니다',
  github_link: 'https://github.com/holylance/LunaPapaHomepage'
}

Welcome.propTypes = {
  mainTitle: PropTypes.string,
  cobeToken: PropTypes.string,
  cobeTalkApp: PropTypes.string,
  cobeLuckyApp: PropTypes.string,
  github_link: PropTypes.string
}
