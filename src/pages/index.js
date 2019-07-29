import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="This is a simple website for the gatsby crash course"
    />
    <h1>Welcome to my website</h1>
    <p>This is a sample site fir The Gatsby Crash Course</p>
  </Layout>
)

export default IndexPage
