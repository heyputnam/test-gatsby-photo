import * as React from "react"
import { Link } from "gatsby"
import Images from '../components/images'

import Layout from "../components/layout"


const IndexPage = ({children}) => (

  <Layout>
  <p>look at my pictures</p>
  <Images/>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
