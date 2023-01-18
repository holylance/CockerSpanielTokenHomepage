import React from "react"
import {MediaBox} from "react-materialize"
import ImageAudit from "../images/audit1.png"

export default class Tokenomics extends React.Component {
    render() {
        return (
            <div>
                <h2>Audit</h2>
                <h4>Coinscope/Cyberscan</h4>
                <br />
                <MediaBox
                    id="MediaBox_0"
                    options={{
                        inDuration: 275,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200
                    }}
                    >
                    <img
                        alt=""
                        src={ImageAudit}
                        width="70%"
                    />
                </MediaBox>
            </div>
        )
    }
}
