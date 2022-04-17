import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { landingDiv } from "../css/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={landingDiv}>
      <h1>Hi, my name is Lucas Sevelin</h1>
      <h2>I am an engineering student with a passion for automation and seamless integrations</h2>
    </div>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
