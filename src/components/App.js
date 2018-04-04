import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Home from 'Presentational/Home'

injectGlobal`
  @font-face {
    font-family: "Mini-Sans-Medium";
    src: url("src/assets/fonts/MINI-Sans/mini_sans-medium-webfont.eot");
    src: url("src/assets/fonts/MINI-Sans/mini_sans-medium-webfont.woff") format("woff"),
         url("src/assets/fonts/MINI-Sans/mini_sans-medium-webfont.woff2") format("woff2");
  }
  @font-face {
    font-family: "Mini-Serif-Bold";
    src: url("src/assets/fonts/MINI-Serif/mini_serif-bold-webfont.eot");
    src: url("src/assets/fonts/MINI-Serif/mini_serif-bold-webfont.woff") format("woff"),
         url("src/assets/fonts/MINI-Serif/mini_serif-bold-webfont.woff2") format("woff2");
  }
  @font-face {
    font-family: "Mini-Serif-Regular";
    src: url("src/assets/fonts/MINI-Serif/mini_serif-regular-webfont.eot");
    src: url("src/assets/fonts/MINI-Serif/mini_serif-regular-webfont.woff") format("woff"),
         url("src/assets/fonts/MINI-Serif/mini_serif-regular-webfont.woff2") format("woff2");
  }
  @font-face {
    font-family: "Mini-Serif-Italic";
    src: url("src/assets/fonts/MINI-Serif/mini_serif-italic-webfont.eot");
    src: url("src/assets/fonts/MINI-Serif/mini_serif-italic-webfont.woff") format("woff"),
         url("src/assets/fonts/MINI-Serif/mini_serif-italic-webfont.woff2") format("woff2");
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
  }
`

const App = () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Fragment>
  </Router>
)

export default App
