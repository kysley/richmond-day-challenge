import styled from 'styled-components'

const ListingWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 4em;

  @media(max-width: 52em) {
    width: 80%;
  }
`

const ListingBase = styled.span`
  font-size: 1rem;
  color: #000;
  text-align: center;
  display: block;
  margin-bottom: 0.5em;
`

const ListingTitle = styled.a`
  text-decoration: underline;
  font-size: 1rem;
  color: #000;
  text-align: left;
  display: block;
  width: 60%;
  padding-left: 20%;
  font-family: "Mini-Sans-Medium";
`

const ListingPrice = ListingBase.extend`
  text-align: left;
  font-weight: bold;
  display: inline-block;
  width: 30%;
  padding-left: 20%;
  font-family: "Mini-Serif-Italic";
`

const ListingImage = styled.img`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 1em;
  background-repeat: no-repeat;
  background-size: contain;
  border: none !important;
  outline: none !important;
  display: block;

  @media(max-width: 52em) {
    width: 100%;
  }
`

const ListingType = ListingBase.extend`
  width: 30%;
  padding-left: 20%;
  text-align: left;
  display: inline-block;
  font-family: "Mini-Serif-Bold";
`

const ListingValue = ListingBase.extend`
  display: inline;
  font-family: "Mini-Serif-Regular";
`

const ListingValueSpaced = ListingBase.extend`
  display: inline-block;
  margin-bottom: 1em;
`

const ListingButton = styled.button`
  text-transform: uppercase;
  background: #000;
  color: #fff;
  width: 70%;
  display: block;
  margin: 0 auto;
  margin-top: 1em;
  padding: 0.75em 0.5em 0.75em 0.5em;
  border: 0;
  outline: 0;
  cursor: not-allowed;
  font-family: "Mini-Sans-Medium";
`

export {
  ListingWrapper,
  ListingTitle,
  ListingPrice,
  ListingImage,
  ListingType,
  ListingValue,
  ListingValueSpaced,
  ListingButton,
}
