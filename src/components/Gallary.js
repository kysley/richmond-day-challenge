import React, { Fragment } from 'react'
import { Flex, Box } from 'grid-styled'

import Countryman from '../assets/img/mini-countryman.png'
import Clubman from '../assets/img/mini-clubman.png'

import { GallaryImage, GallaryContainer, GallaryTitle, GallaryDesc, GallaryButton } from 'Styled/Gallary'

const Gallary = () => (
  <Fragment>
    <Flex flexWrap="wrap">
      <Box w={[1, 1, 1 / 2]} order={[1, 1, 2]}>
        <GallaryImage src={Countryman} />
      </Box>
      <Box w={[1, 1, 1 / 2]} order={[2, 2, 1]}>
        <GallaryContainer Left>
          <GallaryTitle>The Mini Countryman ALL4</GallaryTitle>
          <GallaryDesc>
            The rugged adventurer for living life to the fullest.
            Equipped with ample interior space and an array of practical features,
            it’s designed to both inspire and accommodate your next great story.
          </GallaryDesc>
          <GallaryButton>Learn More</GallaryButton>
          <GallaryButton>Build & Price</GallaryButton>
        </GallaryContainer>
      </Box>
    </Flex>

    <Flex flexWrap="wrap">
      <Box w={[1, 1, 1 / 2]}>
        <GallaryImage src={Clubman} />
      </Box>
      <Box w={[1, 1, 1 / 2]}>
        <GallaryContainer>
          <GallaryTitle>The Mini Clubman ALL4</GallaryTitle>
          <GallaryDesc>
            The most refined MINI ever made, featuring an exquisitely-crafted
            cabin outfitted with top-shelf finishes and cutting-edge technology.
            Spacious and sophisticated; premium yet practical; it’s the MINI for every occasion.
          </GallaryDesc>
          <GallaryButton>Learn More</GallaryButton>
          <GallaryButton>Build & Price</GallaryButton>
        </GallaryContainer>
      </Box>
    </Flex>
  </Fragment>
)

export default Gallary
