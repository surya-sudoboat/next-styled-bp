import React from 'react'

import {
  Footers,
  FooterContainer,
  FooterDetails,
  Footercontent,
  FooterDetailsWrap,
  LogoHolder,
  FooterQuotes,
  Quotes,
  SocialMediaTitle,
  SocialmediaHolder,
  FooterScaner,
  SocialMediaLogo,
  GetApp,
  FooterImgHolder,
  ColoredInstagram,
  DuplicateGetApp,
  Socials,
  App,
  ImgWrap,
  Scanner,
  Span,
  Instagram,
  Twitter,
  Linkedin,
  ColoredTwitter,
  ColoredLinkedin,
  DuplicateFooterHolder,
  PageLinks,
  PageLink,
} from './footer.module'

const Footer = () => {
  return (
    <Footers>
      <FooterContainer>
        <FooterDetails>
          <FooterDetailsWrap>
            <DuplicateFooterHolder>
              <Footercontent>
                <LogoHolder>
                  <img
                    src="/assets/HeroImages/logo.svg"
                    alt="Logo"
                    width="100%"
                    height="100%"
                  />
                </LogoHolder>
                <FooterQuotes>
                  <Quotes>
                    <div>Your most</div>
                    <div>
                      meaningful
                      <Span> creator network.</Span>
                    </div>
                  </Quotes>
                </FooterQuotes>
              </Footercontent>
              <DuplicateGetApp>
                Get our app now available on both
                <App>
                  <img
                    src="/assets/footer/play-store-logo.svg"
                    alt="playstore"
                    style={{ width: '100%' }}
                  />
                </App>
                <App>
                  <img
                    src="/assets/scannerModal/appStore.svg"
                    alt="appstore"
                    style={{ width: '100%' }}
                  />
                </App>
              </DuplicateGetApp>
            </DuplicateFooterHolder>
            <FooterScaner>
              <GetApp>
                Get our app now available on both
                <App>
                  <img
                    src="/assets/footer/play-store-logo.svg"
                    alt="playstore"
                    style={{ width: '100%' }}
                  />
                </App>
                <App>
                  <img
                    src="/assets/scannerModal/appStore.svg"
                    alt="appstore"
                    style={{ width: '100%' }}
                  />
                </App>
              </GetApp>
              <Scanner>
                <div>
                  {/* <img
                    src="../assets/footer/qr-bg.png"
                    alt="qr"
                    width="100%"
                    height="100%"
                  /> */}
                </div>
                <div>
                  <img
                    src="/assets/footer/doodle.svg"
                    alt="scannerinfo"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Scanner>
            </FooterScaner>
            <SocialmediaHolder>
              <SocialMediaTitle>
                DATRUX SYSTEMS PRIVATE LIMITED
              </SocialMediaTitle>
              <SocialMediaLogo>
                <Socials>
                  <Instagram
                    src="/assets/footer/instagram.svg"
                    alt="instagram"
                    height="auto"
                    width="100%"
                  />
                  <ColoredInstagram
                    src="/assets/footer/coloredInstagram.svg"
                    alt="instagram"
                    height="auto"
                    width="100%"
                  />
                </Socials>
                <Socials>
                  <Twitter
                    src="/assets/footer/twitter.svg"
                    alt="twitter"
                    height="auto"
                    width="100%"
                  />
                  <ColoredTwitter
                    src="/assets/footer/coloredTwitter.svg"
                    alt="twitter"
                    height="auto"
                    width="100%"
                  />
                </Socials>
                <Socials>
                  <Linkedin
                    src="/assets/footer/linkedin.svg"
                    alt="linkedin"
                    height="auto"
                    width="100%"
                  />
                  <ColoredLinkedin
                    src="/assets/footer/coloredLinkedin.svg"
                    alt="linkedin"
                    height="auto"
                    width="100%"
                  />
                </Socials>
              </SocialMediaLogo>
            </SocialmediaHolder>
            <PageLinks>
              <PageLink href="/privacy-policy" target="_blank">
                <span>Privacy Policy</span>
              </PageLink>

              <PageLink href="/terms" target="_blank">
                <span>Terms & Conditions</span>
              </PageLink>
            </PageLinks>
          </FooterDetailsWrap>
        </FooterDetails>
        <FooterImgHolder>
          <ImgWrap>
            <img
              src="/assets/footer/footer-mockup.avif"
              alt="footerMobile"
              height="auto"
              width="100%"
            />
          </ImgWrap>
        </FooterImgHolder>
      </FooterContainer>
    </Footers>
  )
}

export default Footer
