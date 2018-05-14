import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => {
  return (
    <div>
      <h2>Posts</h2>
      {data.allMarkdownRemark.edges.map(({node}) => <PostListing key={node.id} post={node} /> )}
    </div>
  )
}


export default IndexPage

export const query = graphql`
  query SiteMetaPoop {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;

// file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
//   childImageSharp {
//     # Specify the image processing specifications right in the query.
//     # Makes it trivial to update as your page's design changes.
//     resolutions(width: 125, height: 125) {
//       ...GatsbyImageSharpResolutions
//     }
//   }
// }

// background: imageSharp(id: {regex: "/bg.jpeg/"}) {
//       sizes(maxWidth: 1240, grayscale: true) {
//         ...GatsbyImageSharpSizes
//       }
//     }