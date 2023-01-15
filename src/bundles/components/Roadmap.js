import React from "react"
import "../stylesheets/specific/roadmap.scss"

export default class Roadmap extends React.Component {
    render() {
    	return (
      		<div className="roadmap">
        		<h2>Roadmap</h2>
        		<h4>Phase 1</h4>
                {this.props.phases.phase1.map((value) => {
                    return (<p> {value} </p>);
                })}

                <h4>Phase 2</h4>
                {this.props.phases.phase2.map((value) => {
                    return (<p> {value} </p>);
                })}

                <h4>Phase 3</h4>
                {this.props.phases.phase3.map((value) => {
                    return (<p> {value} </p>);
                })}

                <h4>Phase 4</h4>
                {this.props.phases.phase4.map((value) => {
                    return (<p> {value} </p>);
                })}
      		</div>
        );
  	}
}

Roadmap.defaultProps = {
    phases: {
        phase1: [
            "Wihtepaper (Done)",
            "Website Development (Done)",
            "Twitter (Done)",
            "Launch presale in the Pinksale",
            "Stealth Launch on BSC"
        ],
        phase2: [
            "Start airdrop in the Youtube live stream",
            "First Audit by the ContractChecker",
            "Open CCS Talk App in the Google Play"
        ],
        phase3: [
            "CMC and Coingecko listing",
            "NFT",
            "Main Audit by Certik"
        ],
        phase4: [
            "TBA"
        ]
    }
}
