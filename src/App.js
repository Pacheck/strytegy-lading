import { ReactComponent as HeaderLogo } from './assets/Strytegy-Logo.svg';

import { mockedContent } from './mock/coreContent';
import { CollaborationContent } from './mock/collaborationContent';
import { FAQMock } from './mock/FAQContent';

import FacebookIcon from './assets/Icone-Facebook.svg';
import LinkedinIcon from './assets/Icone-Linkedin.svg';
import ImageVideo from './assets/video.png';

import CustomButton from './components/Button';
import Card from './components/CoreCard';
import CollaborationCard from './components/CollaborationCard';
import FAQCard from './components/FAQCard';

import * as Styled from './styles';
function App() {
  return (
    <Styled.AppContainer className="App">
      <Styled.AppHeader>
        <Styled.LogoWrapper>
          <HeaderLogo alt="Strytegy logo" height="2.94rem" width="9.06rem" />
        </Styled.LogoWrapper>
        <Styled.ActionsWrapper>
          <a href="https://go.strytegy.com/login/">Log In</a>
          <CustomButton textContent="Create Account" shouldTriggerAlert />
        </Styled.ActionsWrapper>
      </Styled.AppHeader>
      <Styled.AppBody>
        <Styled.MainContent>
          <Styled.TextWrapper>
            <div>
              <Styled.MainText>
                Agile rooms to unlock collective intelligence
              </Styled.MainText>
              <Styled.ActionsInfoWrapper>
                <Styled.MainInfo>
                  The online collaborative whiteboarding platform to bring teams
                  together, anytime, anywhere.
                </Styled.MainInfo>
                <Styled.MainActionsWrapper>
                  {/* <Styled.AccountButton>Create Account</Styled.AccountButton> */}
                  <CustomButton
                    textContent="Create Account"
                    shouldTriggerAlert
                  />
                  <Styled.VideoButton>Watch Video</Styled.VideoButton>
                </Styled.MainActionsWrapper>
                <aside>
                  <img src={ImageVideo} alt="Strytegy usage example" />
                </aside>
              </Styled.ActionsInfoWrapper>
            </div>
          </Styled.TextWrapper>
        </Styled.MainContent>
        <Styled.MainCore>
          <Styled.CoreHeader>Team wide strategic thinking</Styled.CoreHeader>
          <Styled.CoreContentWrapper>
            {mockedContent.map((item) => (
              <Card
                key={item.id}
                cardImage={item.image}
                cardHeader={item.title}
                cardText={item.text}
              />
            ))}
          </Styled.CoreContentWrapper>
        </Styled.MainCore>
        <Styled.ResolutionWrapper>
          <Styled.ResolutionContainer>
            <Styled.HeaderText>
              Create your new year resolution
            </Styled.HeaderText>
            <Styled.ResolutionContent>
              <Styled.ResolutionVideoContent />
              <Styled.AsideResolutionContent>
                <Styled.ResolutionContentHeader>
                  Agile rooms for collective intelligence
                </Styled.ResolutionContentHeader>
                <Styled.ResolutionContentText>
                  A outra linha fina vai aqui, bla bla bla whiskas sache, bla
                  bla bla whiskas sache
                </Styled.ResolutionContentText>
                <Styled.AsideResolutionButton>
                  Start now
                </Styled.AsideResolutionButton>
              </Styled.AsideResolutionContent>
            </Styled.ResolutionContent>
          </Styled.ResolutionContainer>
        </Styled.ResolutionWrapper>
        <Styled.CollaborationWrapper>
          <Styled.CollaborationHeader>
            A step beyond visual collaboration
          </Styled.CollaborationHeader>
          <Styled.CollaborationContent>
            {CollaborationContent.map((item, index) => (
              <CollaborationCard {...item} key={index} />
            ))}
          </Styled.CollaborationContent>
        </Styled.CollaborationWrapper>
        <Styled.FAQWrapper>
          <Styled.FAQHeader>FAQ</Styled.FAQHeader>
          <Styled.FAQContent>
            {FAQMock.map((item, index) => (
              <FAQCard
                key={index}
                headerText={item.header}
                subText={item.text}
              />
            ))}
          </Styled.FAQContent>
        </Styled.FAQWrapper>
      </Styled.AppBody>
      <Styled.AppFooter>
        <Styled.FooterHeader>
          Try your strategy with Strytegy
        </Styled.FooterHeader>
        <Styled.FooterContentWrapper>
          <Styled.FooterContent>
            <Styled.FooterText>
              ?? um ambiente digital para pensar, explorar e dimensionar o
              conhecimento nas organiza????es. ?? um ambiente digital para pensar,
              explorar e dimensionar o conhecimento nas organiza????es. ?? um
              ambiente digital para pensar, explorar e dimensionar o
              conhecimento nas organiza????es. ?? um ambiente digital para pensar,
              explorar e dimensionar.
            </Styled.FooterText>
            <Styled.FooterActionsWrapper>
              <Styled.CreateAccountWrapper>
                <input placeholder="Your work email address" />
                <CustomButton textContent="Create Account" />
              </Styled.CreateAccountWrapper>
              <Styled.SocialMedia>
                <Styled.SocialEmail>hey@startupin.me</Styled.SocialEmail>
                <Styled.SocialMediaIcons>
                  <a href="https://www.facebook.com/go.strytegy/">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                  </a>
                  <a href="https://www.linkedin.com/company/strytegy/about/">
                    <img src={LinkedinIcon} alt="Linkedin Icon" />
                  </a>
                </Styled.SocialMediaIcons>
              </Styled.SocialMedia>
              <Styled.LanguageContent>
                <a href="#">PT</a>
                <a href="#">EN</a>
              </Styled.LanguageContent>
            </Styled.FooterActionsWrapper>
          </Styled.FooterContent>
        </Styled.FooterContentWrapper>
      </Styled.AppFooter>
    </Styled.AppContainer>
  );
}

export default App;
