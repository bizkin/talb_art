import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h3>This is my sketches i don't share on social media</h3>
    <h4>little about me, 28 old, got ambitions to make the world a better place ;) and...</h4>
    <p>Looking to enter the media/products management.</p>
    <p>feel free to <Link style={{ color: 'red' }} to="/contact">contact</Link> me</p>
    <Image />
    <Link to="/contact/">contact?</Link>
  </Layout >
)

export default IndexPage
