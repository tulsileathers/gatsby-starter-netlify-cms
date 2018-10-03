import React from 'react'
import PropTypes from 'prop-types'
import PhotoGrid from '../components/PhotoGrid'
import Layout from '../components/Layout'
import {Link, graphql} from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import { FaInstagram } from 'react-icons/fa';

const IndexPageTemplate = ({ data }) => {
  const { markdownRemark: post } = data
    return (
        <Layout>
        <section className="section section--gradient is-marginless is-paddingless">
            <div className="container">
                <div className="columns">
                  <div className="column is-8 is-offset-2 has-text-centered">
                        <h1 className="is-size-1">
                            {post.frontmatter.title}
                        </h1>
                        <h2 className="is-size-2 is-italic">
                            {post.frontmatter.description}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    )
}

IndexPageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPageTemplate

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            title
            description
      }
    }
  }
`
