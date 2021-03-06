import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class StorePage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Featured Products</h1>
          </div>
          {posts
            .map(({ node: post }) => (
              <div
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                  <img
                      style={{ borderRadius: '5px' }}
                      height="240"
                      width="240"
                      src={post.frontmatter.image}
                  />
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </p>
                <p>
                    {/* {post.excerpt} */}
                  <Link className="button is-small" to={post.fields.slug}>
                      View Product
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
     </Layout>
    )
  }
}

StorePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "product" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image
          }
        }
      }
    }
  }
`
