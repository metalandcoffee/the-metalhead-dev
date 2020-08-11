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
      <Layout location={this.props.location} title={siteTitle}>
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
        <h1 style={{ textAlign: `center` }}>
        WordPress Queen & Metalhead.{" "}
          <span role="img" aria-label="metal horns emoji">
            🤘🏾
          </span>
        </h1>
        <p>My blog is coming to you soon. Excited to share knowledge with you!</p>
      </Layout>
    )
  }
}

export default IndexPage

export const indexImageQuery = graphql`
  query indexImageQuery {
    webToon: file(absolutePath: { regex: "/metalhead-dev-toon.png/" }) {
      childImageSharp {
        sizes(maxWidth: 630) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`


