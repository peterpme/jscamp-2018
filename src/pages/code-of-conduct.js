import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash.get'

export default class CodeOfConductPage extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata', {})
    return (
      <React.Fragment>
        <Helmet title={`${siteMetadata.title} | Code of Conduct`} />
        <h1 className="text-primary">Conference Code of Conduct</h1>
        <p>
          All attendees, speakers, sponsors and volunteers at our conference are
          required to agree with the following code of conduct. Organisers will
          enforce this code throughout the event. We expect cooperation from all
          participants to help ensure a safe environment for everybody.
        </p>
        <h2 className="text-primary">Need Help?</h2>
        <p>You have our contact details in the emails we've sent.</p>
        <h2 className="text-primary">The Quick Version</h2>
        <p>
          Our conference is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, ethnicity, religion (or lack thereof), or technology
          choices. We do not tolerate harassment of conference participants in
          any form. Sexual language and imagery is not appropriate for any
          conference venue, including talks, workshops, parties, Twitter and
          other online media. Conference participants violating these rules may
          be sanctioned or expelled from the conference{' '}
          <em>without a refund</em> at the discretion of the conference
          organisers.
        </p>
        <h2 className="text-primary">The Less Quick Version</h2>
        <p>
          Harassment includes offensive verbal comments related to gender,
          gender identity and expression, age, sexual orientation, disability,
          physical appearance, body size, race, ethnicity, religion, technology
          choices, sexual images in public spaces, deliberate intimidation,
          stalking, following, harassing photography or recording, sustained
          disruption of talks or other events, inappropriate physical contact,
          and unwelcome sexual attention.
        </p>
        <p>
          Participants asked to stop any harassing behavior are expected to
          comply immediately.
        </p>
        <p>
          Sponsors are also subject to the anti-harassment policy. In
          particular, sponsors should not use sexualised images, activities, or
          other material. Booth staff (including volunteers) should not use
          sexualised clothing/uniforms/costumes, or otherwise create a
          sexualised environment.
        </p>
        <p>
          If a participant engages in harassing behavior, the conference
          organisers may take any action they deem appropriate, including
          warning the offender or expulsion from the conference with no refund.
        </p>
        <p>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact a member of conference
          staff immediately. Conference staff can be identified as they'll be
          wearing branded clothing and/or badges.
        </p>
        <p>
          Conference staff will be happy to help participants contact
          hotel/venue security or local law enforcement, provide escorts, or
          otherwise assist those experiencing harassment to feel safe for the
          duration of the conference. We value your attendance.
        </p>
        <p>
          We expect participants to follow these rules at conference and
          workshop venues and conference-related social events.
        </p>
        <p>
          This Code of Conduct is borrowed from{' '}
          <a href="http://confcodeofconduct.com/">
            Conference Code of Conduct.
          </a>
        </p>
      </React.Fragment>
    )
  }
}

export const pageQuery = graphql`
  query COCQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
