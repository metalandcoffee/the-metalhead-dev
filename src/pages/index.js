import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentPosts from "../components/recentPosts"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "The Metalhead Dev"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`metalhead`, `dev`, `tech`, `blog`, `metal`, `and`, `coffee`]}
        />
        <header>
          <Image
            alt="Animated portrait of The Metalhead Dev"
            fluid={this.props.data.webToon.childImageSharp.fluid}
            style={{ display: `block`, margin: `0 auto` }}
          />
          <h1 style={{ textAlign: `center` }}>
          WordPress Queen & Metalhead.{" "}
            <span role="img" aria-label="metal horns emoji">
              🤘🏾
            </span>
          </h1>
        </header>
        <RecentPosts />
      </Layout>
    )
  }
}

export default IndexPage

export const indexImageQuery = graphql`
  query indexImageQuery {
    webToon: file(absolutePath: { regex: "/metalhead-dev-toon.png/" }) {
      childImageSharp {
        fluid(maxWidth: 630) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


