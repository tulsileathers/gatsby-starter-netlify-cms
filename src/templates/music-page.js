import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const MusicPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
        }
    };

    return (
        <section className="section section--gradient">
        <div className="container">
            <div className="columns">
            <div className="column is-10 is-offset-1">
                <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                </h2>
                <PageContent className="content" content={content} />
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

MusicPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MusicPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MusicPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

MusicPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MusicPage

export const musicPageQuery = graphql`
  query MusicPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
