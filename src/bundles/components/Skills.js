import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import {Parallax} from 'react-parallax'
import ImageDeveloper from '../images/developerDesk.jpg'
import '../stylesheets/specific/skills.scss'

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills">
        <br/>
        <Parallax bgImage={ImageDeveloper} strength={400} bgWidth='100%' bgHeight='100%'>
          <div className='parallax-container'>
            <div className='parallax-contents'>
              <h1>Technical Skills</h1>
            </div>
          </div>
        </Parallax>
        <br />
        <Collapsible accordion defaultActiveKey={0}>
          <CollapsibleItem header='Strong' icon='check' data-tip='Click me please!'>
            {this.props.strong}
          </CollapsibleItem>
          <CollapsibleItem header='Knowledgeable' icon='child_care' data-tip='Click me please!'>
            {this.props.knowledgeable}
          </CollapsibleItem>
        </Collapsible>
        <ReactTooltip place='left' type='warning' effect='solid'/>
      </div>
    );
  }
}

Skills.defaultProps = {
  strong: 'ReactJS, React-router, Redux, JavaScript, npm, yarn, CSS, SASS, HTML, Restful Api, Json, Git, GitHub, Bitbucket, Ubuntu',
  knowledgeable: 'Android, Kotlin, Redis, AWS, Ruby on Rails'
}

Skills.propTypes = {
  strong: PropTypes.string,
  knowledgeable: PropTypes.string
}
