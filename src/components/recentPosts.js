/**
 * Recent Posts component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function RecentPosts() {
  return (
    <StaticQuery
      query={postsQuery}
      render={data => {
        const posts = data.allMdx.edges
        return (
          <Container>
            <div style={{ margin: "20px 0 40px" }}>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </Container>
        )
      }}
    />
  )
}

const postsQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default RecentPosts
