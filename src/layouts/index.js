import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

//query is a reserved word and triggers the 'magic' in Gatsby that creates a prop called data and makes it available to the attached component (for Layouts and Pages only).
//The name of the query (e.g. SiteTitleQuery is up to you. BUT each query MUST have a unique name).
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/bg.jpeg/"}) {
      sizes(maxWidth: 1240, grayscale: true) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
