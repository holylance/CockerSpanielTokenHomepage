import React from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import {Row, Col, Card, CardTitle} from "react-materialize"
import ImageGitHubMark from "../images/GitHubLogo.png"
import ImageLinkedInMark from "../images/LinkedInLogo.png"
import ImageTwitterMark from "../images/twitterLogo.png"
import ImageYoutubeMark from "../images/youtubeLogo.png"
import ImageWhitePaper from "../images/GitBookLogo.png"
import "../stylesheets/specific/link_list.scss"

export default class LinkList extends React.Component {
    render() {
        return (
            <div>
                <h2>My Links</h2>
                <h4>Sites</h4>
                <div className="link_list">
                <Row>
                    {this.props.site_links.map((site_link, i) => {
                        return (
                            <Col key={i} m={4} s={12}>
                                <Card
                                    header={<CardTitle image={site_link.image}></CardTitle>}
                                    actions={[
                                        <a key={i} target="_blank" href={site_link.link} data-tip="Click me!">
                                            This is the link.
                                        </a>
                                    ]}
                                >
                                    <h5>{site_link.site_name}</h5>
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
            site_name: "Github",
            link: "https://github.com/holylance",
            image: ImageGitHubMark
        },
        {
            site_name: "LinkedIn",
            link: "https://www.linkedin.com/in/holylance82",
            image: ImageLinkedInMark
        },
        {
            site_name: "Twitter",
            link: "https://twitter.com/CockerSpanielL2",
            image: ImageTwitterMark
        },
        {
            site_name: "Youtube",
            link: "https://www.youtube.com/channel/UCu7TdPmDF93U5CqfzxyRPCw",
            image: ImageYoutubeMark
        },
        {
            site_name: "WhitePaper",
            link: "https://lunapapa.gitbook.io/cocker-spaniel-token/",
            image: ImageWhitePaper
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
