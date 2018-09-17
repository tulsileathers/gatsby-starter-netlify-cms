import React from 'react'
import PropTypes from 'prop-types'
import { ConnectPageTemplate } from '../../templates/connect-page'

const ConnectPagePreview = ({ entry, widgetFor }) => (
  <ConnectPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ConnectPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ConnectPagePreview
