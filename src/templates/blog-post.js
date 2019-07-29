import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

export const PostQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

const Template = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHtml={{ __html: post.html }} />
    </Layout>
  )
}

export default Template
