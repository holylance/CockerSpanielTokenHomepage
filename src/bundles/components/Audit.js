import React from "react"
import ImageAudit from "../images/audit1.png"
import "../stylesheets/specific/audit.scss"

export default class Tokenomics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="audit">
                <h2>Audit</h2>
                <h4>Coinscope/Cyberscan</h4>
                <br />
                <div className="image">
                    <img
                        alt=""
                        src={ImageAudit}
                    />
                </div>
            </div>
        )
    }
}
