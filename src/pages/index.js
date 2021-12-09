// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Juliana and Peaches and Gauge"
        src="..\images\IMG_20211015_091032_3.jpg"
      />


    <StaticImage
        alt="The family at Thanksgiving 2020"
        src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/200481752_10109981146140217_622478557431802745_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=5RrCSMVcXnMAX9YwoUA&_nc_ht=scontent-dfw5-1.xx&oh=f24e2bea27efafce69e35141a6b52d65&oe=61D65220"
      />

    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage
