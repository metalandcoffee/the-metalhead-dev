import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Metalhead Dev"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title=""
          keywords={[`metalhead`, `dev`, `tech`, `blog`, `metal`, `and`, `coffee`]}
        />
        <img style={{ margin: 0 }} src="./metalhead-dev-toon.png" alt="Animated portrait of The Metalhead Dev" />
        <h1 style={{ fontFamily: `'Raleway',sans-serif`, textAlign: `center` }}>
          Coming soon...{" "}
          <span role="img" aria-label="metal horns emoji">
            🤘🏾
          </span>
        </h1>
      </Layout>
    )
  }
}

export default IndexPage
