import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
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
              display: `block`,
              display: `grid`,
              gridTemplateColumns: `1fr 50px`,
              gridGap: `10px`,
              alignItems: `center`,
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            <img style={{ margin: 0 }} src="./metalhead-dev-text-logo.png" alt="The Metalhead Dev Text Logo" />
            <img style={{ margin: 0 }} src="./metalhead-dev-skull-logo.png" alt="The Metalhead Dev Skull Logo" />
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
            to={`/blog/`}
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
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Site-in-progress by
          {` `}
          <a href="https://twitter.com/metalandcoffee_">Metal & Coffee</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  letter-spacing: 0.2px;
  font-weight: 600;
  font-size: 20px;
  background-color: #030303;
  color: #E0A3C8;
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  padding: 20px;
`

export default Layout
