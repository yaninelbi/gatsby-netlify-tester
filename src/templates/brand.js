import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export const BrandTemplate = ({
    title,
    logo,
    products,
    helmet,
}) => {

    return (
        <section className="section">
            {helmet || ''}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{logo}</p>
                        <div>
                        {products && products.length ? (
                            <div style={{ marginTop: `4rem` }}>
                              <h4>Products</h4>
                              <div className="productlist">
                                {products.map(product => (
                                  <div>
                                    <div>{product.name}</div>
                                    <div><img src={product.photo} alt={product.name}/></div>
                                    <div>{product.category}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

BrandTemplate.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    helmet: PropTypes.instanceOf(Helmet),
}

const Brand = ({ data }) => {
    const { markdownRemark: brand } = data
    console.log(data);

    return (
        <BrandTemplate
            helmet={<Helmet title={`${brand.frontmatter.title}`} />}
            title={brand.frontmatter.title}
            logo={brand.frontmatter.logo}
            products={brand.frontmatter.products}
        />
    )
}

Brand.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default Brand

export const pageQuery = graphql`
  query BrandByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        logo
        products {
            photo
            name
            category
        }
      }
    }
  }
`
