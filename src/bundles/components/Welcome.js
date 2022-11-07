import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {Parallax} from 'react-parallax'
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
              <h1>Welcome Hyung-Jun's Webpage</h1>
            </div>
          </div>
        </Parallax>
        <br />
        <h4>{this.props.mainTitle}</h4>
        <Collapsible popout defaultActiveKey={0}>
          <CollapsibleItem header='Front-end:' icon='computer' data-tip='Click me please!'>
            {this.props.frontEnd}
          </CollapsibleItem>
          <CollapsibleItem header='Modules:' icon='build' data-tip='Click me please!'>
            {this.props.modules}
          </CollapsibleItem>
          <CollapsibleItem header='Router:' icon='laptop_mac' data-tip='Click me please!'>
            {this.props.router}
          </CollapsibleItem>
          <CollapsibleItem header='Server:' icon='backup' data-tip='Click me please!'>
            {this.props.server}
          </CollapsibleItem>
          <CollapsibleItem header='TDD:' icon='layers' data-tip='Click me please!'>
            {this.props.tdd}
          </CollapsibleItem>
        </Collapsible>
        <br />
        <Collapsible data-tip='Click me please!'>
          <CollapsibleItem header={this.props.planTitle} icon='library_add'>
            {this.props.plans}
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
  mainTitle: 'This webpage is made by these libraries and tools.',
  frontEnd: 'ReactJS, Materialize-sass, Webpacker',
  modules: 'React-tooltip, React-parallax, React-materialize',
  router: 'React-router',
  server: 'Google Cloud Platform',
  tdd: 'Jest, Enzyme',
  planTitle: 'I will add these libraries and tools for these webpage.',
  plans: '- Redux',
  github_link: 'http://35.205.24.222:3000'
}

Welcome.propTypes = {
  mainTitle: PropTypes.string,
  frontEnd: PropTypes.string,
  backEnd: PropTypes.string,
  dataBase: PropTypes.string,
  tdd: PropTypes.string,
  planTitle: PropTypes.string,
  plans: PropTypes.string
}
