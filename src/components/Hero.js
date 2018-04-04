import React from 'react'
import Youtube from 'react-youtube'

import Play from '../assets/img/play.png'

import {
  HeroWrapper,
  HeroImg,
  HeroPlay,
  HeroPrimary,
  HeroSecondary,
  BannerPrimary,
  BannerSecondary,
  HeroVideo,
} from 'Styled/Hero'

class Hero extends React.Component {
  state = {
    play: false,
  }

  playVideo = () => {
    this.setState({ play: !this.state.play })
  }

  render() {
    const { play } = this.state
    return (
      <HeroWrapper>
        <HeroImg>
          <HeroSecondary>Watch and Learn.</HeroSecondary>
          <HeroPrimary>ALL4 Explained.</HeroPrimary>
          <HeroPlay src={Play} onClick={this.playVideo} />
        </HeroImg>
        <BannerSecondary>Take your Pick</BannerSecondary>
        <BannerPrimary>The Mini ALL4 Lineup.</BannerPrimary>
        {play &&
          <HeroVideo>
            <Youtube
              videoId="Ldjmb15Jsx0"
              height="360"
              width="640"
              onPause={this.playVideo}
              onEnd={this.playVideo}
            />
          </HeroVideo>
        }
      </HeroWrapper>
    )
  }
}

export default Hero
