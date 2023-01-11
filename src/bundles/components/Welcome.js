import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {Parallax} from 'react-parallax'
import ImageGitHubMark from '../images/GitHubMark.png'
import ImageCSL from '../images/cockerSpanielWelcomeEng.png'
import '../stylesheets/specific/welcome.scss'

export default class Welcome extends React.Component {
  	render() {
		return (
	  		<div className='welcome'>
				<br/>
				<Parallax bgImage={ImageCSL} strength={400} bgWidth='100%' bgHeight='100%'>
		  			<div className='parallax-container'>
						<div className='parallax-contents'>
			  				<h1>Welcome Cocker Spaniel Token Webpage</h1>
						</div>
		  			</div>
				</Parallax>
				<br />
				<h4>{this.props.mainTitle}</h4>
				<Collapsible popout defaultActiveKey={0}>
		  			<CollapsibleItem header='Token name:' data-tip='Click me please!'>
						{this.props.tokenName}
		  			</CollapsibleItem>
		  			<CollapsibleItem header='Ticker:' data-tip='Click me please!'>
						{this.props.ticker}
		  			</CollapsibleItem>
		  			<CollapsibleItem header='TestNet:' data-tip='Click me please!'>
						{this.props.cslTokenTestNet}
		  			</CollapsibleItem>
		  			<CollapsibleItem header='MainNet:' data-tip='Click me please!'>
						{this.props.cslTokenMainNet}
		  			</CollapsibleItem>
		  			<CollapsibleItem header='Max Supply:' data-tip='Click me please!'>
						{this.props.maxSupply}
		  			</CollapsibleItem>
		  			<CollapsibleItem header='Cocker Spaniel Talk App:' data-tip='Click me please!'>
						{this.props.cslTalkApp}
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
	mainTitle: 'This webpage is made for CSL token and dApps.',
	cslTokenTestNet: 'https://testnet.bscscan.com/token/0x9F36c365ba7F247A84c65716Ba8d7FB957AfD8Ad',
	cslTokenMainNet: 'To be continue',
	tokenName: 'Cocker Spaniel',
	ticker: 'CSL',
	maxSupply: '1B / CSL cannot be minted. The total supply is fixed at 1B.',
	cslTalkApp: 'To be continue',
	github_link: 'https://github.com/holylance/LunaPapaHomepage'
}

Welcome.propTypes = {
	mainTitle: PropTypes.string,
	cslTokenTestNet: PropTypes.string,
	cslTokenMainNet: PropTypes.string,
	tokenName: PropTypes.string,
	ticker: PropTypes.string,
	maxSupply: PropTypes.string,
	cslTalkApp: PropTypes.string,
	github_link: PropTypes.string
}
