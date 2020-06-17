import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import RightsText from './RightsText'
import Title from './Title'
import Container from './Container'
import * as STATIC from './staticValues';

function Donate(props) {
  return (
    <Container>
      <Title>Places_to<br/>Donate</Title>

      <HomeLinkContainer>
        <RouterLink to="/">Click here</RouterLink> to return to the homepage and see the hashtag generator.
      </HomeLinkContainer>

      <Divider />

      <DonateList>
        <DonateListItem>
          <Name>African Career, Education, and Resource (ACER)</Name>
          <Site href="https://acerinc.org/donation/">www.acerinc.org/donation/</Site>
          <Description>A nonprofit organization that engages African immigrants living in the north and northwest suburbs of Minneapolis.</Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Al Maa'uun</Name>
          <Site href="https://launchgood.com/campaign/stand_with_minneapolis_we_cant_breathe#!/">www.launchgood.com/campaign/stand_with_minneapolis_we_cant_breathe</Site>
          <Description>Al Maa'uun is a nonprofit with deep roots in North Minneapolis, serving thousands of households each year with food and critical supplies.</Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Black Immigrant Collective</Name>
          <Site href="https://www.facebook.com/BlackImmigrantCollective/">www.facebook.com/BlackImmigrantCollective</Site>
          <Site href="https://www.paypal.me/BlackImmigrant">www.paypal.me/BlackImmigrant</Site>
          <Description>The Black Immigrant Collective amplifies and makes visible the voices of Black immigrants in Minnesota.</Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Black Lives Matter</Name>
          <Site href="https://www.blacklivesmatter.com">www.blacklivesmatter.com</Site>
          <Description></Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Black Women Speak</Name>
          <Site href="https://linktr.ee/blackwomenspeakorg">linktr.ee/blackwomenspeakorg</Site>
          <Description>
            Gathering Black Women in Minnesota to share our experiences in order to heal, find joy and move toward liberation on our own terms!
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Centro de Trabajadores Unidos en Lucha</Name>
          <Site href="https://ctul.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=1">ctul.ourpowerbase.net/civicrm/contribute/transact</Site>
          <Description>
            CTUL is a worker-led organization where workers organize, educate and empower each other to fight for a voice in their workplaces and in their communities.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Division of Indian Work</Name>
          <Site href="http://diw-mn.org/">www.diw-mn.org</Site>
          <Description>
            Division of Indian Work’s mission is to support and strengthen urban American Indian people through culturally-based education, traditional healing approaches, and leadership development. We provide many services to the community but the most relevant one right now is our food shelf.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Du Nord Riot Recovery Fund</Name>
          <Site href="https://www.gofundme.com/f/minnesota-poc-business-support">www.gofundme.com/f/minnesota-poc-business-support</Site>
          <Description>
            Du Nord Craft Spirits is a Black-owned distillery with a building that was damaged. They’ve “received a tidal wave of love and support from across the nation and many have asked how they can help… Therefore, Du Nord is establishing this fund to support black and brown companies affected by the riots.”
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Femme Empowerment Project</Name>
          <Site href="https://www.instagram.com/femmeempowermentproject/">instagram.com/femmeempowermentproject</Site>
          <Site href="https://venmo.com/femmeempowermentproject">venmo.com/femmeempowermentproject</Site>
          <Description>
            Skill shares and discussions led by and for QTIIBPOC femmes in the twin cities. Creating space for cultural resiliency, healing and ancestral wisdom. Currently organizing supplies and medic trainings.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Isuroon</Name>
          <Site href="https://www.isuroon.org/donate-to-isuroon/">www.isuroon.org/donate-to-isuroon/</Site>
          <Description>
            Isuroon is a grassroots nonprofit organization working to promote the well-being and empowerment of Somali women in Minnesota and beyond.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Joyce Preschool</Name>
          <Site href="https://www.joycepreschool.org/donate/">www.joycepreschool.org/donate/</Site>
          <Description>
            Emergency fund for families who had to evacuate their homes near Lake Street last week, and who are now coming back to a devastated neighborhood with no grocery stores within walking distance.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Juxtaposition Arts</Name>
          <Site href="https://juxtapositionarts.org/">https://juxtapositionarts.org/</Site>
          <Description>
            JXTA is a teen-staffed art and design center, gallery, retail shop, and artists’ studio space in North Minneapolis. Since the uprisings in Minneapolis began, JXTA has played a critical role in building community alternatives to the police, led by Black, POCI and other youth who are already building the abundant and just future they envision.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Lake Street East African Worker Recovery Fund</Name>
          <Site href="https://www.gofundme.com/f/lake-street-east-african-worker-recovery-fund">www.gofundme.com/f/lake-street-east-african-worker-recovery-fund</Site>
          <Description>
            Business owners have raised millions to rebuild, but workers have no recourse until then. The Awood Center is raising money to provide aid to hundreds of workers until they can return to their jobs.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Latino Community on Lake Street</Name>
          <Site href="https://www.gofundme.com/f/help-latino-community">www.gofundme.com/f/help-latino-community</Site>
          <Description>
            Fundraiser for Latinx owned businesses on Lake Street.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Little Earth Residents Association</Name>
          <Site href="https://www.givemn.org/organization/Littleearth">www.givemn.org/organization/Littleearth</Site>
          <Description>
            Food and safety needs for residents of Little Earth of United Tribes.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Migizi Communications</Name>
          <Site href="https://www.migizi.org/support-us">www.migizi.org/support-us</Site>
          <Description>
            MIGIZI Communications advances a message of success, well-being and justice for the American Indian community. Support them rebuilding after fire.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Minneapolis Sanctuary Hotel</Name>
          <Site href="https://www.gofundme.com/f/sanctuaryhotel">www.gofundme.com/f/sanctuaryhotel</Site>
          <Description>
            This isn't a hotel anymore, this is a community resource made possible by George Floyd. George Floyd was a shelter worker at the largest homeless shelter in Minneapolis. He supported and advocated for people experiencing homelessness while he was alive, and this Sanctuary will be a part of his legacy.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Minnesota Healing Justice Network</Name>
          <Site href="https://www.minnesotahealingjusticenetwork.com/fund">www.minnesotahealingjusticenetwork.com</Site>
          <Description>
            We provide a supportive professional community and mutual aid network for wellness and healing justice practitioners who also identify as IBPOC (indigenous, black, or people of color).
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Northside business support</Name>
          <Site href="https://bit.ly/northsidebiz">https://bit.ly/northsidebiz</Site>
          <Description>
            Support businesses on Minneapolis’s Northside that have been impacted by recent demonstrations.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Oasis of Love</Name>
          <Site href="https://www.oasisoflove.center/m-o-r-e-i-n-f-o">www.oasisoflove.center/m-o-r-e-i-n-f-o</Site>
          <Description>
            A Northside organization that was established to help combat the challenges of domestic violence.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Pimento Relief Fund</Name>
          <Site href="https://abepmpls.org/pimento-relief-fund">abepmpls.org/pimento-relief-fund</Site>
          <Description>
            Pimento provides black business without insurance relief after white supremacists set them on fire during the protests.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>PPNA</Name>
          <Site href="https://www.ppna.org/donate">www.ppna.org/donate</Site>
          <Description>
            Renters Support Fund - operated by the Minneapolis Renters' Coalition, a group of residents, community organizations, and neighborhood organizations committed to supporting renters in our community.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>**Public Functionary</Name>
          <Site href="https://publicfunctionary.org/support">publicfunctionary.org/support</Site>
          <Description>
            #CREATIVESAFTERCURFEW: Public Functionary’s team is working in collaboration with independent artists and muralists who are organizing in response to the Minneapolis uprisings and the murder of George Floyd. They are mobilizing resources to directly support a BIPOC-led effort of artists and allies using mural making as a form of narrative messaging, healing, rebuilding and remembrance.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Redeemer Center for Life</Name>
          <Site href="http://www.redeemercenter.org/donate">www.redeemercenter.org/donate</Site>
          <Description>
            We are a Black-led non-profit in North Minneapolis and our mission is to act as an agent of hope and transformation to preserve a vibrant community in the Harrison neighborhood &amp; broader North Minneapolis. Our primary programs include 26 affordable housing units, youth leadership programs, workforce development opportunities, like our social venture bike and coffee shop - Venture North. We also have community engagement projects like our At Home in Harrison artist cohort, Fairview Health Commons at the Living Room, and a community garden!
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Southside Harm Reduction</Name>
          <Site href="http://www.southsideharmreduction.org/donate/">www.southsideharmreduction.org/donate</Site>
          <Description>
            Southside Harm Reduction Services works within a harm reduction framework to promote the human rights to health, safety, autonomy, and agency among people who use substances.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Spiral Collective</Name>
          <Site href="https://www.spiralmn.com/donate.html">www.spiralmn.com/donate.html</Site>
          <Description>
            A volunteer full-spectrum reproductive options and support group comprised of doulas, birth-workers, and passionate reproductive justice advocates. based in the Twin Cities area of Minnesota, occupied Dakhóta territories.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Unicorn Riot</Name>
          <Site href="https://unicornriot.ninja/donate/">unicornriot.ninja/donate/</Site>
          <Description>
            A decentralized media organization that has been live-streaming uprisings.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Until We Are All Free</Name>
          <Site href="https://www.untilweareallfree.com">www.untilweareallfree.com</Site>
          <Description>
            Non-profit organization working towards the liberation of incarcerated men and women and help them fulfill their roles as human beings in society, contributors to art, financial liberation, community development, culture ambassadors, mothers.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>West Broadway Business and Area Coalition</Name>
          <Site href="https://giving.onecause.com/public/02ad4737-2285-4ad2-91c6-95cd66b423bf/fundraisers/c60e5030-69ce-4853-8b11-4727da5054ad/donate">giving.onecause.com/public/02ad4737-2285-4ad2-91c6-95cd66b423bf/fundraisers/c60e5030-69ce-4853-8b11-4727da5054ad/donate</Site>
          <Description>
            WBC in partnership with Northside Funders Group will direct all donations to support Northside businesses that have been impacted by COVID-19 and the recent uprising.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Women for Political Change</Name>
          <Site href="https://secure.everyaction.com/ZNYnUikGcU2b9OAYFs1TeQ2">secure.everyaction.com/ZNYnUikGcU2b9OAYFs1TeQ2</Site>
          <Description>
            Holistically investing in the leadership and political power of young women and trans &amp; non-binary individuals throughout Minnesota.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>Young People's Action Coalition</Name>
          <Site href="https://www.gofundme.com/f/young-peoples-action-coalition">www.gofundme.com/f/young-peoples-action-coalition</Site>
          <Description>
            Young People's Action Coalition is an intersectional high school and middle school student led group that organizes to improve Minneapolis Public Schools and build community and power around such campaigns as getting cops out of schools.
          </Description>
        </DonateListItem>

        <DonateListItem>
          <Name>ZACAH</Name>
          <Site href="https://www.zacah.org/">https://www.zacah.org/</Site>
          <Description>
            ZACAH provides emergency financial assistance to folks who are on the brink of experiencing homelessness or already are. They are currently engaged with organizers at Powderhorn Sanctuary to support those who have been displaced and need help with finding/putting a security deposit down for low income housing, access to crisis shelters, county assistance, job applications, debt relief and direct cash payments.
          </Description>
        </DonateListItem>

      </DonateList>

      <RightsText/>

    </Container>
  );
}

export default Donate;

const DonateList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;

const DonateListItem = styled.li`
  font-family: 'Roboto';
  color: #CCCCCC;
  font-size: 15px;
  padding-bottom: 16px;
  margin-top: 16px;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
`;

const Name = styled.div`
  color: white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;

const Site = styled.a`
  display: block;
  color: ${STATIC.YELLOW};
  text-decoration: underline;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  &:hover { color: white; }
`;

const Description = styled.p`
  font-family: 'Roboto';
  color: white;
  font-size: 14px;
`;

const HomeLinkContainer = styled.div`
  margin: 16px 0;
  font-size: 14px;
  color: #CCCCCC;
`;

const RouterLink = styled(Link)`
  color: ${STATIC.YELLOW};
  text-decoration: none;

  &:hover { color: white; }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
`;
