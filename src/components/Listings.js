import React from 'react'
import { Box } from 'grid-styled'

import {
  ListingWrapper,
  ListingTitle,
  ListingPrice,
  ListingImage,
  ListingType,
  ListingValue,
  ListingValueSpaced,
  ListingButton,
} from 'Styled/Listings'

const Listings = ({ listings }) => (
  listings.map(listing => (
    <Box w={[1, 1, 1, 1 / 2]} key={listing.Kilometres}>
      <ListingWrapper>
        <ListingTitle>{listing.Name}</ListingTitle>
        <ListingPrice>{listing.Price}</ListingPrice>
        <ListingImage src={listing.Photo} />

        <ListingType>Retailer:</ListingType>
        <ListingValue>{listing.Retailer}</ListingValue>

        <ListingType>Kilometres:</ListingType>
        <ListingValue>{listing.Kilometres}</ListingValue>

        <ListingType>Transmission:</ListingType>
        <ListingValue>{listing.Transmission}</ListingValue>

        <ListingType>Exterior:</ListingType>
        <ListingValueSpaced>{listing.Exterior}</ListingValueSpaced>

        <ListingType>Interior:</ListingType>
        <ListingValueSpaced>{listing.Interior}</ListingValueSpaced>

        <ListingType>VIN:</ListingType>
        <ListingValue>{listing.VIN}</ListingValue>

        <ListingType>DriveTrain:</ListingType>
        <ListingValue>{listing.DriveTrain}</ListingValue>

        <ListingButton>View Details</ListingButton>
        <ListingButton>Book a Test Drive</ListingButton>
      </ListingWrapper>
    </Box>
  ))
)

export default Listings
