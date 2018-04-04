import React, { Fragment } from 'react'
import { Flex } from 'grid-styled'

/* Preferred method of using local data files */
import data from '../data/testFix.js'

import Listings from 'Components/Listings'
import Hero from 'Components/Hero'
import Gallary from 'Components/Gallary'

class Home extends React.Component {
  state = {
    listings: null,
    properData: data,
  }

  componentDidMount() {
    fetch('http://localhost:8080/src/data/test.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ listings: data })
      })
  }

  render() {
    const { listings } = this.state
    return (
      <Fragment>
        <Hero />
        <Gallary />
        {listings !== null ?
          <Flex flexWrap="wrap">
            <Listings listings={listings} />
          </Flex>
        : null}
      </Fragment>
    )
  }
}

export default Home
