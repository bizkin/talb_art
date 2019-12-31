import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h3>Hello, i'm available in litvaktal04@gmail.com</h3>
    <h3>also my IG is <a href="https://www.instagram.com/talb_art/">talb_art</a> or  <a href="https://www.facebook.com/tal.litvak.9">facebook</a></h3>
    <Link to="/">back</Link>
  </Layout>
)

export default SecondPage
