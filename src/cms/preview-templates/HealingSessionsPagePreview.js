import React from 'react'
import PropTypes from 'prop-types'
import { HealingSessionsPageTemplate } from '../../templates/healing-sessions-page'

const HealingSessionsPagePreview = ({ entry, widgetFor }) => (
  <HealingSessionsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

HealingSessionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HealingSessionsPagePreview
