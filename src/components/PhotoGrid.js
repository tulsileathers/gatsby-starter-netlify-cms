import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PhotoGrid = ({ gridItems }) => {
  console.log(gridItems) 
  console.log(gridItems[0].sizes)
  return (<div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-4">
        <Img sizes={item.sizes} />
      </div>
    ))}
  </div>
  )
}

PhotoGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
      PropTypes.object,
  ),
}

export default PhotoGrid

export const SquarePhoto = graphql`
    fragment SquarePhoto on File {
        childImageSharp {
            sizes(maxWidth: 400, maxHeight: 400) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
