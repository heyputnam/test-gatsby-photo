import { useStaticQuery, graphql } from "gatsby"

import React from 'react'
const Images = ({children}) => {
const data = useStaticQuery(graphql`
query photoQuery{
    allContentfulTestPictures{
      edges{
      node{
      photos{
      fluid{src}
    }
    }
    }
    }
  }
`)
const tryit = data.allContentfulTestPictures.edges.map((edge) => {
    return(
    edge.node.photos[0].fluid.src
    )
})

console.log(data.allContentfulTestPictures.edges[0].node.photos[0].fluid.src)
console.log(tryit)
return(
    <div>
        hi
        {/* <img src={data.allContentfulTestPictures.edges[1].node.photos[0].fluid.src} alt="test" /> */}
        {data.allContentfulTestPictures.edges.map((edge) => {
    return(
    <img key={edge.node.photos[0].fluid.src} src={edge.node.photos[0].fluid.src} alt=""/>
    )
})}
    </div>
)
}

export default Images;