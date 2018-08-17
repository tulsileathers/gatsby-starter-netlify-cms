import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient is-marginless is-paddingless">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
            >
            <h2
                className="has-text-weight-bold is-size-1"
                style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                }}
            >
                {title}
            </h2>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <IndexPageTemplate
      title={post.frontmatter.description}
      image={post.frontmatter.bannerImage}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        frontmatter {
            bannerImage
            description
      }
    }
  }
`
