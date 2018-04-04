import styled from 'styled-components'

const GallaryImage = styled.img`
  height: auto;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  border: none !important;
  outline: none !important;
`

const GallaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 57%;
  height: 100%;
  justify-content: center;
  margin-left: ${props => props.Left ? '40%' : '5%'};

  @media(max-width: 52em) {
    width: 80%;
    margin-top: 0;
    margin: 0 auto;
  }
`

const GallaryTitle = styled.span`
  text-transform: uppercase;
  margin-bottom: 0.5em;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Mini-Sans-Medium";

  @media(max-width: 52em) {
    font-size: 2rem;
    text-align: center;
    margin-top: 1em;
  }
`

const GallaryDesc = styled.span`
  margin-bottom: 2em;
  font-family: "Mini-Serif-Regular";

  @media(max-width: 52em) {
    text-align: justify;
  }
`

const GallaryButton = styled.button`
  text-transform: uppercase;
  background: #000;
  color: #fff;
  width: 10em;
  padding: 0.75em 0.5em 0.75em 0.5em;
  margin-bottom: 1em;
  border: 0;
  outline: 0;
  cursor: not-allowed;
  font-family: "Mini-Sans-Medium";

  @media(max-width: 52em) {
    margin: 0 auto;
    margin-bottom: 1em;
    width: 80%;
  }
  &:last-of-type {
    margin-bottom: 2em;
  }
`

export {
  GallaryImage,
  GallaryContainer,
  GallaryTitle,
  GallaryDesc,
  GallaryButton,
}
