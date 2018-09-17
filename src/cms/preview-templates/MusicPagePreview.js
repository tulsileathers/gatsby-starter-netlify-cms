import React from 'react'
import PropTypes from 'prop-types'
import { MusicPageTemplate } from '../../templates/music-page'

const MusicPagePreview = ({ entry, widgetFor }) => (
  <MusicPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MusicPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MusicPagePreview
