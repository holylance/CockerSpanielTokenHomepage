import React from 'react'
import {MediaBox} from 'react-materialize'
import ImageCircleKor from '../images/tokenCircleKor.png'
import ImageCircleEng from '../images/tokenCircleEng.png'

export default class Usage extends React.Component {
    render() {
      return (
        <div className='usage'>
            <h2>Usage</h2>
            <br/>
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
                    src={ImageCircleKor}
                    width="650"
                />
            </MediaBox>
            <br />
            <MediaBox
                id="MediaBox_1"
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
                    src={ImageCircleEng}
                    width="650"
                />
            </MediaBox>
            <br />
        </div>
      );
    }
}
