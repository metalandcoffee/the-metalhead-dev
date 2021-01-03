import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              display: `grid`,
              gridTemplateColumns: `1fr 50px`,
              gridGap: `10px`,
              alignItems: `center`,
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <StaticQuery
              query={headerImageQuery}
              render={data => {
                return (
                  <>
                    <Image
                      alt="The Metalhead Dev Text Logo"
                      fluid={data.textLogo.childImageSharp.fluid}
                      style={{ margin: 0 }}
                    />       
                    <Image
                      alt="The Metalhead Dev Skull Logo"
                      fluid={data.skull.childImageSharp.fluid}
                      style={{ margin: 0 }}
                      objectFit="contain"
                    />
                  </>
                )
              }}
            />
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(35),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main
            style={ location.pathname === rootPath ? {
              display: `grid`,
              gridTemplateColumns: `1fr 1fr`,
            } : {}}
          >{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Site by
          {` `}
          <a href="https://twitter.com/metalandcoffee_">Metal & Coffee</a>
          <span role="img" aria-label="sparkle emoji">
            ✨
          </span>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  letter-spacing: 0.2px;
  font-weight: 600;
  background-color: #030303;
  color: #E0A3C8;
`

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
`

export default Layout

export const headerImageQuery = graphql`
  query headerImageQuery {
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
