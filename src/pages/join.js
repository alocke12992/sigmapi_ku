import React from 'react';
import Construction from 'components/Construction';
import { Container } from 'styledComponents';
import { LinkButton } from 'styledComponents/Button';
const recForm = "https://chapterbuilder.com/forms/?id=6820&chapter=7bd64c3f2c75f525116cea96bd07ae94"
const interestForm = "https://chapterbuilder.com/forms/?id=6803&chapter=7bd64c3f2c75f525116cea96bd07ae94"
const ContactPage = () => (
  <Container>
    <h1>Join Sigma Pi</h1>
    <p>Sigma Pi is interested in recruiting well-rounded, impressive men from all over the country. We invite high school seniors, freshmen college students and others interested in knowing more about Sigma Pi at the University of Kansas to contact our Recruitment Chairman, Nolan Sell, by clicking on the button below. We will be sure to contact you to answer any questions you may have about our fraternity and keep you informed of upcoming rush events, and we appreciate your interest in Sigma Pi.
</p>
    <LinkButton to={interestForm}>Interest Form</LinkButton>
    <h3>Prospective New Members,</h3>
    <p>My name is Clayton Sell and I am the president of the Beta-Delta Chapter of Sigma Pi Fraternity, International. I have exciting news to share with all of you! We are now a housed fraternity taking over the lease at 1301 West Campus Road, previously the Sigma Alpha Epsilon House.  Through the fraternity, we are here at KU to help develop men of strong character through our various events and academic/ social goals, and we are looking for members who would like to pursue that same goal to join us in our Fall 2019 New Member class. We have set the costs of living cheaper in comparison to every dorm and housed fraternity on campus. The price for 2019-2020 school year is $5,250 a semester and includes your new member dues to Sigma Pi.</p>
    <p>This cost includes your room and board, utilities, and three professionally cooked meals a day during the school week. The house has a full basketball court, large recreation rooms, library, laundry room, and a small gym.
Spots for the Fall 2019 New Member Class are limited and filling up fast, so please contact us as soon as possible if interested. I would like to speak with each of you on a phone call at some point to set up a time when you can tour the house and meet the brothers. Take a look at our recruitment schedule below for specific dates and events we’re hosting throughout the summer. Please let me know if you plan to come to any of the events listed or if we need to set up a different time if you cannot make it to any of the times listed below. I hope you will all join us in this incredible brotherhood.
</p>
<p>Clayton Sell</p>
<p>(316) 347-4466</p>
<p>BetaDelta@SigmaPi.org</p>
<p>President</p>
<p>Sigma Pi – Beta-Delta Chapter</p>
<p>The University of Kansas</p>
  <h3>Financials</h3>
  <p>$5,250 - per Semester</p>
  <p>This includes:</p>
  <ul>
    <li>New member dues to Sigma Pi</li>
    <li>Room and board</li>
    <li>Utilities</li>
    <li>3 professionally cooked meals a day during the school week</li>
  </ul>
  <h3>Rush</h3>
  <ul>
    <li><strong>Saturday, May 25th, 4:00pm-6:00pm:</strong><br/>Game day @ the Sigma Pi house</li>
    <li><strong>Saturday, June 1st, 5:00pm-7:00pm</strong><br/>Basketball @ the Sigma Pi house</li>
    <li><strong>Saturday June 8th, 2:00pm - 4:00pm: </strong><br/>Campus tour/ House tour @ the Sigma Pi house</li>
    <li><strong>Saturday June 15th, TBD</strong><br/>NBA Playoffs Watch Party @ the Sigma Pi house</li>
    <li><strong>Friday June 21st thru Sunday June 23rd:</strong><br/>Formal Rush</li>
    <li><strong>Saturday June 28th, 4pm</strong><br/>Sand Volleyball/Cookout @ the Sigma Pi house</li>
  </ul>

  <h3>Recommendations</h3>
  <p>For Rush recommendations from Sigma Pi alumni please include as much information as possible. Due to the large number of men who rush Sigma Pi each year, the chapter requests that recommendations be submitted as early as possible. Recommendations may be submitted by clicking the button below:</p>
  <LinkButton to={recForm}>Submit Recommendation</LinkButton>
  </Container>

);

export default ContactPage;
