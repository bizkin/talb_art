import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      angels: file(relativePath: { eq: "angels.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anatomy: file(relativePath: { eq: "anatomy.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avocado: file(relativePath: { eq: "avocado.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bibi: file(relativePath: { eq: "bibi.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bod: file(relativePath: { eq: "bod.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      concept1: file(relativePath: { eq: "concept1.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      concept_art: file(relativePath: { eq: "conept_art.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      couple: file(relativePath: { eq: "couple.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      forms: file(relativePath: { eq: "forms.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      from_head: file(relativePath: { eq: "from-head.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustration: file(relativePath: { eq: "Illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagine: file(relativePath: { eq: "imagintaiton-min.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }      img01: file(relativePath: { eq: "IMG_1001.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      jessy: file(relativePath: { eq: "jessy.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      damn: file(relativePath: { eq: "damn.png" }) {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  `)

  return (
    <div className="imageWrapper">
      <Img fluid={data.damn.childImageSharp.fluid} />
      <Img fluid={data.angels.childImageSharp.fluid} />
      <Img fluid={data.anatomy.childImageSharp.fluid} />
      <Img fluid={data.avocado.childImageSharp.fluid} />
      <Img fluid={data.bibi.childImageSharp.fluid} />
      <Img fluid={data.bod.childImageSharp.fluid} />
      <Img fluid={data.concept1.childImageSharp.fluid} />
      <Img fluid={data.concept_art.childImageSharp.fluid} />
      <Img fluid={data.couple.childImageSharp.fluid} />
      <Img fluid={data.forms.childImageSharp.fluid} />
      <Img fluid={data.illustration.childImageSharp.fluid} />
      <Img fluid={data.from_head.childImageSharp.fluid} />
      <Img fluid={data.imagine.childImageSharp.fluid} />
      <Img fluid={data.img01.childImageSharp.fluid} />
      <Img fluid={data.jessy.childImageSharp.fluid} />
    </div>

  )
}

export default Image
