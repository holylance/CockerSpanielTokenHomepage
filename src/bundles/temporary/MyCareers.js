import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/specific/my_careers.scss'

export default class MyCareers extends React.Component {
  constructor(props) {
    super(props);
    this.renderDetails = this.renderDetails.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.state = {
      IsOver: false
    }
  }

  renderDetails(details) {
    let result = details.map((detail, i) => {
      return (
        <div key={i}>{detail}</div>
      );
    });
    return result;
  }

  mouseOver(index) {
    let IsOver = this.state.IsOver;
    if(!IsOver) {
      IsOver = true;
      this.setState({IsOver});

      let div = document.getElementById(index);
      div.style.display = 'inline-block';
    }
  }

  mouseLeave(index) {
    let IsOver = this.state.IsOver;
    if(IsOver) {
      IsOver = false;
      this.setState({IsOver});

      let div = document.getElementById(index);
      div.style.display = 'none';
    }
  }

  render() {
    return (
      <div className='my_careers'>
        <h2>My Careers</h2>
        <h4>In Berlin</h4>
        {this.props.careers_in_berlin.map((career, i) => {
          let index = 'detail_berlin' + i;
          return (
            <div 
              className={'row'}
              key={i}
              onMouseOver={() => this.mouseOver(index)}
              onMouseLeave={() => this.mouseLeave(index)}
            >
              <div className={'col s4 box z-depth-3'}>
                <div>{career.position}</div>
                <div>{career.company}</div>
                <div>{career.region}</div>
                <div>{career.period}</div>
                <div><a target='_blank' href={career.link}>Go to the homepage</a></div>
              </div>
              <div className={'col s8'}>
                <div id={index} style={{display: 'none'}} className={'detail_box z-depth-4'}>
                  {this.renderDetails(career.details)}
                </div>
              </div>
              <br />
            </div>
          );
        })}
        <h4>In Korea</h4>
        {this.props.careers_in_korea.map((career, i) => {
          let index = 'detail_korea' + i;
          return (
            <div
              className={'row'}
              key={i}
              onMouseOver={() => this.mouseOver(index)}
              onMouseLeave={() => this.mouseLeave(index)}
            >
              <div className={'col s4 box z-depth-3'}>
                <div>{career.position}</div>
                <div>{career.company}</div>
                <div>{career.region}</div>
                <div>{career.period}</div>
                <div>
                  {career.link === '' ? '' : <a target='_blank' href={career.link}>Go to the homepage</a>}
                </div>
              </div>
              <div className={'col s8'}>
                <div id={index} style={{display: 'none'}} className={'detail_box z-depth-5'}>
                  {this.renderDetails(career.details)}
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

MyCareers.defaultProps = {
  careers_in_berlin: [
    {
      position: 'Full-stack Developer',
      company: 'DKB Code Factory Gmbh',
      region: 'Berlin Area, Germany',
      period: '10.2018 ~ now',
      link: 'https://www.dkbcodefactory.com/',
      details: [
        'Spring Boot',
        '- Kotlin',
        'Redis'
      ]
    },
    {
      position: 'Full-stack Developer',
      company: 'Cringle GmbH',
      region: 'Berlin Area, Germany',
      period: '06.2017 ~ 10.2018',
      link: 'https://cringle.net/',
      details: [
        'Ruby on Rails',
        '- javascript, html5, css3, Jquery, Ajax',
        '- unicorn, sinatra, rpush, sidekiq, capistrano, searchlight',
        '- bugsnag, byebug, rspec, coverage',
        'Postgresql'
      ]
    }
  ],
  careers_in_korea: [
    {
      position: 'Senior Developer',
      company: 'YD Online',
      region: 'Seoul Korea',
      period: '08.2016 ~ 11.2016',
      link: 'http://www.ydonline.co.kr/?p=2395',
      details: [
        '- This game is released in 2015 and Mobile TRPG Game.',
        '- Developed Android java application with Unity3D.',
        '- Developed with PHP and Nginx. It’s a mobile game.',
        '- Worked on Mysql.'
      ]
    },
    {
      position: 'Lead Developer',
      company: 'NHN Entertainment Corp',
      region: 'Bundang-gu, Seongnam-si, Gyeonggi-do, Korea',
      period: '12.2014 ~ 07.2016',
      link: 'http://www.nhnent.com/en/index.nhn',
      details: [
        '- Mobile Puzzle Game.',
        '- Developed with React JS for a game homepage.',
        '- Developed Android java application with Unity3D.',
        '- Developed with C++ Server. It’s a Mobile game.',
        '- Worked on Mysql.'
      ]
    },
    {
      position: 'Lead Developer',
      company: 'Wemade Entertainment Co., Ltd.',
      region: 'Bundang-gu, Seongnam-si, Gyeonggi-do, Korea',
      period: '04.2013 ~ 07.2014',
      link: 'http://corp.wemade.com/main/main.asp',
      details: [
        '- Casual mobile game, ‘Monkey Magic’.',
        '- Developed Android java application with Unity3D.',
        '- Worked on MySQL.',
        '- Supervised a Junior server programmer.'
      ]
    },
    {
      position: 'Senior Developer',
      company: 'Nuri StarDucks',
      region: 'Seoul, Korea',
      period: '06.2012 ~ 04.2013',
      link: 'http://www.wildbuster.com/',
      details: [
        '- Built MMORPG online game, ‘Wild Buster’.',
        '- Worked the main programmer with a Junior server programmer',
        '- Developed with C++ IOCP server, ProudNet in Windows with supporting IDC.'
      ]
    },
    {
      position: 'Junior Developer',
      company: 'Neowiz Games Corp.',
      region: 'Bundang-gu, Seongnam-si, Gyeonggi-do, Korea',
      period: '07.2010 ~ 04.2012',
      link: 'http://www.neowizgames.com/index/main.do',
      details: [
        '- FPS Online Game ‘Aim one’.',
        '- Developed with C++ IOCP Server, Personal Network Library with supporting IDC.',
        '- Worked with a server system team in the same Company. DB System was Oracle.'
      ]
    },
    {
      position: 'Junior Developer',
      company: 'Barunson Games Corp.',
      region: 'Seoul, Korea',
      period: '09.2008 ~ 06.2010',
      link: 'http://www.barunsonena.com/kor/index.php',
      details: [
        '- MMO RPG online game project ‘Last Chaos’.',
        '- Developed with C++ Server and MySQL in Linux.',
        '- Maintained main servers and global servers, (10,000 to 30,000 users in America and EU)'
      ]
    },
    {
      position: 'Entry Developer',
      company: 'ISoft',
      region: 'Seoul, Korea',
      period: '12.2007 ~ 09.2008',
      link: '',
      details: [
        '- Maintained server for an online game, ‘Billiard King’, developed with C++ IOCP Server and MySQL in Windows.'
      ]
    }
  ]
}

const career_form = PropTypes.arrayOf(
  PropTypes.shape({
    position: PropTypes.string,
    company: PropTypes.string,
    region: PropTypes.string,
    period: PropTypes.string,
    link: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string)
  })
);

MyCareers.propTypes = {
  careers_in_berlin: career_form,
  careers_in_korea: career_form
}
