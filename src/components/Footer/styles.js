import styled from 'styled-components';
import { media, colors } from 'styledComponents/theme';

const FooterContainer = styled.footer`
  width: 100vw;
  min-height: 150px;
  padding: 25px 0;
  background-color: ${colors.midGrey};
  padding: 0;

  h3 {
    color: ${colors.white};
    font-size: .75rem;
    line-height: 1.375rem;
    text-align: left;
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 25px 0;
    display: block;

    ${media.tablet`
      width: 90%;
      padding-bottom: 2.5rem;
    `}
  }

  padding: 25px 0;

  ${media.tablet`
    padding: 3rem 0;
  `}
`;


const FooterInfo = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: block;

  ${media.tablet`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    width: 90%;
  `}

`;

const ContactInfo = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  ${media.tablet`
    width: 90%;
  `}

  p {
    color: white;
    font-size: 10px;
    text-align: right;
  }

  h4 {
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: .3rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column;

    ${media.tablet`
      flex-direction: row;
    `}

    li {
      padding-left: 0;
      color: ${colors.white};
      font-size: .75rem;
      line-height: 1.375rem;
      text-align: left;
      width: 100%;
      display: block;

      ${media.tablet`
        display: inline;
        width: auto;
      `}
    }
  }
`;

const RouteSection = styled.div`
  margin-bottom: 1.5rem;
  display: block;
  width: 100%;

  ${media.tablet`
    width: 20%;
    padding: 0 15px;
  `}

  h4 {
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: .3rem;
    text-decoration: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: column;

    li {
      padding-left: 0;
      color: ${colors.white};
      font-size: .75rem;
      line-height: 1.375rem;
      text-align: left;
      width: 100%;
      display: block;

      a {
        color: ${colors.white};
        font-size: .75rem;
        line-height: 1.375rem;
        text-align: left;
        width: 100%;
        display: block;
      }
    }
  }
`

export {
  FooterContainer,
  FooterInfo,
  RouteSection,
  ContactInfo,
}