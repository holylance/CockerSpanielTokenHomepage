import React from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import {Collapsible, CollapsibleItem} from "react-materialize"
import {Parallax} from "react-parallax"
import ImageDeveloper from "../images/developerDesk.jpg"
import "../stylesheets/specific/tokenomics.scss"

export default class Tokenomics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="tokenomics">
            <br/>
            <Parallax bgImage={ImageDeveloper} strength={400} bgWidth="100%" bgHeight="100%">
            <div className="parallax-container">
                <div className="parallax-contents">
                <h1>Tokenomics</h1>
                </div>
            </div>
            </Parallax>
            <br />
            <Collapsible accordion defaultActiveKey={0}>
            <CollapsibleItem header="Liquidity" data-tip="Click me please!">
                {this.props.Liquidity}
            </CollapsibleItem>
            <CollapsibleItem header="Presale tokens" data-tip="Click me please!">
                {this.props.PresaleTokens}
            </CollapsibleItem>
            <CollapsibleItem header="Team" data-tip="Click me please!">
                {this.props.Team}
            </CollapsibleItem>
            <CollapsibleItem header="Defense price" data-tip="Click me please!">
                {this.props.DefensePrice}
            </CollapsibleItem>
            <CollapsibleItem header="Maintenance" data-tip="Click me please!">
                {this.props.Maintenance}
            </CollapsibleItem>
            <CollapsibleItem header="Community pool" data-tip="Click me please!">
                {this.props.CommunityPool}
            </CollapsibleItem>
            <CollapsibleItem header="Airdrop" data-tip="Click me please!">
                {this.props.Airdrop}
            </CollapsibleItem>
            </Collapsible>
            <ReactTooltip place="left" type="warning" effect="solid"/>
        </div>
        );
    }
}

Tokenomics.defaultProps = {
    Liquidity: "100M / 10%",
    PresaleTokens: "100M / 10%",
    Team: "200M / 20%",
    DefensePrice: "200M / 20%",
    Maintenance: "100M / 10%",
    CommunityPool: "100M / 10%",
    Airdrop: "200M / 20%",
}

Tokenomics.propTypes = {
    Liquidity: PropTypes.string,
    PresaleTokens: PropTypes.string,
    Team: PropTypes.string,
    DefensePrice: PropTypes.string,
    Maintenance: PropTypes.string,
    CommunityPool: PropTypes.string,
    Airdrop: PropTypes.string,
}
