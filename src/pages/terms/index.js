/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'

const ContentSection = styled.div`
  /* general */
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-style: normal;
  color: #2a2b2e;
  overflow-x: hidden;
  background: #ffffff;

  /* reset */
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #000;
    margin: 0px;
    /* font-size: 46px; */
    font-weight: 900;
  }

  p,
  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #000;
    margin: 0px;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }

  .container,
  .content-section {
    padding: 1rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .content-section h1 {
    margin-bottom: 20px;
  }
  .content-section h2 {
    margin-top: 20px;
  }

  .inside-content {
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media only screen and (max-width: 600px) {
    .container {
      padding: 16px;
    }

    .content-section {
      padding: 1rem;
    }

    .inside-content {
      padding-left: 16px;
    }
  }
`

const index = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <ContentSection>
        <div className="container">
          {/* <!-- brands --> */}
          <div className="content-section">
            <h1>Brand - Terms & Conditions</h1>
            <h2>WELCOME to HashFame</h2>
            <p>
              This is the official site (“Site”) of Datrux Systems Pvt Ltd
              (“Company”), a company duly incorporated under the laws of India
              and other sites linking to these Terms of Use, including mobile
              versions of such sites (collectively, the “Sites” or,
              individually, a “Site’’)
            </p>
            <p>
              This Site is an online portal that allows organized interaction
              with social media influencers. This Site brings together
              companies/ individuals who are seeking valuable inputs
              recommendations and endorsements on specific brands/topics and
              bloggers/individuals/social media influencers who are willing to
              provide such inputs.
            </p>
            <p>
              HashFame can be used by digital marketing companies, brands, PR
              agencies for identifying the right influencers who could
              potentially promote their brands, products or services. HashFame
              has distinct products and services to cater to various
              requirements. HashFame Scout (Built to Help You Discover, Qualify,
              and Collaborate with Real and Relevant Influencers and Content
              Creators).
            </p>
            <p>
              HashFame is also a platform for influencers (people having large
              presence in various social media platforms like Facebook, Twitter,
              Instagram, YouTube etc who have large followers, subscribers) who
              love to monetise their digital media presence by listing through
              HashFame, so that their social media presence can be commercially
              benefited by endorsing and commenting on brands that they prefer.
            </p>
            <p>
              The Site is thus a marketplace for digital marketing companies,
              brands, PR agencies and influencers.
            </p>
            {/* <!--  --> */}
            <h2>DEFINITION</h2>
            <p>
              “Services” any services offered on or through the Site, to a guest
              or a registered user (hereafter “Agreement”).
            </p>
            <p>
              “Content” shall mean and include any inputs on specific
              brands/topics by any user including any blogger/individuals/
              social media influencers which may be in the form of text,
              reviews, comments, data, information, images, photographs, music,
              sound, video or any other material or any reactions thereto.
            </p>
            <p>
              ‘'User’' shall mean and include digital marketing companies/
              brands, individuals/ and PR agencies and influencer.
            </p>
            <p>
              Influencer” shall mean persons who is active in social medias
              (like Facebook, Twitter Instagram, YouTube etc and/ or who has
              substantial followers, subscribers, and who has the ability to
              influence other social media users who have been included in
              HashFame database either as registered influencers or unregistered
              influencers.
            </p>
            <p>
              ‘’Registered Influencer’’ shall mean those who have volunteered to
              provide their personal details into include in HashFame database
              and registered their name as an influencer.
            </p>
            <p>
              Unregistered influencers shall mean influencer identified by
              HashFame from its own research whose contact and coordinates are
              extracted from various public sources.
            </p>
            <p>
              “Personal information” shall mean and include any information
              relating to the user including name, email id, phone number,
              location, gender, IP address, address, photograph and economic,
              cultural or social identity of the user;
            </p>
            {/* <!--  --> */}
            <h2>ELIGIBILITY</h2>
            <p>
              By using the Services, you represent and warrant that you are
              above the 18 years of age and qualified to enter into contract. If
              you are not eligible to enter into contracts, then please
              discontinue use of the Services and leave now.
            </p>
            <p>
              If you are the parent or guardian of a child under 18 years of
              age, by registering/by creating an account or profile on the Site,
              you provide your consent to your child’s registration and you
              agree to be bound by these Terms in respect of their use of our
              Site. We will at all times assume (and by using this Site you
              warrant that) you have the legal capacity to enter into the
              agreement (i.e. that you are of sufficient age and mental capacity
              and are otherwise entitled to be legally bound in contract).
            </p>
            {/* <!--  --> */}
            <h2>TERMS OF USE</h2>
            <p>
              Please read the following terms and conditions carefully before
              you start to use the Services, as they form the entire agreement
              between you (sometimes referred to herein as ” You” or ” Your” or
              “User”) and, HashFame ( sometimes referred to herein as “we” or ”
              us” or ‘'Company’').When accessing the information available
              through HashFame, creating an Account (“Account”) or purchasing a
              Subscription (” Subscription”) to HashFame you accept the Terms
              contained herein, without modifications and reservations of any of
              the Terms as contained herein, and by accessing the Site, you
              represent and warrant that you have read and understood, and agree
              to be bound by, all of the terms and conditions contained in this
              Agreement without limitation or qualification. Use or access of
              any part of the Site constitutes unconditional acceptance of these
              terms.
            </p>
            <p>
              If you are an Influencer, apart from the terms of use detailed
              herein, the particular terms applicable to them is narrated in
              this link Please read the same and agree to those terms as well
              before use of this Site.
            </p>
            <p>
              IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, YOU MAY NOT USE
              THE SERVICES AND SHOULD NOT PROCEED TO CREATE ANY ACCOUNTS OR
              ACQUIRE ANY SUBSCRIPTIONS TO THE SERVICES. BY USING THE SERVICES,
              YOU ARE AGREEING TO BE BOUND BY THIS AGREEMENT, INCLUDING ALL
              AMENDMENTS MADE HERETO FROM TIME TO TIME.
            </p>
            <p>
              You understand that our services are open only to persons who
              provide a valid mobile number and personal information. You are
              required to provide true, correct and accurate personal
              information. However, you can browse the Site without providing
              any personal information.
            </p>
            <p>
              You understand that the operation of the Services, including your
              Content, may be (a) unencrypted and involve (b) transmissions over
              various networks; (c) changes to conform and adapt to technical
              requirements of connecting networks or devices and (d)
              transmission to HashFame’s third party vendors and hosting
              partners to provide the necessary related services required to
              operate and maintain the Services. HashFame has taken reasonable
              security measures to mitigate or minimize these risks, However,
              HashFame is not giving any assurance or guarantee of
              non-occurrence of the above event nor will have no liability to
              you for any unauthorized access or use of any of Your Content, or
              any corruption, deletion, destruction or loss of any of Your
              Content.
            </p>
            <p>
              This Site is made by an Indian company with an intent to provide
              services to Indian customers, if you are a user, influencer from a
              country other than India, you may know that HashFame may not have
              complied with the laws of your country and You may use this site
              knowing this limitation. HashFame has made its best efforts to be
              in compliance with the laws India. However, it is your
              responsibility to determine that your specific actions using the
              HashFame platform and your participation in the HashFame Platform
              are in compliance with laws, rules and regulations applicable to
              You. You are solely responsible for all content posted by you in
              HashFame and commercial and other business you may have entered
              into between You and another user/ Influence
            </p>
            <p>
              This Site may contain links to other websites, web pages and
              services which may have their own terms and conditions of use and
              you shall be bound by such terms and conditions of use. We are not
              responsible for the contents of any such external hyperlinks, and
              references to any external links should not be construed as an
              endorsement of the links or their content. Use of such hyperlinks
              and third-party content contained therein and other sites is
              entirely at your own risk. The Company does not make any
              representations or warranties about any such sites you may access
              through the Site. Further, such other sites are not covered by the
              Company’s Privacy Policy and the information usage practices may
              be different from ours. Users should consult the privacy policies
              of such sites before submitting any personal information, as we
              are not responsible for and have no control over the manner in
              which such sites collect, use, disclose, or otherwise process your
              personal information.
            </p>
            <p>
              The Site shall use cookies to monitor Site visitors and traffic
              and by agreeing to use the Site, you agree to use of cookies You
              shall ensure that prior to any third party accessing the Site
              through your electronic device you shall cause such person to
              understand and accept the Terms contained herein. If you do not
              understand the Terms herein, or do not agree to be bound by these
              Terms, you may not use or otherwise access this Site in any
              manner.
            </p>
            <p>
              HashFame reserves the right to use Your name and/or Your business
              name as a reference for marketing or promotional purposes on
              HashFame website and in other communication with existing or
              potential HashFame customers. You further agree that You will
              place the HashFame logo or company name in a visible spot on Your
              website homepage and anyplace where HashFame Content or
              Third-Party Data is displayed, unless otherwise agreed by separate
              agreement.
            </p>
            {/* <!--  --> */}
            <h2>SUBSCRIPTION</h2>
            <p>
              Your Subscription may start with trial version. The trial version
              of your membership lasts for seven days, or as otherwise specified
              during sign-up and is intended to allow new members and certain
              former members to try the service. In order to start free trial,
              you will be required to provide certain personal information
              including your name, salutation, email address, phone number and
              your designation (i.e. Whether you want to access as brand, agency
              or influencer/similar persons.)
            </p>
            <p>
              Free trial eligibility is determined by HashFame at its sole
              discretion and we may limit eligibility or duration to prevent
              free trial abuse. We reserve the right to revoke the free trial
              and put your account on hold in the event that we determine that
              you are not eligible.
            </p>
            <p>
              You can upgrade the account anytime by choosing one of our paid
              plan options, or you can contact our product specialist to create
              a customized plan. You can also request a live demo of the full
              version, and our product specialist will get in touch with you. To
              view the monthly membership price and end date of your free trial
              period, visit our website and click the "Pricing" link at the
              bottom of the main page. Payment of subscription fee is merely
              enabling you to access HashFame database of influencers. No other
              rights or privileges other than detailed here in is assumed or
              granted thereby. Once the subscription period is over, and if you
              fail to pay the renewal fee, HashFame shall have the right to deny
              access to you without giving any prior intimation.
            </p>
            <p>
              When you provide the Site with any information, the information
              has to be accurate and complete. The Company shall assume that any
              information provided by you is accurate and shall not verify the
              same. Care must be taken to not impersonate anyone else or choose
              names that are offensive or that violate anyone’s rights. If you
              don’t follow these rules or if we believe the details are not
              correct, current, or complete, we have the unconditional right to
              refuse you access to or use of the Site, or any of its resources.
            </p>
            <p>
              Any Subscription to or use of any service is completely voluntary
              in nature. Upon such enrolment, your mobile number will serve as
              unique identification number for using the services on the Site.
              Accordingly, you agree to (a) provide correct details when
              prompted on the Site and failure to do so may invalidate your
              request to use such services (b) authorise HashFame to retain the
              information shared by you for the purpose of using the Site and/or
              the services and for any marketing campaign of the Company and/or
              third-party service providers and (c) by giving your details you
              agree to abide by the Terms of Use and applicable Privacy Policy.
            </p>
            {/* <!--  --> */}
            <h2>YOUR ACCOUNT</h2>
            <p>
              You may only create and hold one Account/ Profile (“Account”) on
              HashFame. Each Account may have a single Subscription associated
              with it. Additionally, users are prohibited from selling, trading
              or otherwise transferring their accounts to another party.
            </p>
            <p>
              You are solely responsible for all uses of your Account, and
              associated Subscription. You must treat your Account and/or
              Subscription passwords, usernames, and the like as confidential
              and you must not disclose them to any other person or entity.
            </p>
            <p>
              If you use this site, you are responsible for maintaining the
              confidentiality of your account/profile and/or password and for
              restricting access to your computer, and you agree to accept
              responsibility for all activities that occur under your account or
              password.
            </p>
            <p>
              Our Site provides certain services only upon upgrading your
              account and providing personal information. Our collection use and
              retention of your personal information is subject to the privacy
              policy which is available at this link. By providing such personal
              information, you consent to receive all information relating to
              the Site, the services offered by the Site and/or third-party
              providers, all communication and instructions for availing special
              offers and promotional benefits. You shall solely be responsible
              for the appropriate use of the same.
            </p>
            <p>
              You authorize the Company and/or authorized third parties to
              retain the information shared by you for the purpose of using the
              Site and/or the services and for any marketing campaign of the
              Company and/or third-party service providers. The Company reserves
              the right to refuse service, terminate accounts or remove or edit
              any Content in its sole discretion.
            </p>
            <p>
              By providing the Company and/or third-party service providers with
              any information including personal information through use of the
              Site shall be deemed to be your consent to the Company and/or
              third-party service providers to communicate with you through
              email, SMS, phone calls, direct mail and other means of
              communication. We may use your Personal information include
              without limitation, to provide you with information you requested
              from HashFame or its Users and/ or to let you know about features,
              functions, improvements or changes to the Platform, to facilitate
              your identification of desired Users or other aspects of your
              Account.
            </p>
            <p>
              You may request to opt-out of receiving such communication from us
              at any time by contacting us at
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>. You
              acknowledge that opting out of receiving such information may
              impact Your use of and ability to fully use the HashFame Platform.
            </p>
            <p>
              User experience may vary depending on the type of the device and
              the operating system that you use, and the Company accepts no
              responsibility for any lack of functionality due to your equipment
              (including your device, internet connection, operating system or
              settings and software).
            </p>
            <p>
              You shall be responsible for paying all costs and expenses that
              you may incur while using the Site (including, but not limited to
              Internet data service access charges). You acknowledge that
              HashFame is not responsible for third party access to your account
              that results from theft or misappropriation of your account. You
              further agree that your use of the service is at your sole and
              exclusive risk. The Company shall not be held responsible for your
              interactions with other users and any other parties with whom you
              interact through the Site.
            </p>
            <p>
              We reserve all rights, in our sole discretion to suspend, disable
              access to or otherwise to restrict access to HashFame platform or
              to User Content if we find any of the following:
            </p>
            <ul className="inside-content">
              <li>violation of these Terms and our policies and procedures</li>
              <li>
                conduct of activities that are harmful to the HashFame Platform,
                to HashFame or to any other User or third party or which or
              </li>

              <li>When found objectionable</li>
              <li>If there is any legitimate reason for such removal.</li>
              <li>
                HashFame and its associates reserve the right to refuse or
                cancel service, terminate accounts, or remove or edit content in
                our sole discretion. HashFame does not knowingly collect, either
                online or offline, personal information from persons under the
                age of eighteen. If you are under 18, you may use
                <a href="https://hashfame.com/">HashFame.com</a> only with
                permission of a parent or guardian.
              </li>
            </ul>
            <p>
              You may cancel your Account in full, or associated Subscription at
              any time by visiting{' '}
              <a href="https://hashfame.com/">HashFame.com</a>. You hereby agree
              to be personally liable for any and all charges incurred by your
              username and password until you terminate your Account or
              Subscriptions as provided herein. You hereby acknowledge and agree
              that if you cancel your Account or Subscriptions, the access
              associated with that membership will be removed.
            </p>
            {/* <!--  --> */}
            <h2>RIGHT TO USE</h2>
            <p>
              The Company grants you the non-exclusive, non-transferable,
              revocable, limited right to use the data contained in the Site for
              your personal and commercial use. If you are a digital marketing
              companies, brands, PR agency, then you by registering as a User
              obtains the right to know about various influencers listed in the
              Site and their digital presence related information, profiles,
              their social media use, activities.
            </p>
            <p>
              This Site provides you to search, discover and shortlist
              influencers using search options by providing appropriate search
              criteria, set up trackers for ongoing influencer campaigns, create
              and share campaign reports, view past reports, analyse influencer
              marketing and earned media performance and benchmark against
              competition, create a database for influencers with whom you work
              frequently, add influencers to the network, create list of
              influencers and merge the same, use HashFame Chrome Extension to
              instantly generate influencer profiles while surfing social media
              platforms. You shall be able to filter and create customised
              databases of the influencers based on the services/ verticals /
              interest/ hobbies activities of the influencers enabling you to
              approach them for your social media campaigns and marketing
              supports.
            </p>
            <p>
              Once you find out your desired influencer, You can approach them
              by connecting the influencer either through E-mails as well as DM
              through Instagram and Twitter.
            </p>
            <p>
              However, for all your interactions with influencers, with other
              users and any other parties you alone is responsible. HashFame
              shall not be a party nor responsible in any manner in all disputes
              between you and third parties including influencers. However, we
              reserve the right, without any obligation, to intercede in any
              disputes. You agree that the Company will not be held responsible,
              answerable for any of your disputes with other users and
              Influencers whom you met through HashFame. We make no
              representations or warranties as to the conduct of any
              user/blogger/social media influencer.
            </p>
            <p>
              Your license to use the Site is subject to the limitations,
              conditions, and restrictions established by us from time to time,
              in our sole discretion.
            </p>
            <p>
              You grant permission for HashFame / and any authorized third
              party, as a part of the Services, to contact you (via email, phone
              number or by means of messages on public social media platforms)
            </p>
            <p>
              You shall: (a) comply with any reasonable codes of conduct,
              policies or other notices HashFame provides You or publishes in
              connection with the Service at the Site, (b) promptly notify
              HashFame if You learn of a security breach related to the Service
              and shall (c) create work/post Content, in good faith inter alia
              by maintaining high standards of marketing ethics, respecting
              human rights, respecting the environment and supporting community
              organisations.
            </p>
            <p>
              Unless otherwise authorized, you may not use, copy, reproduce,
              modify, publicly perform or display, create derivative works of,
              sell, auction, loan, lease, rent, distribute, transfer or disclose
              all or any part of the Site (including, without limitation, any
              screenshots, videos, documentation or manuals relating to the
              Site). All other rights are reserved with the Company.
            </p>
            {/* <!--  --> */}
            <h2>License Restrictions</h2>
            <p>Unless otherwise authorized, you shall not:</p>
            <ul className="inside-content">
              <li>
                interferes or attempts to interfere with the proper working of
                the Platform or any third-party participation;
              </li>

              <li>
                Sublicense to, transfer, network, transmit, distribute, or
                permit use of the Site by, any third party.
              </li>

              <li>
                Take any action that: may unreasonably encumber the HashFame
                Platform.
              </li>
              <li>
                bypasses measures that are used to prevent or restrict access to
                the HashFame Platform;
              </li>
              <li>develop a competing platform</li>

              <li>
                Transmit or communicate any data or commit any act that is
                unlawful, harmful, threatening, abusive, harassing, defamatory,
                demeaning, vulgar, obscene, invasive of another's privacy,
                hateful, or racially, ethnically or otherwise objectionable;
              </li>

              <li>
                Transmit or post Content in inappropriate categories or areas on
                the Site;
              </li>

              <li>
                send any repeat communication to any influencer or other user
                once the said influencer or user refused or denied your connect
                request.
              </li>
              <li>
                transmit more request messages in a given period of time than a
                human can reasonably produce in the same period by using a
                conventional online web browser;
              </li>

              <li>
                store on any network, hard drive, computer or cloud-storage any
                HashFame Intellectual Property, HashFame Content or Third-Party
                Data or other information obtained from the Services or the Site
                for any period of more than 3 days after termination or
                expiration of this Agreement
              </li>

              <li>
                modify, adapt or hack the Service to, or otherwise attempt to
                gain unauthorized access to the Service or its related systems
                or networks
              </li>

              <li>
                Falsify or delete any author attributions, legal or other proper
                notices or proprietary designations or labels of origin or
                source of software or other material contained in a Content that
                is uploaded on the Site;
              </li>

              <li>
                Transfer your account, username and password to a third party
                without our prior consent;
              </li>

              <li>Use the Site if you are below 18 years of age.</li>

              <li>
                Impersonate any person or entity or falsely state or otherwise
                misrepresent your affiliation with a person or entity;
              </li>

              <li>
                Forge headers or otherwise manipulate identifiers in order to
                disguise the origin of any data transmitted to other users;
              </li>

              <li>
                Transmit, access or communicate any data that you do not have a
                right to transmit under any law or under contractual or
                fiduciary relationships (such as inside information, proprietary
                and confidential information learned or disclosed as part of
                employment relationships or under non-disclosure agreements);
              </li>

              <li>
                In any manual or automated way copy, appropriate, use or
                disclose any copyrighted text, or other intellectual property,
                rights of publicity, privacy or contract rights or otherwise
                misuse or misappropriate HashFame Platform information or
                content including but not limited to, use on a mirrored,
                competitive, or third-party site;
              </li>

              <li>
                Transmit, access, or communicate any data that infringes any
                patent, trademark, trade secret, copyright or other proprietary
                rights of any party or is in any manner plagiarised;
              </li>

              <li>
                Interfere with or disrupt the Site or any other user’s use of
                the Site
              </li>

              <li>
                Use any automated system including but not limited to robots,
                spiders, offline readers, crawlers, scrapers to access, copy,
                maintain or compile the HashFame Platform or content thereon for
                any purpose without HashFame’’s prior written approval;
              </li>

              <li>
                Include programs which contain viruses, ‘time bombs’ and/or
                ‘Trojan horses’ or any other computer code, files or programs
                designed to interrupt, harm, overload, collapse, destroy or
                limit the functionality of any computer software, Site or
                hardware or telecommunications;
              </li>

              <li>
                Intentionally or unintentionally violate any applicable local,
                state, national or international law, including securities
                exchange and any regulations requirements, procedures or
                policies in force from time to time relating to the Site;
              </li>

              <li>Use the Site in any way related to any illegal activity;</li>

              <li>
                Harm the Site including using any program or other mechanism to
                slow or “crash” the network;
              </li>

              <li>
                Disobey any policy or regulations established from time to time
                regarding use of this Site or any networks connected to this
                Site;
              </li>

              <li>
                Threaten the unity, integrity, defence, security or sovereignty
                of India, friendly relations with foreign states, or public
                order or causes incitement to the commission of any cognizable
                offence or prevents investigation of any offence
              </li>

              <li>insulting any other nation;</li>

              <li>
                Allow usage by others in such a way as to violate these Terms.
              </li>

              <li>
                This license shall automatically terminate if you violate any of
                the above restrictions. Upon termination of the license, you
                must destroy any downloaded materials in your possession in any
                format whatsoever including in electronic or printed format.
              </li>

              <li>
                We may alter, suspend, or discontinue any aspect of the Services
                at any time, including the availability of any feature,
                database, or content. We may also impose limits on certain
                features and aspects of the Services or restrict your access to
                parts or all of the Services without notice or liability.
              </li>

              <li>
                You agree that HashFame has no responsibility or liability for
                the deletion or failure to store any content maintained or
                obtained by the Service.
              </li>
            </ul>
            {/* <!--  --> */}
            <h2>YOU PERMIT US TO DO THE FOLLOWING:</h2>
            <p>
              The User grants HashFame and/or authorized third parties,
              permission to use and retain your personal information and data
              for the purpose of providing the services and for any marketing
              campaign of the Company and/or third-party service providers.
            </p>
            <p>
              Your continued use/access of the Site signifies your acceptance of
              any revisions and explicit renewal of your consent to such
              revisions. These Terms control the relationship between the
              Company and you. They do not create any rights or obligations to
              third parties.
            </p>
            <p>
              HashFame does not claim any ownership interest or rights in Your
              User Content and nothing in these Terms shall be deemed to
              restrict rights You may have in Your User Content.
            </p>
            <p>
              Changes to the Terms will be effective as on the date they are
              posted. The Company is not bound to provide you with any updates
              or notice of such revisions to the Terms and you should visit the
              Terms regularly to review the applicable Terms. The User grants
              HashFame and/or authorised third parties, the right to assign all
              the Terms and all of the policies and other documents incorporated
              or referenced in it (including all rights, licenses, and
              obligations under it or them) to any individual/company/agency of
              HashFame’s choice, in whole or in part and without notice.
            </p>
            {/* <!--  --> */}
            <h2>USE OF CONTENT</h2>
            <p>
              Your right to make use of this Site any Content appearing on it is
              subject to your compliance with these Terms.
            </p>
            <p>
              Modification or use of Content on this Site for any purpose not
              permitted by these Terms may be a violation of the Copyrights
              and/or Trademarks and may be prohibited by law.
            </p>
            <p>
              The data relating to the influencers and user are put as it is as
              provided by the concerned parties and we have not verified fully
              the veracity or accuracy of the same. The data may be erroneous,
              not up to date. We are not giving any representation or accuracy
              of the content.
            </p>
            <p>
              We have categorised the influencers and users based on some
              logical classification codified into our software. However, the
              logic applied, or the software code may be inaccurate resulting in
              wrong categorisation of the influencers. We are not giving any
              assurance of the accuracy of the categorisation, classification
              and listing.
            </p>
            We do not guarantee:
            <ul className="inside-content">
              <li>
                the existence, quality, safety, suitability, or legality of the
                Content shared and/or provided by the Influencers or collated
                about influencers and Users.
              </li>
              <li>
                the truth, accuracy or suitability of any description or any
                other aspect referred to by Influencers Users on the HashFame
                Platform,
              </li>
              <li>the performance or conduct of any User or third party or</li>

              <li>
                the legality or compliance with laws, rules, regulations, orders
                and decisions that may be applicable to any relationship between
                Users or the subject matter thereof.
              </li>

              <li>
                While we may provide information that may be helpful in
                assisting you to evaluate another User/ Influencer and their
                status in the HashFame community, HashFame does not endorse any
                particular User/ Influencer and/or their Content.
              </li>

              <li>
                Any reference to a User being “Verified” (or similar language)
                only indicates that the Influencer/User has completed a
                verification or identification process on our Platform and
                nothing else.
              </li>

              <li>
                You may access and display the Content for commercial and
                personal use. The content may not otherwise be copied,
                reproduced, framed, republished, uploaded, posted, transmitted,
                distributed or used in any way unless specifically authorized by
                the Company.
              </li>

              <li>
                Using any content on any other web site or networked computer
                environment is prohibited. Also, to the extent permitted by
                applicable law, decompiling, reverse engineering, disassembling,
                or otherwise reducing the code used in any software on this Site
                into a readable form in order to examine the construction of
                such software and/or to copy or create other products based (in
                whole or in part) on such software, is prohibited.
              </li>

              <li>
                You understand that by using the Site, you may be exposed to
                materials that you may consider to be offensive or
                objectionable. You agree that you must evaluate, and bear all
                risks associated with, the use or disclosure of materials found
                on the Site. You further acknowledge and agree that you will not
                rely on any content available on or through the Site or use such
                content as a substitute for professional advice.
              </li>
              <li>
                You hereby absolutely and irrevocably assign to the Company the
                right to use all the data you provided while logged in or using
                the Site and the company has all the rights to reproduce,
                republish and create databases based on the said data.
              </li>

              <li>
                Further the Company shall have the right to use, explore,
                exploit and utilize the said Content worldwide and in perpetuity
                without any compensation payable to you with respect to the
                Content that you submit, post, transmit or otherwise make
                available on the Site.
              </li>

              <li>
                We may modify or alter or adapt your Content solely to transmit,
                display or distribute it over computer networks and in various
                media and/or make changes to your Content as are necessary to
                conform and adapt that Content to any requirements or
                limitations of any networks, devices, services or media. Any
                modification made by us for the purposes as set forth above,
                does not in any manner make us assume any responsibility or any
                liability arising from any Content.
              </li>
            </ul>
            {/* <!--  --> */}
            <h2>RETENTION POLICY</h2>
            <p>
              We collect data as and when you use HashFame services. What we
              collect, why we collect it, and how you can manage your
              information are described in our Privacy Policy. This retention
              policy describes why we hold onto different types of data for
              different periods of time.
            </p>
            <p>Information retained until he/she removes it.</p>
            <p>
              We offer a range of services that allows you to correct or delete
              data stored your HashFame Account. For example, you can:
            </p>
            <ul className="inside-content">
              <li>Edit your personal info</li>
              <li>Delete items from MyList</li>
              <li>Delete content like photos and documents</li>
              <li>Remove a product from the HashFame Account</li>
              <li>Delete your HashFame account entirely</li>
              <li>
                We’ll keep this data in your Account until you choose to remove
                it. And if you use our services without signing in to a HashFame
                Account.
              </li>

              <li>
                Information retained until your HashFame Account is deleted
              </li>

              <li>
                We keep some data for the life of your HashFame Account if it’s
                useful for helping us understand how you interact with our
                features and how we can improve our services.
              </li>

              <li>
                Information retained for extended time periods for limited
                purposes
              </li>
            </ul>
            <p>
              Sometimes business and legal requirements oblige us to retain
              certain information, for specific purposes, for an extended period
              of time. For example, when HashFame processes a payment for you,
              or when you make a payment to HashFame, we’ll retain this data for
              longer periods of time as required for tax or accounting purposes.
              Reasons we might retain some data for longer periods of time
              include:
            </p>
            <ul className="inside-content">
              <li>Security, fraud & abuse prevention</li>
              <li>Financial record-keeping</li>

              <li>Complying with legal or regulatory requirements</li>
              <li>Ensuring the continuity of our services</li>
              <li>Direct communications with HashFame</li>
            </ul>
            <p>LINKS TO THIRD PARTY SITES/THIRD PARTY SERVICES</p>
            <div className="inside-content">
              <p>
                The Site may contain links to other websites (“Linked Sites”).
                The Linked Sites are not under the control of HashFame and
                HashFame is not responsible for the contents of any Linked Site,
                including without limitation any link contained in a Linked
                Site, or any changes or updates to a Linked Site. HashFame is
                providing these links to you only as a convenience, and the
                inclusion of any link does not imply endorsement by HashFame of
                the site or any association with its operators.
              </p>

              <p>
                Certain services made available via
                <a href="https://hashfame.com/">HashFame.com</a> are delivered
                by third party sites and organizations.
              </p>

              <p>
                Any opinions, advice, statements, services, offers, or other
                information or content expressed or made available by third
                parties, including information providers, Users or any other
                User of HashFame Platform, are those of the respective author(s)
                or distributor(s) and not of HashFame. HashFame does not
                guarantee the accuracy, completeness, or usefulness of any
                content, nor its merchantability or fitness for any particular
                purpose, of such information.
              </p>

              <p>
                However, by using any product, service or functionality
                originating from the{' '}
                <a href="https://hashfame.com/">HashFame.com</a> domain, you
                hereby acknowledge and consent that HashFame may share such
                information and data with any third party with whom HashFame has
                a contractual relationship to provide the requested product,
                service or functionality on behalf of
                <a href="https://hashfame.com/">HashFame.com</a> users and
                customers.
              </p>
            </div>
            {/* <!--  --> */}
            <h2>INDEMNITY</h2>
            <p>
              We only make available the Content (as defined hereinafter) on
              various brands/topics on an ‘as is’ basis, as provided by
              bloggers/individuals/social media influencers. Nothing contained
              herein shall be deemed to construe as the advice, views, opinions
              or beliefs of the Company or endorsement of any brand/topic by the
              Company, and the Company makes no claim of accuracy of any user
              posted material. The bloggers/individuals/social media influencers
              shall be solely responsible for any Content being provided by
              him/her and any liability arising in respect thereof including
              against the Company and must ensure compliance with all laws or
              regulations applicable to him/her and the Content.
            </p>
            <p>
              You shall be solely responsible for your interactions with other
              users/influencers and any other parties with whom you interact
              through the Site, provided however that we reserve the right, but
              have no obligation, to intercede in any disputes. You agree that
              the Company will not be held responsible for any liability
              incurred as a result of such interactions. We make no
              representations or warranties as to the conduct of any
              user/blogger/social media influencer.
            </p>
            <p>
              You hereby indemnify, defend and hold harmless the Company and all
              persons claiming under the Company (“Indemnified Persons”) from
              and against any and all losses, claims, demands, liabilities,
              charges, penalties, fines, damages, costs or expenses, including
              reasonable legal fees and expert witness fees, resulting from your
              breach of any of the provisions mentioned in these Terms,
              representations or warranties, and/or infringement by you of
              Materials, Copyrights and/or Trademarks and Content, including any
              claims against you alleging misuse or unauthorized usage of the
              information, data and Content available on and/or from your use of
              the Site itself.
            </p>
            <p>
              You agree that the Company will not be held responsible, in any
              manner whatsoever, for any Content or liability arising out of any
              Content posted/displayed on the Site and/or any use /access of the
              same by any third party and is under no obligation to disable or
              otherwise restrict such use/access.
            </p>
            <p>
              Notwithstanding anything to the contrary contained herein, it is
              expressly clarified that you shall solely be responsible for the
              Content or any liability arising from any Content that you provide
              transmit, store or upload on the Site or when making use of the
              Site. You are solely responsible for your Content and assume all
              risks associated with use of your Content, including any reliance
              on its accuracy, completeness or usefulness by others. We do not
              make any guarantee regarding the accuracy, currency, suitability
              or quality of any Content, and we assume no responsibility for any
              Content.
            </p>
            {/* <!--  --> */}
            <h2>INTELLECTUAL PROPERTY RIGHTS</h2>
            <p>
              This Site and any materials incorporated by the Company on this
              Site including, without limitation, any text, graphics, images,
              artwork, illustrations, photographs, animations, music, video,
              audio, audio visual works, designs, logos, software and any other
              content, (other than the Content) (collectively referred to as
              “Material”) are protected by copyrights, patents, trade secrets or
              other proprietary rights owned by or licensed to the Company,
              authorized third parties and/or its licensors (“Copyrights”). Some
              of the logos or other images incorporated by the Company on this
              Site are also protected as registered or unregistered trademarks,
              trade names and/or service marks owned by or licensed to the
              Company or other third parties (“Trademarks”). The Company
              respects the intellectual property rights of others and asks users
              of this Site to do the same. Using our services does not give you
              any ownership of any intellectual property rights in our services,
              the Material, Copyright or Trademarks.
            </p>
            <p>
              You agree that the services, and any content provided on the Site,
              either by the Company or through third party providers, may be
              protected by intellectual property laws of India or the applicable
              laws of any other jurisdiction. Your attempt to modify, copy,
              distribute, transmit, resell, redistribute, broadcast, display,
              perform, reproduce, publish, license, frame, transfer, or
              otherwise use in whole or in part, any intellectual property
              contained in the Material, services and any other content provided
              on the Site may subject you to infringement actions either by the
              Company or third party providers, as the case may be.
            </p>
            {/* <!--  --> */}
            <h2>USER WARRANTIES</h2>
            <p>
              you either own or have all necessary rights, licenses, consent and
              releases necessary to grant HashFame the rights in User Content
              under these Terms
            </p>
            <p>
              that all the information you provide to HashFame is only about
              yourself, or the Account-holder entity, and that all of such
              information is accurate, true, current, and complete;
            </p>
            <p>
              your use of the Service will always comply with the terms of this
              Agreement, and your Account and or Subscriptions will be the use
              of each Account only;
            </p>
            <p>
              HashFame has no role in the creation, either in whole or in part,
              of User Content you provide to HashFame
            </p>
            <p>
              you will remain responsible for all uses of your Subscription,
              safeguard your password, and supervise the use of your
              Subscription
            </p>
            <p>
              neither the User Content nor your posting, uploading, publication,
              submission or transmittal of User Content or HashFame use of Your
              User Content (in whole or part infringes, misappropriates or
              violates any third party’s patent, copyright, trademark, trade
              secret, moral rights or other intellectual property or proprietary
              rights or result in violation of any applicable law, rules,
              regulation or court order.
            </p>
            <p>
              HashFame may exercise any traditional editorial function as to
              User Content including but not limited to proofreading, editing,
              summarizing, digesting or other editing without becoming the
              author of such content.
            </p>
            <p>
              it remains Your sole responsibility to monitor your User Content
              and to guarantee that any edited User Content by HashFame and/or
              third parties is accurate and consistent with your
              representations, warranties and agreements in these Terms.
            </p>
            <p>DISCLAIMER OF WARRANTIES</p>
            <ul className="inside-content">
              <li>
                THIS DISCLAIMER OF WARRANTY CONSTITUTES AN ESSENTIAL PART OF THE
                AGREEMENT.
              </li>

              <li>
                YOU ACKNOWLEDGE AND EXPRESSLY AGREE THAT, UNLESS OTHERWISE
                SPECIFICALLY AGREE IN WRITING, HashFame DOES NOT HAVE ANY
                ASSOCIATION OR BUSINESS AFFILIATION OR CONTRACT WITH ANY SOCIAL
                MEDIA PLATFORM INCLUDING BUT NOT LIMITED TO FACEBOOK, INSTAGRAM
                TWITTER, AND YOUTUBE. YOU UNDERSTAND AND AGREE THAT HashFame IS
                MERELY PROVIDING A PLATFORM FOR YOU TO CONNECT WITH OTHER USERS
                AND SOCIAL MEDIA INFLUENCERS. YOU UNDERSTAND THAT BY REGISTERING
                OR PROVIDING INFORMATION/OR AND ACCESSING SERVICES DIRECTLY OR
                INDIRECTLY FROM THE HashFame PLATFORM, YOU RECEIVE ONLY THE
                ABILITY TO USE THE HashFame PLATFORM AND TO ACCESS OTHER USERS
                WHO MAY BE INTERESTED IN CONNECTING WITH YOU, BEING IT A
                BRAND/COMPANY/MARKTEING AGENCIES,PUBLIC RELATIONS AGENCY,
                INFLUENCERS(WHETHER REGISTERED OR NOT) INCLUDING, BUT NOT
                LIMITED TO, THE ABILITY TO MESSAGE OTHER USERS.
              </li>

              <li>
                YOU FURTHER ACKNOWLEDGE AND AGREE THAT YOU ARE NOT ACTING UPON
                THE ADVICE OR DIRECTION OF HashFame OR ANY OF ITS SUBSIDIARIES,
                AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS. WE ARE NOT
                ADVISING OR GUIDING YOU ON YOUR COMMUNICATIONS OR YOUR
                TRANSACTIONS WITH USERS AND INFLUENCERS OR THIRD PARTIES. WE DO
                NOT VERIFY LEGALITY OF YOUR TRANSACTIONS.
              </li>

              <li>
                YOU EXPRESSLY AGREE THAT HashFame IS NOT A PARTY TO ANY
                RELATIONSHIP OR AGREEMENT BETWEEN YOU AND ANY OTHER USER
                /INFLUENCER AND THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE AND
                EXCLUSIVE RISK. THE SERVICES ARE PROVIDED ON AN “AS IS, WITH ALL
                FAULTS,” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY
                KIND, INCLUDING, WITHOUT LIMITATION: THE AVAILABILITY, ACCURACY
                OF CONTENT OR MATERIALS, INFORMATION, OR SERVICE, AND THE
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </li>

              <li>
                YOU ALSO ACKNOWLEDGE AND AGREE THAT AT ALL TIMES, IT IS YOUR
                RESPONSIBILITY AND NOT HashFame RESPONSIBILITY, WHICH IS
                DISCLAIMED TO THE MAXIMUM EXTENT OF THE LAW, TO BE FAMILIAR
                WITH, TO ABIDE BY AND TO COMPLY WITH ALL RELEVANT FEDERAL,
                STATE, LOCAL, AND INTERNATIONAL LAWS, RULES AND REGULATIONS THAT
                MAY APPLY TO YOU AND YOUR RELATIONSHIP WITH ANY OTHER
                USERS/INFLUENCERS.
              </li>

              <li>
                HashFame EXPRESSLY DISCLAIMS ALL SUCH WARRANTIES. THE ENTIRE
                RISK AS TO THE QUALITY AND TIMELINESS OF THE INFORMATION, AND
                ALL SERVICES PROVIDED BY HashFame IS BORNE EXCLUSIVELY BY YOU.
                HashFame USES PUBLIC DATA AND INFORMATION PROVIDED TO US BY
                THRID PARTIES IN ORDER TO COMPLILE ITS SERVICES. AS SUCH,
                HashFame RELIES ON THE SOCIAL MEDIA PLATFORMS AND OTHER
                PROVIDERS OF THIS INFORMATION FOR ITS ACCURACY AND CURRENTNESS.
                HashFame MAKES NO WARRANTY THAT THE SERVICE OR OUR CONTENT WILL
                MEET YOUR REQUIREMENTS, OR THAT THE SERVICES WILL BE
                UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE; NOR DOES HashFame
                MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM
                THE USE OF THE SERVICE OR AS TO THE ACCURACY OR RELIABILITY OF
                ANY INFORMATION OBTAINED THROUGH THE SERVICE.
              </li>

              <li>
                THE COMPANY EXPRESSLY DISCLAIMS AND WARRANTS THAT HashFame
                PLATFORM IS IN COMPLIANCE WITH LAWS OF ANY PARTICULAR COUNTRY
                AND/OR THAT YOUR USE OF THE HashFame PLATFORM WILL BE IN
                COMPLIANCE WITH APPLICABLE LAWS. ANY MATERIAL DOWNLOADED OR
                OTHERWISE OBTAINED THROUGH THE USE OF THE HashFame PLATFORM IS
                ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
                RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL CLAIMS AND CAUSES
                OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER SYSTEM,
                INTERNET ACCESS, DOWNLOAD OR DISPLAY DEVICE, OR LOSS OF DATA
                THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
              </li>
            </ul>
            <p>LIMITATION OF LIABILITY</p>
            <ul className="inside-content">
              <li>
                WHERE PERMITTED, AND TO THE MAXIMUM EXTENT ALLOWED BY LAW, YOU
                ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR
                ACCESS TO AND USE OF THE HashFame PLATFORM, OR TO THE
                RELATIONSHIP BETWEEN YOU AND HashFame OR BETWEEN YOU AND OTHER
                USERS,(WHETHER BASED IN CONTRACT,TORT,STRICT LIABILITY OR
                OTHERWISE) REMAINS WITH YOU AND NEITHER HashFame NOR ITS
                SUBSIDIARIES, AFFILIATES, OFFICERS, DIRECTORS, INVESTORS,
                EMPLOYEES, PARTNERS, AGENTS, AND LICENSORS WILL BE RESPONSIBLE
                FOR LOST PROFITS, REVENUES OR DATA OR FINANCIAL LOSSES OR
                INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES
                EVEN IF WE HAVE BEEN ADVISED OF THEIR POSSIBILITY OR EVEN IF A
                LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS
                ESSENTIAL PURPOSE AND REGARDLESS OF THE NATURE OF THE CAUSE OF
                ACTION, CLAIM FOR RELIEF OR ALLEGED THEORY OF RECOVERY WHETHER
                IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR
                OTHERWISE.
              </li>

              <li>
                SUBJECT TO THE FOREGOING, IN NO EVENT SHALL THE MAXIMUM
                AGGREGATE LIABILITY OF THE COMPANY IN RELATION TO A PARTICULAR
                CLAIM EXCEED TO THE AMOUNT YOU PAID US TO USE THE SERVICES.
              </li>

              <li>
                NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY
                YOU FROM THE COMPANY OR THROUGH OR FROM THE QORUS PLATFORM,
                SOFTWARE OR CODE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED
                IN THE TERMS
              </li>
            </ul>
            {/* <!--  --> */}
            <h2>ELECTRONIC COMMUNICATIONS</h2>
            <p>
              Visiting <a href="https://hashfame.com/">HashFame.com</a>, sending
              emails to HashFame, constitutes electronic communications. You
              consent to receive electronic communications and you agree that
              all agreements, notices, disclosures and other communications that
              we provide to you electronically, via email and on the Site,
              satisfy any legal requirement that such communications be in
              writing.
            </p>
            {/* <!--  --> */}
            <h2>PRIVACY</h2>
            <p>
              Your use of <a href="https://hashfame.com/">HashFame.com</a> is
              subject to HashFame Privacy Policy. Click here to show and/or
              print a copy of this Privacy Policy, which forms part of these
              Terms. By accepting these Terms, you shall also be deemed to have
              accepted the terms of the Privacy Policy.
            </p>
            <h2>FRAUDULENT TRANSACTIONS</h2>
            <p>
              We reserve the right to recover the costs and lawyers’ fees from
              persons using the Site fraudulently. The Company also reserves the
              right to initiate legal proceedings against such persons for
              fraudulent use of the Site.
            </p>
            {/* <!--  --> */}
            <h2>JURISDICTION</h2>
            <p>
              These Terms of Use and any dispute or claim arising out of or in
              connection with it or its subject matter, existence, negotiation,
              validity, termination or enforceability (including non-contractual
              disputes or claims) shall be governed by, and construed in
              accordance with, the laws of Karnataka, India. Courts in Bangalore
              shall have exclusive jurisdiction in determination of all
              disputes.
            </p>
            <p>
              Any dispute arising out of or in connection with this agreement,
              including any question regarding its existence, validity or
              termination, shall be referred to and finally resolved by
              Arbitration and Conciliation Centre, Bangalore under the laws of
              Indian Arbitration and Conciliation Act, 1996.
            </p>
            <p>
              If any provision of these Terms shall be unlawful, void, or for
              any reason unenforceable, then that provision shall be deemed
              severable for this agreement and shall not affect the validity and
              enforceability of any remaining provisions. This is the entire
              agreement between the parties relating to the matters contained
              herein.
            </p>
            <p>
              Regardless of any statute or law to the contrary, any claim or
              cause of action arising out of or related to use of the HashFame
              Platform or the Terms must be filed within six (6) months, or the
              shortest duration permitted under applicable law if such period is
              greater than 6 months after such claim or cause of action arose or
              be forever barred.
            </p>
            {/* <!--  --> */}
            <h2>AFFIRMATION OF AGREEMENT</h2>
            <p>
              You hereby acknowledge and affirm that you have read this entire
              Agreement and that you agree to be bound by all its terms and
              conditions by clicking where indicated on the Service registration
              page and/or by authorizing the use of your credit or debit card
              for payment of such charges and fees necessary to create an
              Account or purchase a Subscription through Service and for any
              other charges which you may incur.
            </p>
            {/* <!--  --> */}
            <h2>HOW TO CONTACT US</h2>
            <p>
              This Site is published, controlled, owned and operated by the
              Company.
            </p>
            <p>
              Please forward any comments or complaints about the Site to [
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>].
            </p>
            <p>
              Please forward any questions regarding privacy to [
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>]. Please
              forward any questions regarding other legal matters to [
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>].
            </p>
            {/* <!-- end brands --> */}
          </div>

          {/* <!-- Influencer --> */}
          <div className="content-section">
            <h1 style={{ marginTop: '40px' }}>
              Influencer - Terms & Conditions
            </h1>
            <h2>WELCOME to HashFame</h2>

            <p>
              This is the official site (“Site”) of Datrux Systems Pvt Ltd
              (“Company”), a company duly incorporated under the laws of India
              and other sites linking to these Terms of Use, including mobile
              versions of such sites (collectively, the “Sites” or,
              individually, a “Site’’)
            </p>

            <p>
              This Site is an online portal that allows organized interaction
              with social media influencers. This Site brings together
              companies/ individuals who are seeking valuable inputs
              recommendations and endorsements on specific brands/topics and
              bloggers/individuals/social media influencers who are willing to
              provide such inputs.
            </p>

            <p>
              HashFame can be used by digital marketing companies, brands, PR
              agencies for identifying the right influencers who could
              potentially promote their brands, products or services.
            </p>

            <p>
              HashFame is also a platform for influencers (people having large
              presence in various social media platforms like Facebook, Twitter,
              Instagram, YouTube etc who have large followers, subscribers) who
              love to monetise their digital media presence by listing through
              HashFame, so that their social media presence can be commercially
              benefited by endorsing and commenting on brands that they prefer.
            </p>

            <p>
              The Site is thus a marketplace for digital marketing companies,
              brands, PR agencies and influencers.
            </p>
            {/* <!--  --> */}

            <h2>DEFINITION:</h2>

            <p>
              “Services” any services offered on or through the Site, to a guest
              or a registered user (hereafter “Agreement”).
            </p>

            <p>
              ‘'User’' shall mean and include digital marketing companies/
              brands, individuals/ and PR agencies and influencer.
            </p>

            <p>
              Influencer” shall mean persons who is active in social medias
              (like Facebook, Twitter Instagram, YouTube etc and/ or who has
              substantial followers, subscribers, and who has the ability to
              influence other social media users who have been included in
              HashFame database either as registered influencers or unregistered
              influencers.
            </p>

            <p>
              Unregistered influencers shall mean influencer identified by
              HashFame from its own research whose contact and coordinates are
              extracted from various public sources.
            </p>

            <p>
              ‘’Registered Influencer’’ shall mean those who have volunteered to
              provide their personal details into include in HashFame database
              and registered their name as an influencer.
            </p>

            <p>
              “Content” shall mean and include any inputs on specific
              brands/topics by any user including any blogger/individuals/
              social media influencers which may be in the form of text,
              reviews, comments, data, information, images, photographs, music,
              sound, video or any other material or any reactions thereto.
            </p>

            <p>
              “Personal information” shall mean and include any information
              relating to the user including name, email id, phone number,
              location, gender, IP address, address, photograph and economic,
              cultural or social identity of the user;
            </p>

            {/* <!--  --> */}
            <h2>ELIGIBILITY</h2>

            <p>
              By using the Services, you represent and warrant that you are
              above the 18 years of age and qualified to enter into contract. If
              you are not eligible to enter into contracts, then please
              discontinue use of the Services and leave now.
            </p>

            <p>
              If you are the parent or guardian of a child under 18 years of
              age, by registering/by creating an account or profile on the Site,
              you provide your consent to your child’s registration and you
              agree to be bound by these Terms in respect of their use of our
              Site. We will at all times assume (and by using this Site you
              warrant that) you have the legal capacity to enter into the
              agreement (i.e. that you are of sufficient age and mental capacity
              and are otherwise entitled to be legally bound in contract).
            </p>

            <h2>TERMS OF USE</h2>
            <p>
              Please read the following terms and conditions carefully before
              you start to use the Services, as they form the entire agreement
              between you (sometimes referred to herein as “You” or “you’’ ”
              Your” or “your’’ or ” User “or “Influencer’’ ) and, HashFame (
              sometimes referred to herein as “we” or ” us”).
            </p>

            <p>
              By using the Services, you represent and warrant that you are of
              legal age to form a contract. If you are not able to meet the
              foregoing requirements, then discontinue use of the Services and
              leave now.
            </p>

            <p>
              This Terms of Use is applicable to all registered and unregistered
              influencers listed in HashFame database.
            </p>

            <p>
              As a registered influencer, when providing information to HashFame
              while registering as an influencer and/or accessing the
              information available through HashFame or creating an Account to
              HashFame or acquiring Subscriptions, you accept the Terms
              contained herein, without modifications and reservations of any of
              the Terms as contained herein, and by accessing the Site, you
              represent and warrant that you have read and understood, and agree
              to be bound by, all of the terms and conditions contained in this
              Agreement without limitation or qualification.
            </p>

            <p>
              As an unregistered influencer whose names are identified by
              HashFame from its own research, whose contact and coordinates are
              extracted from various public sources, when you access this Site
              for any purpose, interacting with HashFame, interacting with the
              registered users, this term of use shall be applicable. You hereby
              accept the Terms contained herein, without modifications and
              reservations of any of the Terms as contained herein, you
              represent and warrant that you have read and understood, and agree
              to be bound by, all of the terms and conditions contained in this
              Agreement without limitation or qualification. Use or access of
              any part of the Site constitutes unconditional acceptance of these
              terms.
            </p>

            <p>
              Apart from the terms of clause detailed herein, please read the
              general terms and conditions narrated in this link and agree to
              those terms as well before use of this Site.
            </p>

            <p>
              IF YOU DO NOT AGREE TO THESE TERMS AND CONDITIONS, YOU MAY NOT USE
              THE SERVICES AND SHOULD NOT PROCEED TO CREATE ANY ACCOUNTS OR
              ACQUIRE ANY SUBSCRIPTIONS TO THE SERVICES. BY USING THE SERVICES,
              YOU ARE AGREEING TO BE BOUND BY THIS AGREEMENT, INCLUDING ALL
              AMENDMENTS MADE HERETO FROM TIME TO TIME.
            </p>

            <p>
              By using HashFame, You acknowledge that you are willing to
              interact with the brands, advertisers, marketing agencies. By
              including your name as an influencer, you may get request from
              brands, advertisers, marketing agencies asking you to support them
              in their brand promotions by making suitable social media postings
              in return of some fees. You have the liberty to accept/refuse
              these requests from brands, advertisers and marketing agencies.
              You may understand that HashFame is merely a medium(intermediary)
              to connect.
            </p>

            <p>
              We do not provide any assurance about brands, advertisers and
              marketing agencies in any aspects.
            </p>

            <p>
              You understand that HashFame is a web platform that (a) collects
              your data/ Personal information available in various social media
              platforms like Facebook, Twitter, Instagram, YouTube etc, (b)
              monetize the Content of your Personal information through our
              Application Program Interface(API) and web crawlers and (c)
              showcase your ability, creativity and passion to various brands,
              advertisers, market agencies and thereby helping you to monetise
              your social media presence.
            </p>

            <p>
              If we undertake an effort to verify your background by collecting
              information directly or otherwise, and choose to identify you as
              “Verified,” such a notation shall mean nothing other than that you
              completed a verification or identification process and shall not
              constitute an endorsement of you or any other User to the public
              or to any User.
            </p>

            <p>
              We have included contacts of good social media users in HashFame
              database from the information available from the social media with
              a good and legitimate intention that it provides them an
              opportunity to monetise their social media presence. The database
              so created thus may be erroneous. Those people included as such in
              the database are defined as unregistered influencers. If you are
              unregistered influencer and you notice that your name is included
              in HashFame database and if you believe that you don’t want to
              retain your name and details in this database, you may write to
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>. If you find
              your details are erroneous and wish to get corrected, please write
              to
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>. We assure
              that we shall promptly address these requests.
            </p>

            <p>
              This Site is made by an Indian company with an intent to provide
              services to Indian customers, if you are a user, influencer from a
              country other than India, you may know that HashFame may not have
              complied with the laws of your country and You may use this site
              knowing this limitation. HashFame has made its best efforts to be
              in compliance with the laws India. However, it is your
              responsibility to determine that your specific actions using the
              HashFame platform and your participation in the HashFame Platform
              are in compliance with laws, rules and regulations applicable to
              You. You are solely responsible for all content posted by you in
              HashFame and commercial and other business you may have entered
              into between You and another user/ Influencer.
            </p>

            <p>
              You understand that the operation of the Services, including your
              Content, may be unencrypted and involve (a) transmissions over
              various networks; (b) changes to conform and adapt to technical
              requirements of connecting networks or devices and (c)
              transmission to HashFame’s third party vendors and hosting
              partners to provide the necessary related services required to
              operate and maintain the Services. HashFame has taken reasonable
              security measures to mitigate or minimize these risks. However,
              HashFame is not giving any assurance or guarantee of
              non-occurrence of the above event nor will have any liability to
              you for any unauthorized access or use of any of Your Content, or
              any corruption, deletion, destruction or loss of any of Your
              Content.
            </p>

            <p>
              This Site may contain links to other websites, web pages and
              services which may have their own terms and conditions of use and
              you shall be bound by such terms and conditions of use. We are not
              responsible for the contents of any such external hyperlinks, and
              references to any external links should not be construed as an
              endorsement of the links or their content. Use of such hyperlinks
              and third-party content contained therein and other sites is
              entirely at your own risk. The Company does not make any
              representations or warranties about any such sites you may access
              through the Site. Further, such other sites are not covered by the
              Company’s Privacy Policy and the information usage practices may
              be different from ours. You should consult the privacy policies of
              such sites before submitting any personal information, as we are
              not responsible for and have no control over the manner in which
              such sites collect, use, disclose, or otherwise process your
              personal information.
            </p>

            <p>
              The Site shall use cookies to monitor Site visitors and traffic
              and by agreeing to use the Site, you agree to use of cookies You
              shall ensure that prior to any third party accessing the Site
              through your electronic device you shall cause such person to
              understand and accept the Terms contained herein. If you do not
              understand the Terms herein, or do not agree to be bound by these
              Terms, you may not use or otherwise access this Site in any
              manner. HashFame reserves the right to use Your name and/or Your
              business name as a reference for marketing or promotional purposes
              on HashFame website and in other communication with existing or
              potential HashFame customers.
            </p>

            <p>
              Further, by providing the Company and/or third-party service
              providers with any information including personal information
              through use of the Site, you agree to the Company and/or
              third-party service providers to communicate with you through
              email, SMS, phone calls, direct mail and other means of
              communication. We may use your Personal information include
              without limitation, to provide you with any information you
              requested from HashFame or its Users and/ or to let you know about
              features, functions, improvements or changes to the Platform, to
              facilitate your identification of desired Users or other aspects
              of your Profile.
            </p>

            {/* <!--  --> */}
            <h2>HASHFAME PROFILE</h2>

            <p>
              To collaborate with the best brands in the industry on hundreds of
              different types of projects, you are free to join HashFame Network
              by creating HashFame Profile.
            </p>

            <p>
              When you set up an account/profile with HashFame and to register
              as a Registered Influencer, you will be required to provide your
              personal information including; Your full name, email ID, Phone
              No., Gender, Age, Location, area of interest and shall also
              connect your social account.
            </p>

            <p>
              When you provide the Site with such Personal information, the
              information has to be accurate and complete. The Company shall
              assume that any information provided by you is accurate and shall
              not verify the same. Care must be taken to not impersonate anyone
              else or choose names that are offensive or that violate anyone’s
              rights. If you don’t follow these rules or if we believe the
              details are not correct, or complete, we have the unconditional
              right to refuse you access to or use of the Site, or any of its
              resources.
            </p>

            <p>
              Once your basic profile is complete, your registered email account
              will notify that you have become a Verified Influencer on HashFame
              Influencer Network. The profile will be activated in 24 hours of
              creation. It is your sole responsibility to see that your profile
              has been registered and activated. You are solely responsible for
              verifying the accuracy, completeness, and applicability of all
              such information, and for Your use of any such Content in your
              Profile.
            </p>

            <p>
              Despite of providing accurate and complete information, if the
              profile has not been activated in 48 hours, please notify us at
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>. HashFame
              will make reasonable measures to make the profile active upon
              verification of the information provided.
            </p>

            <p>
              Once you become the part of QOROZ network, we will notify you when
              any marketer/brand finds interest in collaborating with you. It is
              solely your discretion to accept or refuse the invitations.
            </p>

            <p>
              You are always free to improve your profile with the help of your
              account manager by customizing the details such as rates, previous
              brand collaborations and projects etc.
            </p>

            <p>
              Any enrolment (through account/profile creation) to or use of any
              Services is completely voluntary in nature. Upon such
              profile/account creation, your mobile number and email id will
              serve as unique identification number and id for using the
              Services on the Site.
            </p>

            <p>
              Upon creation of Profile/Account with HashFame, the Registered
              Influencer must adhere to the following guidelines:
            </p>

            <ul className="inside-content">
              <li>
                Influencer’s profile shall accurately represent his/her
                experience, skills, expertise and personal information;
              </li>

              <li>
                Influencer’s profile photos shall be clear and appropriate for a
                professional, global community;
              </li>

              <li>Heavily digitally manipulated pictures are prohibited;</li>

              <li>
                Each Influencer shall be allowed to have only one account;
              </li>
              <li>
                Influencer’s account shall not be shared or duplicated in any
                way;
              </li>

              <li>
                Attempting to mislead by falsely implying a relationship with
                the Company or any Advertiser shall not be allowed
              </li>

              <li>
                Any offer of Services that is spam in nature shall be strictly
                prohibited.
              </li>

              <li>
                The Influencer shall never post and/or say any kind of negative
                communication including but not limited to the defamatory,
                derogatory, abusive, false or incorrect comments, bad words,
                misrepresentations, complaints, grievances etc. in any media
                including but not limited to TV, newspapers, radio, social media
                including tweets, Facebook posts, digital platforms, blogs etc.
                or in person before any third party or any individuals;
                pertaining to or in relation to the Company, Advertiser(s), its
                employees, representatives, group companies, clients or
                affiliates, the Campaign, Brands/Topics, Consideration,
                remuneration, payments process etc.
              </li>

              <li>
                By providing Personal information, the Registered Influencer
                consent to receive all information relating to the Site, the
                Services offered by the Site and/or third-party providers, all
                communication and instructions for availing special offers and
                promotional benefits. Registered Influencer shall solely be
                responsible for the appropriate use of the same.
              </li>
            </ul>

            <p>
              Unless otherwise provided in a separate agreement, we reserve all
              rights, in our sole discretion to remove, suspend, disable access
              to or otherwise to restrict access to HashFame platform or to User
              Content if we find any of the following:
            </p>

            <ul className="inside-content">
              <li>violation of these Terms and our policies and procedures</li>

              <li>
                conduct of activities that are harmful to the HashFame Platform,
                to HashFame or to any other User or third party or which or when
                found objectionable
              </li>

              <li>
                If there is any legitimate reason for such removal the
                Registered Influencer are also free to cancel his/her Account in
                full, or associated Subscription at any time by visiting here.
              </li>
            </ul>

            <p>
              We take reasonable action to make sure that the Services remain
              fully functional and up to date, however, interruptions do happen,
              for any reason or no reason, including for routine maintenance.
            </p>

            <h2>RIGHT TO USE</h2>

            <p>
              HashFame grants you the non-exclusive, non-transferable,
              revocable, limited right to use the data contained in the Site for
              your personal and commercial use.
            </p>

            <p>
              HashFame grants you every right to know about the brands/market
              agencies and/ any other User when they shortlist you for any
              marketing campaign and/ when their show interest to connect with.
            </p>

            <p>
              This Site is a platform that creates opportunity for you to make
              money and fame by sharing your Personal Information through
              HashFame to other users including digital marketing companies,
              brands and PR agencies. However, You agree that the Company will
              neither be responsible nor be answerable for any of your
              interactions and agreement with other users and brands
              and/marketing agencies whom you met through HashFame.
            </p>

            <p>
              Your license to use the Site is subject to the limitations,
              conditions, and restrictions established by us from time to time,
              in our sole discretion.
            </p>

            <p>License Restrictions</p>

            <p>
              You shall only post and upload that are legal and legitimate.
              While using HashFame, you shall not do the following:
            </p>

            <ul className="inside-content">
              <li>
                defame, abuse, harass, stalk, threaten or otherwise violate the
                legal rights of any Person, including but not limited to the
                Brands/Topics, Campaign(s), Company, Advertiser(s), employees,
                directors or representatives of the Company and/or
                Advertiser(s);
              </li>

              <li>
                publish, post, upload, distribute or disseminate any
                inappropriate, profane, offensive (including personal comment),
                defamatory, derogatory, negative, abusive, infringing, obscene,
                indecent or unlawful topic, name, material or information
                through any blog, tag or keyword;
              </li>

              <li>post Content or items in inappropriate categories;</li>

              <li>
                publish, post or upload any Content with an intent to cause any
                harm to the reputation of any other brand/topics;
              </li>

              <li>
                upload Content that shall infringe upon or misappropriate any
                Intellectual Property Rights or proprietary rights or rights of
                publicity or privacy of any Person or contain software or other
                material protected by Intellectual Property Rights of any third
                party, unless the Influencer owns or controls the said rights or
                has received all necessary consents thereto;
              </li>

              <li>
                transmit, access or communicate any data that he/she does not
                have a right to transmit under any law or under contractual or
                fiduciary relationships (such as inside information, proprietary
                and confidential information learned or disclosed as part of
                employment relationships or under non-disclosure agreements);
              </li>

              <li>
                transfer his/her account, username and/ password to a third
                party;
              </li>

              <li>
                distribute or post spam, unsolicited, or bulk electronic
                communications, chain letters, or pyramid schemes;
              </li>

              <li>
                In any manual or automated way copy, appropriate, use or
                disclose any copyrighted text, or other intellectual property,
                rights of publicity, privacy or contract rights or otherwise
                misuse or misappropriate HashFame Platform information or
                content including but not limited to, use on a mirrored,
                competitive, or third-party site;
              </li>

              <li>
                upload or distribute Content that contain viruses, corrupted
                files, ‘Trojan horses’ or any other similar software or programs
                that may interrupt, harm, overload, collapse, destroy,
                detrimentally interfere with, surreptitiously intercept or
                expropriate any system, data or personal information, limit the
                functionality or damage the operation of the website or any
                third party’s computer;
              </li>

              <li>
                Use any automated system including but not limited to robots,
                spiders, offline readers, crawlers, scrapers to access, copy,
                maintain or compile the HashFame Platform or content thereon for
                any purpose without HashFame’’s prior written approval;
              </li>

              <li>
                impersonate any person or entity or falsely state or otherwise
                misrepresent his/her affiliation with a person or entity;
              </li>

              <li>engage any illegal activity;</li>

              <li>
                Share or disseminate material linked to terrorist activities;
              </li>

              <li>
                Share or disseminate information on development, design,
                manufacture or production of missiles, or nuclear, chemical or
                biological weapons;
              </li>

              <li>
                violate any applicable laws or regulations for the time being in
                force in or outside India;
              </li>

              <li>
                by act, word, deed or otherwise make any statement to the effect
                that the Influencer is associated with the Company in any
                manner; and
              </li>

              <li>
                threaten the unity, integrity, defence, security or sovereignty
                of India, friendly relations with foreign states, or public
                order or causes incitement to the commission of any cognizable
                offence or prevent investigation of any offence or is insulting
                any other nation;
              </li>

              <li>
                violate the terms of engagement, terms of use, privacy policy or
                any other terms and conditions as may be applicable to him/her.
              </li>

              <li>
                This license shall automatically terminate if you violate any of
                the above restrictions. Upon termination of the license, you
                must destroy any downloaded materials in your possession in any
                format whatsoever including in electronic or printed format.
              </li>

              <li>
                We may alter, suspend, or discontinue any aspect of the Services
                at any time, including the availability of any feature,
                database, or content. We may also impose limits on certain
                features and aspects of the Services or restrict your access to
                parts or all of the Services without notice or liability.
              </li>
            </ul>

            <p>YOU PERMIT US TO DO THE FOLLOWING:</p>

            <ul className="inside-content">
              <li>
                to use and retain your data including video, photo, written or
                verbal content that You share or provides related to the
                Services, in whole or in part on HashFame.
              </li>

              <li>
                To use and share data your data including photo, written or
                verbal content to any User and permission to such user to
                contact for their marketing campaign Purpose.
              </li>
              <li>
                as a part of the Services, to contact you (via email, phone
                number or by means of messages on public social media
                platforms).
              </li>

              <li>
                As a part of the services, to prioritize and filter the database
                containing in your details in order to fulfil specific campaign
                objectives
              </li>

              <li>
                for the purpose of providing the Services, any statements, posts
                and/or feedback that You provide may be paraphrased, amplified,
                shortened and/or put into conversational form.
              </li>

              <li>
                to use your name as a reference for marketing or promotional
                purposes on HashFame website and in other communication with
                existing or potential HashFame customers.
              </li>

              <li>
                the right to refuse Services, terminate accounts or remove or
                edit any Content in its sole discretion.
              </li>

              <li>
                Changes to the Terms will be effective as on the date they are
                posted. The Company is not bound to provide you with any updates
                or notice of such revisions to the Terms and you should visit
                the Terms regularly to review the applicable Terms.
              </li>

              <li>
                HashFame does not claim any ownership interest or rights in Your
                User Content and nothing in these Terms shall be deemed to
                restrict rights You may have in Your User Content.
              </li>

              <li>
                User experience may vary depending on the type of the device and
                the operating system that you use, and the Company accepts no
                responsibility for any lack of functionality due to your
                equipment (including your device, internet connection, operating
                system or settings and software).
              </li>

              <li>
                You shall be responsible for paying all costs and expenses that
                you may incur while using the Site (including, but not limited
                to Internet data service access charges).
              </li>

              <li>
                HashFame does not knowingly collect, either online or offline,
                personal information from persons under the age of eighteen. If
                you are under 18, you may use the Site only with permission of a
                parent or guardian.
              </li>
            </ul>

            {/* <!--  --> */}
            <h2>USE OF CONTENT</h2>

            <p>
              Your right to make use of this Site any Content appearing on it is
              subject to your compliance with these Terms.
            </p>

            <p>
              Modification or use of Content on this Site for any purpose not
              permitted by these Terms may be a violation of the Copyrights
              and/or Trademarks and may be prohibited by law.
            </p>

            <p>
              The information relating to the brand, digital companies and
              marketing agencies and/ user are put as it is as provided by the
              concerned parties and we have not verified fully the veracity or
              accuracy of the same. The data may be erroneous, not up to date.
              We are not giving any representation or accuracy of such
              information.
            </p>

            <p>We have no control over and do not guarantee:</p>

            <ul className="inside-content">
              <li>
                the existence, quality, safety, suitability, or legality of the
                Content shared and/or provided by the Users and/ or third
                parties.
              </li>
              <li>
                the truth, accuracy or suitability of any description or any
                other aspect referred to by other Users and/or third parties on
                the HashFame Platform,
              </li>
              <li>the performance or conduct of any User or third party or</li>
              <li>
                the legality or compliance with laws, rules, regulations, orders
                and decisions that may be applicable to any relationship between
                Users or the subject matter thereof.
              </li>

              <li>
                While we may provide information that may be helpful in
                assisting you to evaluate another User/ Influencer and their
                status in the HashFame community, HashFame does not endorse any
                particular User/ Influencer and/or their Content.
              </li>

              <li>
                Some Services being displayed and/or provided on the Site are
                not under the control of the Company. The Company does not take
                any responsibility of such Content and/or Services, which are
                made available by third party providers or any other entity.
              </li>

              <li>
                You understand that by using the Site, you may be exposed to
                Content that you may consider to be offensive or objectionable.
                You agree that you must evaluate, and bear all risks associated
                with, the use or disclosure of materials found on the Site. You
                further acknowledge and agree that you will not rely on any
                content available on or through the Site or use such content as
                a substitute for professional advice.
              </li>

              <li>
                You hereby absolutely and irrevocably assign to the Company the
                right to use all the data you provided while logged in or using
                the Site and the company has all the rights to reproduce,
                republish and create databases based on the said data.
              </li>

              <li>
                Further the Company shall have the right to use, explore,
                exploit and utilize the said Content worldwide and in perpetuity
                without any compensation payable to you with respect to the
                Content that you submit, post, transmit or otherwise make
                available on the Site as well as on other social platforms.
              </li>

              <li>
                You hereby absolutely and irrevocably assign to the Company the
                right to use all the data you provided while logged in or using
                the Site and the company has all the rights to reproduce,
                republish and create databases based on the said data.
              </li>

              <li>
                Further the Company shall have the right to use, explore,
                exploit and utilize the said Content worldwide and in perpetuity
                without any compensation payable to you with respect to the
                Content that you submit, post, transmit or otherwise make
                available on the Site.
              </li>

              <li>
                You shall ensure that such rights solely and exclusively belong
                to the Company and include right to sub-assign, as if the same
                was created as a work for hire. Where the aforesaid assignment
                of rights is not possible, you hereby grant the Company a
                non-exclusive, worldwide, perpetual, irrevocable, royalty free,
                sub-licensable (through multiple tiers) right to use or exercise
                any and the rights, including all copyright, trademark,
                publicity rights, database rights and other intellectual
                property rights that you have or may in the future become
                entitled to, in the Content, in any Medium.
              </li>

              <li>
                You shall not make the Company responsible for the manner or
                circumstances in which third parties access or use the Content.
              </li>

              <li>
                We may modify or alter or adapt your Content solely to transmit,
                display or distribute it over computer networks and in various
                media and/or make changes to your Content as are necessary to
                conform and adapt that Content to any requirements or
                limitations of any networks, devices, services or media. Any
                modification made by us for the purposes as set forth above,
                does not in any manner make us assume any responsibility or any
                liability arising from any Content.
              </li>

              <li>
                We do not make any guarantee regarding the accuracy, currency,
                suitability or quality of any Content, and we assume no
                responsibility for any Content.
              </li>

              <li>
                Company has the right to discontinue HashFame services without
                specifying any reasons and in such instance has the complete
                liberty to abandon the user database including your data without
                any direct intimation to you.
              </li>
            </ul>

            {/* <!--  --> */}
            <h2>RETENTION POLICY</h2>

            <p>
              We collect and retain your Personal data for as long as necessary
              to fulfil the purposes for collecting it. What we collect, why we
              collect it, and how You can manage their respective information
              are described in our Privacy Policy. This retention policy
              describes how we hold onto different types of data for different
              periods of time. For Registered Influencers, we collect data as
              you use the HashFame Services.
            </p>

            <p>Information retained until he/she removes it</p>

            <p>
              We offer a range of Services that allows a Registered Influencer
              to correct or delete data stored in his/her HashFame Account. For
              example, he/she can:
            </p>

            <ul className="inside-content">
              <li>Edit your personal info</li>
              <li>Delete items from the Account</li>
              <li>Delete content like photos and documents</li>

              <li>Delete your HashFame account entirely</li>

              <li>
                We’ll keep this data in Registered Influencer’s HashFame Account
                until he/she choose to remove, we shall rectify the same.
              </li>
            </ul>

            <p>
              We also allow Unregistered Influencers to correct or delete the
              data stored in our Site by writing to us at
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>. However, we
              shall rectify the data only by verifying your identity.
            </p>

            <p>Information retained until your HashFame Account is deleted</p>

            <p>
              We keep some data for the life of the Registered Influencer’s
              HashFame Account if it’s useful for helping us understand how
              Registered Influencers interact with our features and how we can
              improve our Services.
            </p>

            <p>
              Information retained for extended time periods for limited
              purposes
            </p>

            <p>
              Sometimes business and legal requirements oblige us to retain
              certain information, for specific purposes, for an extended period
              of time. For example, when HashFame processes a payment for the
              Registered Influencer, or when the Registered Influencer make a
              payment to HashFame, we’ll retain this data for longer periods of
              time as required for tax or accounting purposes.
            </p>

            <p>
              Reasons we might retain some data for longer periods of time
              include:
            </p>

            <p>Security, fraud & abuse prevention</p>

            <p>Financial record-keeping</p>

            <p>Complying with legal or regulatory requirements</p>
            <p>Ensuring the continuity of our services</p>
            <p>Direct communications with HashFame</p>

            <p>ELECTRONIC COMMUNICATIONS</p>

            <p>
              Visiting <a href="https://hashfame.com/">HashFame.com</a>, sending
              emails to HashFame, constitutes electronic communications. You
              consent to receive electronic communications and you agree that
              all agreements, notices, disclosures and other communications that
              we provide to you electronically, via email and on the Site,
              satisfy any legal requirement that such communications be in
              writing.
            </p>

            {/* <!--  --> */}
            <h2>PRIVACY</h2>
            <p>
              Your use of <a href="https://hashfame.com/">HashFame.com</a> is
              subject to HashFame Privacy Policy. Click here to show and/or
              print a copy of this Privacy Policy, which forms part of these
              Terms. By accepting these Terms, you shall also be deemed to have
              accepted the terms of the Privacy Policy.
            </p>

            {/* <!--  --> */}
            <h2>LINKS TO THIRD PARTY SITES/THIRD PARTY SERVICES</h2>
            <p>
              The Site may contain links to other websites (“Linked Sites”). The
              Linked Sites are not under the control of HashFame and HashFame is
              not responsible for the contents of any Linked Site, including
              without limitation any link contained in a Linked Site, or any
              changes or updates to a Linked Site. HashFame is providing these
              links to you only as a convenience, and the inclusion of any link
              does not imply endorsement by HashFame of the site or any
              association with its operators.
            </p>

            <p>
              Certain Services made available via quoruz.com are delivered by
              third party sites and organizations. Any opinions, advice,
              statements, services, offers, or other information or content
              expressed or made available by third parties, including
              information providers, Users or any other User of HashFame
              Platform, are those of the respective author(s) or distributor(s)
              and not of HashFame. HashFame does not guarantee the accuracy,
              completeness, or usefulness of any content, nor its
              merchantability or fitness for any particular purpose, of such
              information.
            </p>

            <p>
              However, by using any product, service or functionality
              originating from the{' '}
              <a href="https://hashfame.com/">HashFame.com</a> domain, you
              hereby acknowledge and consent that HashFame may share such
              information and data with any third party with whom HashFame has a
              contractual relationship to provide the requested product, service
              or functionality on behalf of
              <a href="https://hashfame.com/">HashFame.com</a> users and
              customers.
            </p>

            {/* <!--  --> */}
            <h2>INDEMNITY</h2>

            <p>
              We only make available a platform that provides you an opportunity
              to make money and fame by sharing your Personal Information
              through HashFame to other users including digital marketing
              companies, brands and PR agencies.
            </p>

            <p>
              The information contained in the Site is on an ‘as is’ basis, as
              provided by the Registered Users, digital marketing companies,
              brands and PR agencies. Nothing contained herein shall be deemed
              to construe as the advice, views, opinions or beliefs of the
              Company or endorsement of any brand/topic by the Company, and the
              Company makes no claim of accuracy of any user posted information.
              The owner of the Content/ information shall be solely responsible
              for anything being provided by him/her and any liability arising
              in respect thereof including against the Company and must ensure
              compliance with all laws or regulations applicable to him/her and
              the Content.
            </p>

            <p>
              You shall be solely responsible for your interactions with other
              users and any other parties with whom you interact through the
              Site, provided however that we reserve the right, but have no
              obligation, to intercede in any disputes. You agree that the
              Company will not be held responsible for any liability incurred as
              a result of such interactions.
            </p>

            <p>
              You hereby indemnify, defend and hold harmless the Company and all
              persons claiming under the Company (“Indemnified Persons”) from
              and against any and all losses, claims, demands, liabilities,
              charges, penalties, fines, damages, costs or expenses, including
              reasonable legal fees and expert witness fees, resulting from your
              breach of any of the provisions mentioned in these Terms,
              representations or warranties, and/or infringement by you of
              Materials, Copyrights and/or Trademarks and Content, including any
              claims against you alleging misuse or unauthorized usage of the
              information, data and Content available on and/or from your use of
              the Site itself.
            </p>

            <p>
              You agree that the Company will not be held responsible, in any
              manner whatsoever, for any Content or liability arising out of any
              Content posted/displayed on the Site and/or any use /access of the
              same by any third party and is under no obligation to disable or
              otherwise restrict such use/access.
            </p>

            <p>
              You shall do all acts, deeds and things including execution of
              necessary documents without charge or compensation but at the cost
              of the Company for fully and effectively vesting the aforesaid
              rights in the Company.
            </p>

            <p>
              Notwithstanding anything to the contrary contained herein, it is
              expressly clarified that you shall solely be responsible for the
              Content or any liability arising from any Content that you provide
              transmit, store or upload on the Site or when making use of the
              Site. You are solely responsible for your Content and assume all
              risks associated with use of your Content, including any reliance
              on its accuracy, completeness or usefulness by others.
            </p>

            <p>
              We do not make any guarantee regarding the accuracy, currency,
              suitability or quality of any Content, and we assume no
              responsibility for any Content.
            </p>

            {/* <!--  --> */}
            <h2>INTELLECTUAL PROPERTY RIGHTS</h2>

            <p>
              This Site and any materials incorporated by the Company on this
              Site including, without limitation, any text, graphics, images,
              artwork, illustrations, photographs, animations, music, video,
              audio, audio visual works, designs, logos, software and any other
              content, (other than the Content) (collectively referred to as
              “Material”) are protected by copyrights, patents, trade secrets or
              other proprietary rights owned by or licensed to the Company,
              authorized third parties and/or its licensors (“Copyrights”). Some
              of the logos or other images incorporated by the Company on this
              Site are also protected as registered or unregistered trademarks,
              trade names and/or service marks owned by or licensed to the
              Company or other third parties (“Trademarks”). The Company
              respects the intellectual property rights of others and asks Users
              of this Site to do the same. Using our Services does not give you
              any ownership of any intellectual property rights in our Services,
              the Material, Copyright or Trademarks.
            </p>

            <p>
              You agree that the Material, Services, and any other Content
              provided on the Site, either by the Company or through third party
              providers, may be protected by intellectual property laws of India
              or the applicable laws of any other jurisdiction. Your attempt to
              modify, copy, distribute, transmit, resell, redistribute,
              broadcast, display, perform, reproduce, publish, license, frame,
              transfer, or otherwise use in whole or in part, any intellectual
              property contained in the Material, Services and any other content
              provided on the Site may subject you to infringement actions
              either by the Company or third party providers, as the case may
              be.
            </p>

            <p>
              You may access and display the Material for commercial and
              personal use. The Material may not otherwise be copied,
              reproduced, framed, republished, uploaded, posted, transmitted,
              distributed or used in any way unless specifically authorized by
              the Company. Using any Material on any other web site or networked
              computer environment is prohibited unless specifically authorized
              by the Company. Also, to the extent permitted by applicable law,
              decompiling, reverse engineering, disassembling, or otherwise
              reducing the code used in any software on this Site into a
              readable form in order to examine the construction of such
              software and/or to copy or create other products based (in whole
              or in part) on such software, is prohibited.
            </p>

            <p>
              You understand that by using the Site, you may be exposed to
              materials that you may consider to be offensive or objectionable.
              You agree that you must evaluate, and bear all risks associated
              with, the use or disclosure of materials found on the Site. You
              further acknowledge and agree that you will not rely on any
              content available on or through the Site or use such content as a
              substitute for professional advice.
            </p>

            {/* <!--  --> */}
            <h2>USER WARRANTIES</h2>

            <p>
              By creating a profile on HashFame, and/or providing information
              otherwise, as part of the Services, you warrant and agree that:
            </p>

            <p>
              you either own or have all necessary rights, licenses, consent and
              releases necessary to grant HashFame the rights in User Content
              under these Terms
            </p>

            <p>
              that all the information you provide to HashFame is only about
              yourself, or the Account-holder entity, and that all of such
              information is accurate, true and correct and does not violate any
              third-party rights, including any privacy rights, or any laws,
              regulations, or obligations imposed by any third party.
            </p>

            <p>
              Providing the Company and/or third-party service providers with
              any information including personal information through use of the
              Site shall be deemed to be your consent to the Company and/or
              third-party service providers to communicate with you through
              email, SMS, phone calls, direct mail and other means of
              communication
            </p>

            <p>
              you will remain responsible for all uses of the Services and
              related activities.
            </p>

            <p>
              it remains your sole responsibility to monitor your User Content
              and to guarantee that any edited User Content by HashFame and/or
              third parties is accurate and consistent with your
              representations, warranties and agreements in these Terms.
            </p>

            <p>
              You will not create work/post Content, which is intended or
              designed to mislead, including in relation to social,
              environmental and human rights issues through this Site.
            </p>

            <p>
              Your continued use/access of the Site signifies your acceptance of
              any revisions and explicit renewal of your consent to such
              revisions. These Terms control the relationship between the
              Company and you. They do not create any rights or obligations to
              third parties.
            </p>

            <p>
              Unless otherwise authorized, you may not use, copy, reproduce,
              modify, publicly perform or display, create derivative works of,
              sell, auction, loan, lease, rent, distribute, transfer or disclose
              all or any part of the Site (including, without limitation, any
              screenshots, videos, documentation or manuals relating to the
              Site).
            </p>

            <p>
              neither the User Content nor your posting, uploading, publication,
              submission or transmittal of User Content or HashFame use of Your
              User Content (in whole or part infringes, misappropriates or
              violates any third party’s patent, copyright, trademark, trade
              secret, moral rights or other intellectual property or proprietary
              rights or result in violation of any applicable law, rules,
              regulation or court order.
            </p>

            <p>
              HashFame may exercise any traditional editorial function as to
              User Content including but not limited to proofreading, editing,
              summarizing, digesting or other editing without becoming the
              author of such content.
            </p>

            <p>
              Unless otherwise authorized, you will not disclose any
              Confidential Information of HashFame to any third party which you
              have acquired in the course of providing Services to HashFame.
            </p>

            <p>DISCLAIMER OF WARRANTIES</p>

            <ul className="inside-content">
              <li>
                THIS DISCLAIMER OF WARRANTY CONSTITUTES AN ESSENTIAL PART OF THE
                AGREEMENT.
              </li>

              <li>
                YOU ACKNOWLEDGE AND EXPRESSLY AGREE THAT, UNLESS OTHERWISE
                SPECIFICALLY AGREE IN WRITING, HashFame DOES NOT HAVE ANY
                ASSOCIATION OR BUSINESS AFFILIATION OR CONTRACT WITH ANY SOCIAL
                MEDIA PLATFORM INCLUDING BUT NOT LIMITED TO FACEBOOK, INSTAGRAM
                TWITTER, AND YOUTUBE. YOU UNDERSTAND AND AGREE THAT HashFame IS
                MERELY PROVIDING A PLATFORM FOR YOU TO CONNECT WITH OTHER USERS
                AND SOCIAL MEDIA INFLUENCERS. YOU UNDERSTAND THAT BY REGISTERING
                OR PROVIDING INFORMATION/OR AND ACCESSING SERVICES DIRECTLY OR
                INDIRECTLY FROM THE HashFame PLATFORM, YOU RECEIVE ONLY THE
                ABILITY TO USE THE HashFame PLATFORM AND TO ACCESS OTHER USERS
                WHO MAY BE INTERESTED IN CONNECTING WITH YOU, BEING IT A
                BRAND/COMPANY/MARKTEING AGENCIES,PUBLIC RELATIONS AGENCY,
                INFLUENCERS(WHETHER REGISTERED OR NOT) INCLUDING, BUT NOT
                LIMITED TO, THE ABILITY TO MESSAGE OTHER USERS.
              </li>

              <li>
                YOU FURTHER ACKNOWLEDGE AND AGREE THAT YOU ARE NOT ACTING UPON
                THE ADVICE OR DIRECTION OF HashFame OR ANY OF ITS SUBSIDIARIES,
                AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS. WE ARE NOT
                ADVISING OR GUIDING YOU ON YOUR COMMUNICATIONS OR YOUR
                TRANSACTIONS WITH USERS AND INFLUENCERS OR THIRD PARTIES. WE DO
                NOT VERIFY LEGALITY OF YOUR TRANSACTIONS.
              </li>

              <li>
                YOU EXPRESSLY AGREE THAT HashFame IS NOT A PARTY TO ANY
                RELATIONSHIP OR AGREEMENT BETWEEN YOU AND ANY OTHER USER
                /INFLUENCER AND THAT YOUR USE OF THE SERVICE IS AT YOUR SOLE AND
                EXCLUSIVE RISK. THE SERVICES ARE PROVIDED ON AN “AS IS, WITH ALL
                FAULTS,” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY
                KIND, INCLUDING, WITHOUT LIMITATION: THE AVAILABILITY, ACCURACY
                OF CONTENT OR MATERIALS, INFORMATION, OR SERVICE, AND THE
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </li>

              <li>
                YOU ALSO ACKNOWLEDGE AND AGREE THAT AT ALL TIMES, IT IS YOUR
                RESPONSIBILITY AND NOT HashFame RESPONSIBILITY, WHICH IS
                DISCLAIMED TO THE MAXIMUM EXTENT OF THE LAW, TO BE FAMILIAR
                WITH, TO ABIDE BY AND TO COMPLY WITH ALL RELEVANT FEDERAL,
                STATE, LOCAL, AND INTERNATIONAL LAWS, RULES AND REGULATIONS THAT
                MAY APPLY TO YOU AND YOUR RELATIONSHIP WITH ANY OTHER
                USERS/INFLUENCERS.
              </li>

              <li>
                HashFame EXPRESSLY DISCLAIMS ALL SUCH WARRANTIES. THE ENTIRE
                RISK AS TO THE QUALITY AND TIMELINESS OF THE INFORMATION, AND
                ALL SERVICES PROVIDED BY HashFame IS BORNE EXCLUSIVELY BY YOU.
                HashFame USES PUBLIC DATA AND INFORMATION PROVIDED TO US BY
                THRID PARTIES IN ORDER TO COMPLILE ITS SERVICES. AS SUCH,
                HashFame RELIES ON THE SOCIAL MEDIA PLATFORMS AND OTHER
                PROVIDERS OF THIS INFORMATION FOR ITS ACCURACY AND CURRENTNESS.
                HashFame MAKES NO WARRANTY THAT THE SERVICE OR OUR CONTENT WILL
                MEET YOUR REQUIREMENTS, OR THAT THE SERVICES WILL BE
                UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE; NOR DOES HashFame
                MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM
                THE USE OF THE SERVICE OR AS TO THE ACCURACY OR RELIABILITY OF
                ANY INFORMATION OBTAINED THROUGH THE SERVICE.
              </li>

              <li>
                THE COMPANY EXPRESSLY DISCLAIMS AND WARRANTS THAT HashFame
                PLATFORM IS IN COMPLIANCE WITH LAWS OF ANY PARTICULAR COUNTRY
                AND/OR THAT YOUR USE OF THE HashFame PLATFORM WILL BE IN
                COMPLIANCE WITH APPLICABLE LAWS. ANY MATERIAL DOWNLOADED OR
                OTHERWISE OBTAINED THROUGH THE USE OF THE HashFame PLATFORM IS
                ACCESSED AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
                RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL CLAIMS AND CAUSES
                OF ACTION WITH RESPECT TO ANY DAMAGE TO YOUR COMPUTER SYSTEM,
                INTERNET ACCESS, DOWNLOAD OR DISPLAY DEVICE, OR LOSS OF DATA
                THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
              </li>
            </ul>

            <p>
              We reserve the right to recover the costs and lawyers’ fees from
              persons using the Site fraudulently. The Company also reserves the
              right to initiate legal proceedings against such persons for
              fraudulent use of the Site.
            </p>

            {/* <!--  --> */}
            <h2>LIMITATION OF LIABILITY</h2>

            <p>
              WHERE PERMITTED, AND TO THE MAXIMUM EXTENT ALLOWED BY LAW, YOU
              ACKNOWLEDGE AND AGREE THAT THE ENTIRE RISK ARISING OUT OF YOUR
              ACCESS TO AND USE OF THE HashFame PLATFORM, OR TO THE RELATIONSHIP
              BETWEEN YOU AND HashFame OR BETWEEN YOU AND OTHER USERS,(WHETHER
              BASED IN CONTRACT,TORT,STRICT LIABILITY OR OTHERWISE) REMAINS WITH
              YOU AND NEITHER HashFame NOR ITS SUBSIDIARIES, AFFILIATES,
              OFFICERS, DIRECTORS, INVESTORS, EMPLOYEES, PARTNERS, AGENTS, AND
              LICENSORS WILL BE RESPONSIBLE FOR LOST PROFITS, REVENUES OR DATA
              OR FINANCIAL LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY
              OR PUNITIVE DAMAGES EVEN IF WE HAVE BEEN ADVISED OF THEIR
              POSSIBILITY OR EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND
              TO HAVE FAILED OF ITS ESSENTIAL PURPOSE AND REGARDLESS OF THE
              NATURE OF THE CAUSE OF ACTION, CLAIM FOR RELIEF OR ALLEGED THEORY
              OF RECOVERY WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE),
              STRICT LIABILITY OR OTHERWISE.
            </p>

            <p>
              SUBJECT TO THE FOREGOING, IN NO EVENT SHALL THE MAXIMUM AGGREGATE
              LIABILITY OF THE COMPANY IN RELATION TO A PARTICULAR CLAIM EXCEED
              TO THE AMOUNT YOU PAID US TO USE THE SERVICES.
            </p>

            <p>
              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU
              FROM THE COMPANY OR THROUGH OR FROM THE HashFame PLATFORM,
              SOFTWARE OR CODE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN
              THE TERMS
            </p>

            {/* <!--  --> */}
            <h2>JURISDICTION AND DISPUTE RESOLUTION</h2>

            <p>
              These Terms shall be governed by, construed and enforced in
              accordance with the laws of India. You hereby consent and submit
              to the exclusive jurisdiction of the courts of Bangalore, India
              for any action however so arising out of these Terms.
            </p>

            <p>
              If any provision of these Terms shall be unlawful, void, or for
              any reason unenforceable, then that provision shall be deemed
              severable for this agreement and shall not affect the validity and
              enforceability of any remaining provisions. This is the entire
              agreement between the parties relating to the matters contained
              herein.
            </p>

            <p>
              You hereby consent and submit that any dispute arising out of or
              in connection with this agreement, including any question
              regarding its existence, validity or termination, shall be
              referred to and finally resolved by Arbitration and Conciliation
              Centre, Bangalore under the laws of Indian Arbitration and
              Conciliation Act, 1996.
            </p>

            {/* <!--  --> */}
            <h2>AFFIRMATION OF AGREEMENT</h2>
            <p>
              You hereby acknowledge and affirm that you have read this entire
              Agreement and that you agree to be bound by all its terms and
              conditions by clicking where indicated on the Service registration
              page and/or by authorizing the use of Services by creating Profile
              with us.
            </p>

            {/* <!--  --> */}
            <h2>HOW TO CONTACT US</h2>
            <p>
              This Site is published, controlled, owned and operated by the
              Company.
            </p>
            <p>
              Please forward any comments or complaints about the Site to [
              <a href="mailto:hi@HashFame.com">hi@HashFame.com</a>].
            </p>

            <p>
              Please forward any questions regarding privacy to [
              <a href="mailto:legal@HashFame.com">legal@HashFame.com</a>].
              Please forward any questions regarding other legal matters to [
              <a href="mailto:legal@terareach.com">legal@terareach.com</a>].
            </p>

            {/* <!-- end influencer --> */}
          </div>
        </div>
      </ContentSection>
    </>
  )
}

export default index
