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

  p {
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

  .inside-content {
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .inside-content-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .text-space {
    padding-left: 3rem;
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

    .text-space {
      padding-left: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  }
`

const index = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <ContentSection>
        <div className="container">
          <div className="content-section">
            <h1>HashFame Privacy Policy</h1>
            <p>Last updated: May 12, 2023</p>
            <p>
              This Privacy Policy describes our policies and procedures on the
              collection, use and disclosure of your information when you use
              the service and tells you about your privacy rights and how the
              law protects you.
            </p>
            <p>
              We use your personal data to provide and improve the Service. By
              using the Service, you agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the.
              <a
                href="https://www.privacypolicies.com/privacy-policy-generator/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy Generator.
              </a>
            </p>
          </div>

          <div className="content-section">
            <h1>Interpretation and Definitions</h1>

            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>

            <div className="inside-content">
              <p>
                <b>Account</b> means a unique account created for You to access
                our Service or parts of our Service.
              </p>

              <p>
                <b>Affiliate</b> means an entity that controls, is controlled by
                or is under common control with a party, where "control" means
                ownership of 50% or more of the shares, equity interest or other
                securities entitled to vote for election of directors or other
                managing authority.
              </p>

              <p>
                <b>Application</b> refers to #Fame (HashFame), the software
                program provided by the Company.
              </p>

              <p>
                <b>Company</b> (referred to as either "the Company", "We", "Us"
                or "Our" in this Agreement) refers to Datrux Systems Private
                Limited, Property No.1032, 3rd Floor, Office no.302 HSR Layout,
                24th Main Road, Sector 1 Bengaluru Urban 560102.
              </p>

              <p>
                <b>Country</b> refers to: Karnataka, India.
              </p>

              <p>
                <b>Device</b> means any device that can access the Service such
                as a computer, a cellphone or a digital tablet.
              </p>
              <p>
                <b>Personal Data</b> is any information that relates to an
                identified or identifiable individual.
              </p>
              <p>
                <b>Service</b> refers to the Application.
              </p>
              <p>
                <b>Service Provider</b> means any natural or legal person who
                processes the data on behalf of the Company. It refers to
                third-party companies or individuals employed by the Company to
                facilitate the Service, to provide the Service on behalf of the
                Company, to perform services related to the Service or to assist
                the Company in analyzing how the Service is used.
              </p>
              <p>
                <b>Third-party Social Media Service</b> refers to any website or
                any social network website through which a User can log in or
                create an account to use the Service.
              </p>
              <p>
                <b>Usage Data</b> refers to data collected automatically, either
                generated by the use of the Service or from the Service
                infrastructure itself (for example, the duration of a page
                visit).
              </p>
              <p>
                <b>You</b> means the individual accessing or using the Service,
                or the company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h1>Collecting and Using Your Personal Data</h1>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
              While using Our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include, but
              is not limited to:
            </p>

            <div className="inside-content">
              <p>Email address</p>
              <p>First name and last name</p>
              <p>Usage Data</p>
            </div>
            <div className="inside-content-section">
              <h4>Usage Data</h4>
              <p>
                Usage Data is collected automatically when using the Service.
              </p>
              <p>
                Usage data may include information such as your device's
                internet protocol address (e.g. IP address), browser type,
                browser version, the pages of our service that you visit, the
                time and date of your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p>
                When you access the service by or through a mobile device, we
                may collect certain information automatically, including, but
                not limited to, the type of mobile device you use, your mobile
                device unique ID, the IP address of your mobile device, your
                mobile operating system, the type of mobile internet browser you
                use, unique device identifiers and other diagnostic data.
              </p>
              <p>
                We may also collect information that your browser sends whenever
                you visit our service or when you access the service by or
                through a mobile device.
              </p>
            </div>

            <div className="inside-content-section">
              <h4>Information from Third-Party Social Media Services</h4>
              <p>
                The Company allows You to create an account and log in to use
                the Service through the following Third-party Social Media
                Services:
              </p>
              <p className="text-space">LinkedIn</p>
              <p>
                If you decide to register through or otherwise grant us access
                to a third-party social media service, we may collect personal
                data that is already associated with your third-party social
                media service's account, such as your name, your email address,
                your activities or your contact list associated with that
                account.
              </p>
              <p>
                You may also have the option of sharing additional information
                with the company through your third-party social media service's
                account. If you choose to provide such information and personal
                data, during registration or otherwise, you are giving the
                company permission to use, share, and store it in a manner
                consistent with this privacy policy.
              </p>
            </div>

            <div className="inside-content-section">
              <h4>Information Collected while Using the Application</h4>
              <p>
                While using our application, in order to provide features of our
                application, we may collect, with your prior permission:
              </p>
              <p className="text-space">
                Information from your Device's phone book (contacts list).
              </p>
              <p>
                We use this information to provide features of our service, to
                improve and customize our service. the information may be
                uploaded to the company's servers and/or a service provider's
                server or it may be simply stored on your device.
              </p>
              <p>
                You can enable or disable access to this information at any
                time, through your device settings.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h3>Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <div className="inside-content">
              <p>
                <b>To provide and maintain our Service,</b> including to monitor
                the usage of our Service.
              </p>

              <p>
                <b>To manage Your Account:</b> to manage your registration as a
                user of the service. the personal data you provide can give you
                access to different functionalities of the service that are
                available to you as a registered user.
              </p>

              <p>
                <b>For the performance of a contract:</b> the development,
                compliance and undertaking of the purchase contract for the
                products, items or services you have purchased or of any other
                contract with us through the service.
              </p>

              <p>
                <b>To contact You:</b> To contact You by email, telephone calls,
                SMS, or other equivalent forms of electronic communication, such
                as a mobile application's push notifications regarding updates
                or informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </p>

              <p>
                <b>To provide You</b> with news, special offers and general
                information about other goods, services and events which we
                offer that are similar to those that you have already purchased
                or enquired about unless you have opted not to receive such
                information.
              </p>
            </div>

            <div className="">
              <p>
                We may share Your personal information in the following
                situations:
              </p>
            </div>

            <div className="inside-content">
              <p>
                <b>With Service Providers:</b> We may share your personal
                information with service providers to monitor and analyze the
                use of our service, to contact you.
              </p>

              <p>
                <b>For business transfers:</b> we may share or transfer your
                personal information in connection with, or during negotiations
                of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business to another
                company.
              </p>

              <p>
                <b>With Affiliates:</b> we may share your information with our
                affiliates, in which case we will require those affiliates to
                honor this privacy policy. Affiliates include our parent company
                and any other subsidiaries, joint venture partners or other
                companies that we control or that are under common control with
                us.
              </p>

              <p>
                <b>With business partners:</b> We may share Your information
                with Our business partners to offer You certain products,
                services or promotions.
              </p>

              <p>
                <b>With other users:</b> when you share personal information or
                otherwise interact in the public areas with other users, such
                information may be viewed by all users and may be publicly
                distributed outside. If you interact with other users or
                register through a third-party social media service, your
                contacts on the third-party social media service may see your
                name, profile, pictures and description of your activity.
                Similarly, other users will be able to view descriptions of your
                activity, communicate with you and view your profile.
              </p>

              <p>
                <b>With Your consent:</b> We may disclose Your personal
                information for any other purpose with Your consent.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h3>Retention of Your Personal Data</h3>
            <p>
              The Company will retain your personal data only for as long as is
              necessary for the purposes set out in this privacy policy. We will
              retain and use your personal data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p>
              The Company will also retain usage data for internal analysis
              purposes. Usage data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of our service, or we are legally
              obligated to retain this data for longer time periods.
            </p>
          </div>

          <div className="content-section">
            <h3>Transfer of Your Personal Data</h3>
            <p>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of your state, province, country, or other
              governmental jurisdiction where the data protection laws may
              differ than those from your jurisdiction.
            </p>
            <p>
              Your consent to this privacy policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              privacy policy and no transfer of your personal data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of your data and other
              personal information.
            </p>
          </div>

          <div className="content-section">
            <h3>Delete Your Personal Data</h3>
            <p>
              You have the right to delete or request that we assist in deleting
              the personal data that we have collected about you.
            </p>
            <p>
              Our service may give you the ability to delete certain information
              about you from within the service.
            </p>
            <p>
              You may update, amend, or delete your information at any time by
              signing in to your account, if you have one, and visiting the
              account settings section that allows you to manage your personal
              information. You may also contact us to request access to,
              correct, or delete any personal information that you have provided
              to us.
            </p>
            <p>
              Please note, however, that we may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </p>
          </div>

          <div className="content-section">
            <h3>Disclosure of Your Personal Data</h3>
            <h4>Business Transactions</h4>
            <p>
              If the company is involved in a merger, acquisition or asset sale,
              your personal data may be transferred. We will provide notice
              before your personal data is transferred and becomes subject to a
              different privacy policy.
            </p>
            <h4>Law enforcement</h4>
            <p>
              Under certain circumstances, the Company may be required to
              disclose your personal data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h4>Other legal requirements</h4>
            <p>
              The Company may disclose your personal data in the good faith
              belief that such action is necessary to:
            </p>
            <div className="text-space">
              <p>Comply with a legal obligation</p>
              <p>Protect and defend the rights or property of the Company</p>
              <p>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </p>
              <p>
                Protect the personal safety of Users of the Service or the
                public
              </p>
              <p>Protect against legal liability</p>
            </div>
          </div>

          <div className="content-section">
            <h3>Security of Your Personal Data</h3>
            <p>
              The security of your personal data is important to us, but
              remember that no method of transmission over the internet, or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal data,
              we cannot guarantee its absolute security.
            </p>
          </div>

          <div className="content-section">
            <h1>Links to Other Websites</h1>
            <p>
              Our service may contain links to other websites that are not
              operated by us. If you click on a third party link, you will be
              directed to that third party's site. We strongly advise you to
              review the privacy policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </div>

          <div className="content-section">
            <h1>Changes to this Privacy Policy</h1>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our
              service, prior to the change becoming effective and update the
              "last updated" date at the top of this privacy policy.
            </p>
            <p>
              You are advised to review this privacy policy periodically for any
              changes. changes to this privacy policy are effective when they
              are posted on this page.
            </p>
          </div>

          <div className="content-section">
            <h1>Contact Us</h1>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact us:
            </p>

            <p>
              By email:<a href="info@hashfame.com">info@hashfame.com</a>
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  )
}

export default index
