import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProductTemplate = ({
    content,
    contentComponent,
    description,
    title,
    image,
    price,
    link,
    helmet,
    tags,
    quantity,
    path,
    id
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <img
                style={{ borderRadius: '5px' }}
                src={image}
            />
            <p>{description}</p>
            <PostContent content={content} />
            <a 
              href='#' 
              className='snipcart-add-item button'
              data-item-id={id}
              data-item-price={price}
              data-item-image={image}
              data-item-name={title}
              data-item-description={description}
              data-item-url={"localhost:8000" + path}>
              Add to Cart
            </a>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

ProductTemplate.propTypes = {
    content: PropTypes.string.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    helmet: PropTypes.instanceOf(Helmet),
    tags: PropTypes.array,
    quantity: PropTypes.number,
    path: PropTypes.string,
    id: PropTypes.string
}

const Product = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
    <ProductTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Product`} />}
      id={post.frontmatter.id}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      price={post.frontmatter.price}
      quantity={post.frontmatter.quantity}
      path={post.frontmatter.path}
    />
    </Layout>
  )
}

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Product

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image
        price
        quantity
        id
      }
    }
  }
`
