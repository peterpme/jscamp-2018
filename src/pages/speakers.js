import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'
import speakers from '../fixtures/speakers.json'

const byName = (a, b) => {
  if (a.fullName < b.fullName) return -1
  if (a.fullName > b.fullName) return 1
  return 0
}

export default class SpeakersPage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Speakers`} />
        <div className="container">
          <div className="row text-center">
            {speakers.sort(byName).map(speaker => <Speaker {...speaker} />)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Speaker = ({
  fullName,
  bio,
  title,
  company,
  photoUrl,
  location,
  github,
  twitter,
}) => (
  <div className="col-lg-4 text-center" style={{ marginBottom: 40 }}>
    <div
      style={{
        display: 'inline-block',
        marginBottom: 20,
      }}
    >
      <img
        src={`https://res.cloudinary.com/chicagojs/image/fetch/w_160,h_160,c_fill,g_face,f_auto/${photoUrl}`}
        alt={`Headshot of ${fullName}`}
        width={160}
        height={160}
        style={{ width: 160, height: 160, borderRadius: 80 }}
      />
    </div>
    <h2>{fullName}</h2>
    <p>{title}</p>
    <hr />
    <p>
      {company}
      <br />
      {location}
    </p>
    <ul className="list-unstyled">
      <li className="d-inline-block">
        <a href={github}>
          <img
            width={48}
            height={48}
            style={{ width: 48, height: 48 }}
            src="/github.svg"
          />
        </a>
      </li>
      <li className="d-inline-block">
        <a href={twitter}>
          <img
            width={48}
            height={48}
            style={{ width: 48, height: 48 }}
            src="/twitter.svg"
          />
        </a>
      </li>
    </ul>
  </div>
)

export const pageQuery = graphql`
  query SpeakersQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        author
        twitter
        city
        date
        ticketLink
      }
    }
  }
`
