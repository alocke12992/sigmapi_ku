import React from 'react';
import Footer from 'components/Footer';
import { Container, Section } from 'styledComponents';
import { media } from 'styledComponents/theme';
import { LinkButton } from 'styledComponents/Button';

const forms = {
  "recForm": "https://chapterbuilder.com/forms/?id=6820&chapter=7bd64c3f2c75f525116cea96bd07ae94",
  "highSchoolInterestForm": "https://chapterbuilder.com/forms/?id=6803&chapter=7bd64c3f2c75f525116cea96bd07ae94",
  "collegeStudentInterestForm": "https://chapterbuilder.com/forms/?id=6839&chapter=7bd64c3f2c75f525116cea96bd07ae94"
}
const recForm = "https://chapterbuilder.com/forms/?id=6820&chapter=7bd64c3f2c75f525116cea96bd07ae94"
const interestForm = "https://chapterbuilder.com/forms/?id=6803&chapter=7bd64c3f2c75f525116cea96bd07ae94"
import styled from 'styled-components';

const Row = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  ${media.tablet`
      flex-direction: row;
      justify-content: space-between;
      max-width: 660px;
  `}

  ${media.desktop`
    max-width: 100%;
  `}

  div {
    text-align: left;
    max-width: 400px;

    ${media.desktop`
      max-width: 100%;
    `}
  }
`;

const Column = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 1.5rem;
  }

  .interest-forms {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    max-width: 330px;

    ${media.tablet`
      flex-direction: row;
      max-width: 660px;
    `}
  }
`


const ContactPage = ({ data }) => {
  const { welcomeMessage, letterFromPresident, financials, rushSchedule, } = data.recruitmentPage;
  const { name, email, phone, position } = data.president;
  const defaultWelcome = "Sigma Pi is interested in recruiting well-rounded, impressive men from all over the country. We invite high school seniors, freshmen college students and others interested in knowing more about Sigma Pi at the University of Kansas to contact our Recruitment Chairman by clicking on one of the buttons below. We will be sure to contact you to answer any questions you may have about our fraternity and keep you informed of upcoming rush events, and we appreciate your interest in Sigma Pi."
  return (
    <>
      <Section>
        <Column>
        <h1>Join Sigma Pi</h1>
        {welcomeMessage ? <p dangerouslySetInnerHTML={{ __html: welcomeMessage.content.html }} /> : <p>{defaultWelcome}</p>}
        <div className="interest-forms">
          <LinkButton to={forms["highSchoolInterestForm"]}>High School Senior</LinkButton>
          <LinkButton to={forms["collegeStudentInterestForm"]}>Current College Student</LinkButton>
        </div>
        </Column>
      </Section>
      { letterFromPresident && (
        <Section dark>
          <Container>
            <h3>Prospective New Members,</h3>
            <p dangerouslySetInnerHTML={{ __html: letterFromPresident.content.html }} />
            <p>{name && name}</p>
            <p>{phone && phone}</p>
            <p>{email && email}</p>
            <p>{position ? position : 'President'}</p>
            <p>Sigma Pi – Beta-Delta Chapter</p>
            <p>The University of Kansas</p>
          </Container>
        </Section>
      )}
      {(financials || rushSchedule) && (
        <Section>
          <Row>
            { financials && (
              <div>
                <h3>Financial Details</h3>
                <div dangerouslySetInnerHTML={{ __html: financials.content.html }} />
              </div>
            )}
            {rushSchedule && (
              <div>
                <h3>Rush</h3>
                <div dangerouslySetInnerHTML={{ __html: rushSchedule.content.html }} />
              </div>
            )}
          </Row>
        </Section>
      )}
      <Section noPadTop>
        <Column>
          <h3>Recommendations</h3>
          <p>For Rush recommendations from Sigma Pi alumni please include as much information as possible. Due to the large number of men who rush Sigma Pi each year, the chapter requests that recommendations be submitted as early as possible. Recommendations may be submitted by clicking the button below:</p>
          <LinkButton to={recForm}>Submit Recommendation</LinkButton>
        </Column>
      </Section>
      <Footer president={data.president}/>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    recruitmentPage: contentfulPage(slug: { eq: "recruitment"}){
      title
      hero {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      content {
        content: childContentfulRichText {
            html
        }
      }
      welcomeMessage {
        content: childContentfulRichText {
            html
        }
      }
      letterFromPresident {
        content: childContentfulRichText {
            html
        }
      }
      financials {
        content: childContentfulRichText {
            html
        }
      }
      rushSchedule {
        content: childContentfulRichText {
            html
        }
      }
    }
    president: contentfulPerson(position: { eq: "President"}){
      name
      email
      phone
    }
  }
`;