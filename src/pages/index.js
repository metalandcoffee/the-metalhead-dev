import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Metalhead Dev"

    return (
      <Layout location={this.props.location} title={siteTitle} images={this.props.data}>
        <SEO
          title=""
          keywords={[`metalhead`, `dev`, `tech`, `blog`, `metal`, `and`, `coffee`]}
        />
        {/* <img style={{ margin: 0 }} src="./metalhead-dev-toon.png" alt="Animated portrait of The Metalhead Dev" /> */}
        <Image
          alt="Animated portrait of The Metalhead Dev"
          sizes={this.props.data.webToon.childImageSharp.sizes}
          style={{ display: `block`, margin: `0 auto` }}
        />
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

export const imageQuery = graphql`
  query indexImageQuery {
    webToon: file(absolutePath: { regex: "/metalhead-dev-toon.png/" }) {
      childImageSharp {
        sizes(maxWidth: 630) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    skull: file(absolutePath: { regex: "/metalhead-dev-skull-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    textLogo: file(absolutePath: { regex: "/metalhead-dev-text-logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


