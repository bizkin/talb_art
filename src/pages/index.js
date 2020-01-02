import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h3 style={{ color: 'rgb(160, 168, 255)' }}>This is my sketches i don't share on social media</h3>
    <h5>About me?</h5>

    <h4>IL BASED, {new Date().getFullYear() - 1992} old, got ambition to publish at least one book <a href="https://blueflame.netlify.com/">"Blue Flame"</a></h4>
    <br /> and also ...
    <p>I'm Looking to enter the media/products management:</p>
    <p>as <strong>artist/compositor/creator/campaigner/director</strong></p>
    <p>feel free to <Link style={{ color: 'red' }} to="/contact">contact</Link> me</p>
    <Image />
    <Link to="/contact/">contact?</Link>
  </Layout >
)

export default IndexPage
