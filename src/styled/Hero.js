import styled from 'styled-components'

import Hero from '../assets/img/hero-image.png'
import Play from '../assets/img/play.png'

const HeroWrapper = styled.div`
  margin: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeroImg = styled.div`
  height: 80vh;
  width: 100%;
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: cover;
  border: none !important;
  outline: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 52em) {
    height: 40vh;
  }
`

const HeroPlay = styled.img`
  height: 4em;
  width: 4em;
  background-image: url(${Play});
  background-repeat: no-repeat;
  background-size: contain;
  border: none !important;
  outline: none !important;
  margin-bottom: 8em;
  cursor: pointer;
  transition: all 0.3s;

  @media(max-width: 52em) {
    margin-bottom: 0em;
  }

  &:hover {
    transform: scale(1.1);
  }
`

const HeroText = styled.span`
  color: #fff;
  margin: 0;
  text-transform: uppercase;
`

const hPrimary = HeroText.withComponent('h1')
const HeroPrimary = hPrimary.extend`
  margin-bottom: 0.5em;
  font-size: 3rem;
  text-align: center;
  font-family: "Mini-Sans-Medium";
`

const hSecondary = HeroText.withComponent('h2')
const HeroSecondary = hSecondary.extend`
  font-size: 1rem;
  font-family: "Mini-Serif-Bold"
`

const BannerText = styled.span`
  color: #000;
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`
const bPrimary = BannerText.withComponent('h3')
const BannerPrimary = bPrimary.extend`
  font-size: 3rem;
  font-family: "Mini-Sans-Medium";
`

const bSeconary = BannerText.withComponent('h4')
const BannerSecondary = bSeconary.extend`
  margin-top: 4em;
  font-size: 1rem;
  font-family: "Mini-Serif-Bold"
`

const HeroVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 70%;
  width: 100%;
  top: 0;
  left: 0;

  @media(max-width: 52em) {
    height: 50%;
  }

  @media(max-width: 40em) {
    #widget2 {
      width: 320px;
      height: 180px;
  }
`

export {
  HeroWrapper,
  HeroImg,
  HeroPlay,
  HeroPrimary,
  HeroSecondary,
  BannerPrimary,
  BannerSecondary,
  HeroVideo,
}
