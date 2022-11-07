import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import {Row, Col, Card, CardTitle} from 'react-materialize'
import ImageGitHubMark from '../images/GitHubLogo.png'
import ImageLinkedInMark from '../images/LinkedInLogo.png'
import ImageCodeCademyMark from '../images/codecademyLogo.png'
import '../stylesheets/specific/link_list.scss'

export default class LinkList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>My Links</h2>
        <h4>Sites</h4>
        <div className='link_list'>
          <Row>
            {this.props.site_links.map((site_link, i) => {
              return (
                <Col key={i} m={4} s={12}>
                  <Card
                    header={<CardTitle image={site_link.image}></CardTitle>}
                    actions={[
                      <a key={i} target='_blank' href={site_link.link} data-tip='Click me!'>
                        This is the link.
                      </a>
                    ]}
                  >
                    <h5>{site_link.site_name}</h5>
                    <p>{site_link.content}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <ReactTooltip/>
      </div>
    );
  }
}

LinkList.defaultProps = {
  site_links: [
    {
      site_name: 'Github',
      content: 'I have some project in Github',
      link: 'https://github.com/holylance',
      image: ImageGitHubMark
    },
    {
      site_name: 'LinkedIn',
      content: 'I have a LinkedIn account',
      link: 'https://www.linkedin.com/in/holylance82',
      image: ImageLinkedInMark
    },
    {
      site_name: 'Codecademy',
      content: 'I have learnt several front-end skills',
      link: 'https://www.codecademy.com/holylance82',
      image: ImageCodeCademyMark
    }
  ]
}

LinkList.propTypes = {
  site_links: PropTypes.arrayOf(
    PropTypes.shape({
      site_name: PropTypes.string,
      link: PropTypes.string
    })
  )
}
