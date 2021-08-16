import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import Header from "../PrivacyPolicy/Header";
const PrivacyPolicy = () => {
  const useStyles = makeStyles((theme) => ({
    paperTwo: {
      padding: theme.spacing(6),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(10),
      },

      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(5),
      },

      [theme.breakpoints.down("xs")]: {
        padding: theme.spacing(1),
      },
    },
    contentLinks: {
      color: "#e75788",
    },
    mainPrivacyHeading: {
      //for 'PRIVACY NOTICE' heading  ..
    },
    contentTypography: {
      // for Typography content ..
    },
    contentSmallHeading: {
      // for h2 headings ..
    },
    contentHeading: {
      // for h1 headings ..
    },
    contentItalic: {
      fontStyle: "italic",
    },
    contentBold: {
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <div>
        <Header />
      </div>
      <Paper className={classes.paperTwo}>
        <Typography className={classes.mainPrivacyHeading} variant="h4">
          PRIVACY NOTICE
        </Typography>
        <br />
        <Typography className={classes.contentTypography}>
          Last updated March 01, 2021
        </Typography>
        <br />
        <Typography className={classes.contentTypography}>
          Thank you for choosing to be part of our community at Techscientia,
          doing business as NOQ ("NOQ", "we", "us", "our"). We are committed to
          protecting your personal information and your right to privacy. If you
          have any questions or concerns about this privacy notice, or our
          practices with regards to your personal information, please contact us
          at info@noqhub.com.
        </Typography>
        <Typography className={classes.contentTypography}>
          When you visit our website http://www.noqhub.com (the "Website"), use
          our mobile application, as the case may be (the "App") and more
          generally, use any of our services (the "Services", which include the
          Website and App), we appreciate that you are trusting us with your
          personal information. We take your privacy very seriously. In this
          privacy notice, we seek to explain to you in the clearest way possible
          what information we collect, how we use it and what rights you have in
          relation to it. We hope you take some time to read through it
          carefully, as it is important. If there are any terms in this privacy
          notice that you do not agree with, please discontinue use of our
          Services immediately.
        </Typography>
        <Typography className={classes.contentTypography}>
          This privacy notice applies to all information collected through our
          Services (which, as described above, includes our Website and App), as
          well as, any related services, sales, marketing or events.
        </Typography>
        <Typography className={classes.contentTypography}>
          Please read this privacy notice carefully as it will help you
          understand what we do with the information that we collect.
        </Typography>
        <h1>TABLE OF CONTENTS</h1>
        <ol>
          <a href="#link-one" className={classes.contentLinks}>
            <li> WHAT INFORMATION DO WE COLLECT?</li>
          </a>
          <a href="#link-two" className={classes.contentLinks}>
            <li>HOW DO WE USE YOUR INFORMATION? </li>
          </a>
          <a href="#link-three" className={classes.contentLinks}>
            <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE? </li>
          </a>
          <a href="#link-four" className={classes.contentLinks}>
            <li>WHO WILL YOUR INFORMATION BE SHARED WITH? </li>
          </a>
          <a href="#link-five" className={classes.contentLinks}>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? </li>
          </a>
          <a href="#link-six" className={classes.contentLinks}>
            <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS? </li>
          </a>
          <a href="#link-seven" className={classes.contentLinks}>
            <li>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES? </li>
          </a>
          <a href="#link-eight" className={classes.contentLinks}>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION? </li>
          </a>
          <a href="#link-nine" className={classes.contentLinks}>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          </a>
          <a href="#link-ten" className={classes.contentLinks}>
            <li>WHAT ARE YOUR PRIVACY RIGHTS? </li>
          </a>
          <a href="#link-eleven" className={classes.contentLinks}>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES </li>
          </a>
          <a href="#link-twelve" className={classes.contentLinks}>
            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? </li>
          </a>
          <a href="#link-thirteen" className={classes.contentLinks}>
            <li>DO WE MAKE UPDATES TO THIS NOTICE? </li>
          </a>
          <a href="#link-fourteen" className={classes.contentLinks}>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE? </li>
          </a>
          <a href="#link-fifteen" className={classes.contentLinks}>
            <li>
              HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?
            </li>
          </a>
        </ol>
        <h1 id="link-one" className={classes.contentHeading}>
          1. WHAT INFORMATION DO WE COLLECT?
        </h1>
        <h2 className={classes.contentSmallHeading}>
          Personal information you disclose to us
        </h2>
        <span className={classes.contentItalic}>
          In Short: We collect personal information that you provide to us.
        </span>
        <Typography className={classes.contentTypography}>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services(such as by posting messages
          in our online forums or entering competitions, contests or giveaways)
          or otherwise when you contact us.
        </Typography>
        <Typography className={classes.contentTypography}>
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make and
          the products and features you use. The personal information we collect
          may include the following:
        </Typography>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentBold}>
            {" "}
            Personal Information Provided by You.
          </span>{" "}
          &nbsp; We collect phone numbers; names; email addresses; mailing
          addresses; job titles; usernames; passwords; contact preferences;
          billing addresses; debit/credit card numbers; contact or
          authentication data; and other similar information.
        </Typography>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentBold}> Payment Data.</span> &nbsp;We
          may collect data necessary to process your payment if you make
          purchases, such as your payment instrument number (such as a credit
          card number), and the security code associated with your payment
          instrument. All payment data is stored by Foree. You may find their
          privacy notice link(s) here https://foree.co/privacy.
        </Typography>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentBold}>Social Media Login Data.</span>
          &nbsp; We may provide you with the option to register with us using
          your existing social media account details, like your Facebook,
          Twitter or other social media account. If you choose to register in
          this way, we will collect the information described in the section
          called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below. <br />
          <br />
          All personal information that you provide to us must be true, complete
          and accurate, and you must notify us of any changes to such personal
          information.
        </Typography>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentBold}>
            Information automatically collected
          </span>{" "}
          <br /> <br />
          <span className={classes.contentItalic}>
            In Short: Some information — such as your Internet Protocol (IP)
            address and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </span>
          We automatically collect certain information when you visit, use or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting
          purposes.
          <br /> <br />
          Like many businesses, we also collect information through cookies and
          similar technologies. <br /> <br />
          The information we collect includes:
        </Typography>
        <Typography className={classes.contentTypography}>
          <ul>
            <li>
              Log and Usage Data. Log and usage data is service-related,
              diagnostic, usage and performance information our servers
              automatically collect when you access or use our Services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type and settings and information about your activity in
              the Services (such as the date/time stamps associated with your
              usage,pages and files viewed, searches and other actions you take
              such as which features you use), device event information (such as
              system activity, error reports (sometimes called 'crash dumps')
              and hardware settings).
            </li>
            <li>
              Device Data. We collect device data such as information about your
              computer, phone, tablet or other device you use to access the
              Services. Depending on the device used, this device data may
              include information such as your IP address (or proxy server),
              device and application identification numbers, location, browser
              type, hardware model Internet service provider and/or mobile
              carrier, operating system and system configuration information.
            </li>
            <li>
              Location Data. We collect location data such as information about
              your device's location, which can be either precise or imprecise.
              How much information we collect depends on the type and settings
              of the device you use to access the Services. For example, we may
              use GPS and other technologies to collect geolocation data that
              tells us your current location (based on your IP address). You can
              opt out of allowing us to collect this information either by
              refusing access to the information or by disabling your Location
              setting on your device. Note however, if you choose to opt out,
              you may not be able to use certain aspects of the Services.
            </li>
          </ul>
        </Typography>
        <h2 className={classes.contentSmallHeading}>
          Information collected through our App
        </h2>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            In Short: We collect information regarding your geolocation, mobile
            device, push notifications, when you use our App.
          </span>
          <br />
          If you use our App, we also collect the following information:
        </Typography>
        <Typography className={classes.contentTypography}>
          <ul>
            <li>
              <span className={classes.contentItalic}>
                Geolocation Information.
              </span>
              We may request access or permission to and track location-based
              information from your mobile device, either continuously or while
              you are using our App, to provide certain location-based services.
              If you wish to change our access or permissions, you may do so in
              your device's settings.
            </li>
            <li>
              <span className={classes.contentItalic}>
                Mobile Device Access.
              </span>
              We may request access or permission to certain features from your
              mobile device, including your mobile device's calendar, reminders,
              sensors, sms messages, social media accounts, storage, bluetooth,
              camera, and other features. If you wish to change our access or
              permissions, you may do so in your device's settings.
            </li>
            <li>
              <span className={classes.contentItalic}>Mobile Device Data.</span>
              We automatically collect device information (such as your mobile
              device ID, model and manufacturer), operating system, version
              information and system configuration information, device and
              application identification numbers, browser type and version,
              hardware model Internet service provider and/or mobile carrier,
              and Internet Protocol (IP) address (or proxy server). If you are
              using our App, we may also collect information about the phone
              network associated with your mobile device, your mobile device’s
              operating system or platform, the type of mobile device you use,
              your mobile device’s unique device ID and information about the
              features of our App you accessed.
            </li>
            <li>
              <span className={classes.contentItalic}>Push Notifications.</span>
              We may request to send you push notifications regarding your
              account or certain features of the App. If you wish to opt-out
              from receiving these types of communications, you may turn them
              off in your device's settings.
              <br /> This information is primarily needed to maintain the
              security and operation of our App, for troubleshooting and for our
              internal analytics and reporting purposes.
            </li>
          </ul>
        </Typography>
        <h2 className={classes.contentSmallHeading}>
          Information collected from other sources
        </h2>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short: </span> We may
            collect limited data from public databases, marketing partners,
            /social media platforms, and other outside sources.
          </span>
          In order to enhance our ability to provide relevant marketing, offers
          and services to you and update our records, we may obtain information
          about you from other sources, such as public databases, joint
          marketing partners, affiliate programs, data providers, social media
          platforms,as well as from other third parties. This information
          includes mailing addresses, job titles, email addresses, phone
          numbers, intent data (or user behavior data), Internet Protocol (IP)
          addresses, social media profiles, social media URLs and custom
          profiles, for purposes of targeted advertising and event promotion. If
          you interact with us on a social media platform using your social
          media account (e.g. Facebook or Twitter), we receive personal
          information about you such as your name, email address, and gender.
          Any personal information that we collect from your social media
          account depends on your social media account's privacy settings.
        </Typography>
        <h1 id="link-two" className={classes.contentHeading}>
          2. HOW DO WE USE YOUR INFORMATION?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>We process
            your information for purposes based on legitimate business
            interests, the fulfilment of our contract with you, compliance with
            our legal obligations, and/or your consent.
          </span>
          We use personal information collected via our Services for a variety
          of business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations. We
          indicate the specific processing grounds we rely on next to each
          purpose listed below.
          <br />
          We use the information we collect or receive:
        </Typography>
        <Typography className={classes.contentTypography}>
          <ul>
            <li>
              <span className={classes.contentBold}>
                To facilitate account creation and logon process.
              </span>
              If you choose to link your account with us to a third-party
              account (such as your Google or Facebook account), we use the
              information you allowed us to collect from those third parties to
              facilitate account creation and logon process for the performance
              of the contract. See the section below headed "HOW DO WE HANDLE
              YOUR SOCIAL LOGINS? " for further information.
            </li>
            <li>
              <span className={classes.contentBold}>To post testimonials.</span>{" "}
              We post testimonials on our Services that may contain personal
              information. Prior to posting a testimonial, we will obtain your
              consent to use your name and the content of the testimonial. If
              you wish to update, or delete your testimonial, please contact us
              at support@noqhub.com and be sure to include your name,
              testimonial location, and contact information.
            </li>
            <li>
              <span className={classes.contentBold}>Request feedback.</span> We
              may use your information to request feedback and to contact you
              about your use of our Services.
            </li>
            <li>
              <span className={classes.contentBold}>
                To enable user-to-user communications.
              </span>{" "}
              We may use your information in order to enable user-to-user
              communications with each user's consent.
            </li>
            <li>
              <span className={classes.contentBold}>
                To manage user accounts.{" "}
              </span>
              We may use your information for the purposes of managing our
              account and keeping it in working order.
            </li>
            <li>
              <span className={classes.contentBold}>
                To send administrative information to you.
              </span>{" "}
              We may use your personal information to send you product, service
              and new feature information and/or information about changes to
              our terms,conditions, and policies.
            </li>
            <li>
              <span className={classes.contentBold}>
                To protect our Services.
              </span>
              We may use your information as part of our efforts to keep our
              Servicessafe and secure (for example, for fraud monitoring and
              prevention).
            </li>
            <li>
              <span className={classes.contentBold}>
                We may use your information as part of our efforts to keep our
                Servicessafe and secure (for example, for fraud monitoring and
                prevention).
              </span>
            </li>
            <li>
              <span className={classes.contentBold}>
                To respond to legal requests and prevent harm.{" "}
              </span>
              If we receive a subpoena or other legal request, we may need to
              inspect the data we hold to determine how to respond.
            </li>
            <li>
              <span className={classes.contentBold}>
                Fulfill and manage your orders.
              </span>
              We may use your information to fulfill and manage your orders,
              payments, returns, and exchanges made through the Services.
            </li>
            <li>
              <span className={classes.contentBold}>
                Administer prize draws and competitions.
              </span>
              We may use your information to administer prize draws and
              competitions when you elect to participate in our competitions.
            </li>
            <li>
              <span className={classes.contentBold}>
                To deliver and facilitate delivery of services to the user.
              </span>
              We may use your information to provide you with the requested
              service.
            </li>
            <li>
              <span className={classes.contentBold}>
                To respond to user inquiries/offer support to users.
              </span>
              We may use your information to respond to your inquiries and solve
              any potential issues you might have with the use of our Services.
            </li>
            <li>
              <span className={classes.contentBold}>
                To send you marketing and promotional communications.
              </span>
              We and/or our third-party marketing partners may use the personal
              information you send to us for our marketing purposes, if this is
              in accordance with your marketing preferences. For example, when
              expressing an interest in obtaining information about us or our
              Services, subscribing to marketing or otherwise contacting us, we
              will collect personal information from you. You can opt-out of our
              marketing emails at any time (see the "WHAT ARE YOUR PRIVACY
              RIGHTS?" below).
            </li>
            <li>
              <span className={classes.contentBold}>
                Deliver targeted advertising to you.
              </span>
              We may use your information to develop and display personalized
              content and advertising (and work with third parties who do so)
              tailored to your interests and/or location and to measure its
              effectiveness.
            </li>
          </ul>
        </Typography>
        <h1 id="link-three" className={classes.contentHeading}>
          3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            In Short: We only share information with your consent, to comply
            with laws, to provide you with services, to protect your rights, or
            to fulfill business obligations.
          </span>
          <br />
          We may process or share your data that we hold based on the following
          legal basis:
        </Typography>
        <Typography className={classes.contentTypography}>
          <ul>
            <li>
              <span className={classes.contentBold}>Consent:</span> We may
              process your data if you have given us specific consent to use
              your personal information for a specific purpose.
            </li>
            <li>
              <span className={classes.contentBold}>Legitimate Interests:</span>{" "}
              We may process your data when it is reasonably necessary to
              achieve our legitimate business interests.
            </li>
            <li>
              <span className={classes.contentBold}>
                Performance of a Contract:
              </span>{" "}
              Where we have entered into a contract with you, we may process
              your personal information to fulfill the terms of our contract.
            </li>
            <li>
              <span className={classes.contentBold}>Legal Obligations:</span> We
              may disclose your information where we are legally required to do
              so in order to comply with applicable law, governmental requests,
              a judicial proceeding, court order, or legal process, such as in
              response to a court order or a subpoena (including in response to
              public authorities to meet national security or law enforcement
              requirements).
            </li>
            <li>
              <span className={classes.contentBold}>Vital Interests:</span> We
              may disclose your information where we believeit is necessary to
              investigate, prevent, or take action regarding potential
              violations of our policies, suspected fraud, situations involving
              potential threats to the safety of any person and illegal
              activities, or as evidence in litigation in which we are involved.
            </li>
          </ul>
          <br />
          More specifically, we may need to process your data or share your
          personal information in the following situations:
        </Typography>
        <br />
        <Typography className={classes.contentTypography}>
          <ul>
            <li>
              <span className={classes.contentBold}>Business Transfers.</span>{" "}
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </li>
            <li>
              <span className={classes.contentBold}>
                Google Maps Platform APIs.
              </span>
              We may share your information with certain Google Maps Platform
              APIs (e.g., Google Maps API, Place API). To find out more about
              Google’s Privacy Policy, please refer to this link
              https://policies.google.com/privacy. We use certain Google Maps
              Platform APIs to retrieve certain information when you make
              location-specific requests. This includes: User location; and
              other similar information. A full list of what we use information
              for can be found in this sectionand in the previous section titled
              "HOW DO WE USE YOUR INFORMATION?".We obtain and store on your
              device ('cache') your locationfor one (1) months. You may revoke
              your consent anytime by contacting us at the contact details
              provided at the end of this document. The Google Maps Platform
              APIs that we use store and access cookies and other information on
              your devices. If you are a user currently in the European Economic
              Area (EU countries, Iceland, Liechtenstein and Norway) or United
              Kingdom, please take a look at our Cookie Notice.
            </li>
            <li>
              <span className={classes.contentBold}>
                Vendors, Consultants and Other Third-Party Service Providers.
              </span>
              We may share your data with third-party vendors, service
              providers, contractors or agents who perform services for us or on
              our behalf and require access to such information to do that work.
              Examples include: payment processing, data analysis, email
              delivery, hosting services, customer service and marketing
              efforts. We may allow selected third parties to use tracking
              technology on the Services, which will enable them to collect data
              on our behalf about how you interact with our Services over time.
              This information may be used to, among other things, analyze and
              track data, determine the popularity of certain content, pages or
              features, and better understand online activity. Unless described
              in this notice, we do not share, sell, rent or trade any of your
              information with third parties for their promotional purposes.{" "}
            </li>
            <li>
              <span className={classes.contentBold}>
                Third-Party Advertisers.
              </span>{" "}
              We may use third-party advertising companies to serve ads when you
              visit or use the Services. These companies may use information
              about your visits to our Website(s) and other websites that are
              contained in web cookies and other tracking technologies in order
              to provide advertisements about goods and services of interest to
              you.{" "}
            </li>
            <li>
              <span className={classes.contentBold}>Business Partners.</span> We
              may share your information with our business partners to offer you
              certain products, services or promotions.
            </li>
            <li>
              <span className={classes.contentBold}>Other Users.</span> When you
              share personal information (for example, by posting comments,
              contributions or other content to the Services) or otherwise
              interact with public areas of the Services, such personal
              information may be viewed by all users and may be publicly made
              available outside the Services in perpetuity. If you interact with
              other users of our Services and register for our Services through
              a social network (such as Facebook), your contacts on the social
              network will see your name, profile photo, and descriptions of
              your activity. Similarly, other users will be able to view
              descriptions of your activity, communicate with you within our
              Services, and view your profile.
            </li>
          </ul>
        </Typography>
        <h1 id="link-four" className={classes.contentHeading}>
          4. WHO WILL YOUR INFORMATION BE SHARED WITH?{" "}
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>We only share
            information with the following categories of third parties.
          </span>
        </Typography>
        <Typography className={classes.contentTypography}>
          We only share and disclose your information with the following
          categories of third parties. If we have processed your data based on
          your consent and you wish to revoke your consent, please contact us
          using the contact details provided in the section below titled "HOW
          CAN YOU CONTACT US ABOUT THIS NOTICE?".
          <br />
          <ul>
            <li>Payment Processors</li>
            <li>User Account Registration and Authentication Services</li>
            <li>Business Partners availing the app services</li>
          </ul>
        </Typography>

        <h1 id="link-five" className={classes.contentHeading}>
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>We may use
            cookies and other tracking technologies to collect and store your
            information.
          </span>
          <br />
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </Typography>

        <h1 Link="link-six" className={classes.contentHeading}>
          6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>In Short: If
            you choose to register or log in to our services using a social
            media account, we may have access to certain information about you.
          </span>
          <br />
          Our Services offers you the ability to register and login using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, profile picture as well as other information you choose
          to make public on such social media platform.
        </Typography>
        <br />
        <Typography className={classes.contentTypography}>
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </Typography>
        <h1 id="link-seven" className={classes.contentHeading}>
          7. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>We are not
            responsible for the safety of any information that you share with
            third-party providers who advertise, but are not affiliated with,
            our Website.
          </span>
          <br />
          The Services may contain advertisements from third parties that are
          not affiliated with us and which may link to other websites, online
          services or mobile applications. We cannot guarantee the safety and
          privacy of data you provide to any third parties. Any data collected
          by third parties is not covered by this privacy notice. We are not
          responsible for the content or privacy and security practices and
          policies of any third parties, including other websites, services or
          applications that may be linked to or from the Services. You should
          review the policies of such third parties and contact them directly to
          respond to your questions.
        </Typography>
        <h1 id="link-eight" className={classes.contentHeading}>
          8. HOW LONG DO WE KEEP YOUR INFORMATION?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span> We keep your
            information for as long as necessary to fulfill the purposes
            outlined in this privacy notice unless otherwise required by law.
          </span>
          <br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than six
          (6) months past the termination of the user's account.
          <br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </Typography>
        <h1 id="link-nine" className={classes.contentHeading}>
          9. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span> We aim to
            protect your personal information through a system of organizational
            and technical security measures.
          </span>
          <br />
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure, so
          we cannot promise or guarantee that hackers, cybercriminals, or other
          unauthorized third parties will not be able to defeat our security,
          and improperly collect, access, steal, or modify your information.
          Although we will do our best to protect your personal information,
          transmission of personal information to and from our Services is at
          your own risk. You should only access the Services within a secure
          environment.
        </Typography>
        <h1 id="link-ten" className={classes.contentHeading}>
          10. WHAT ARE YOUR PRIVACY RIGHTS?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span> You may
            review, change, or terminate your account at any time.
          </span>
          <br />
          If you are a resident in the EEA or UK and you believe we are
          unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          <br />
          If you are a resident in the EEA or UK and you believe we are
          unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          <br />
          If you are a resident in Switzerland, the contact details for the data
          protection authorities are available here:
          <a href='https://www.edoeb.admin.ch/edoeb/en/home.html'> edoeb Home </a>
          <br />
          If you have questions or comments about your privacy rights, you may
          email us at support@noqhub.com.
        </Typography>
        <h2 className={classes.contentSmallHeading}>Account Information</h2>
        <Typography className={classes.contentTypography}>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
          <br />
          <ul>
            <li>
              Log in to your account settings and update your user account.
            </li>
            <li>Contact us using the contact information provided.</li>
          </ul>
          <br />
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          Terms of Use and/or comply with applicable legal requirements.
        </Typography>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentBold}>
            Cookies and similar technologies:
          </span>
          Most Web browsers are set to accept cookies by default. If you prefer,
          you can usually choose to set your browser to remove cookies and to
          reject cookies. If you choose to remove cookies or reject cookies,
          this could affect certain features or services of our Services. To
          opt-out of interest-based advertising by advertisers on our Services
          visit http://www.aboutads.info/choices/
        </Typography>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentBold}>
            Opting out of email marketing:
          </span>
          You can unsubscribe from our marketing email list at any time by
          clicking on the unsubscribe link in the emails that we send or by
          contacting us using the details provided below. You will then be
          removed from the marketing email list — however, we may still
          communicate with you, for example to send you service-related emails
          that are necessary for the administration and use of your account, to
          respond to service requests, or for other non-marketing purposes. To
          otherwise opt-out, you may:
          <br />
          <ul>
            <li>Access your account settings and update your preferences.</li>
            <li>Contact us using the contact information provided.</li>
          </ul>
        </Typography>
        <h1 id="link-eleven" className={classes.contentHeading}>
          11. CONTROLS FOR DO-NOT-TRACK FEATURES
        </h1>
        <Typography className={classes.contentTypography}>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </Typography>
        <h1 id="link-twelve" className={classes.contentHeading}>
          12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>Yes, if you
            are a resident of California, you are granted specific rights
            regarding access to your personal information.
          </span>
          <br />
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
          <br />
          If you are under 18 years of age, reside in California, and have a
          registered account with a Service, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below, and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g. backups, etc.).
        </Typography>
        <h1 id="link-thirteen" className={classes.contentHeading}>
          13. DO WE MAKE UPDATES TO THIS NOTICE?
        </h1>
        <Typography className={classes.contentTypography}>
          <span className={classes.contentItalic}>
            <span className={classes.contentBold}>In Short:</span>Yes, we will
            update this notice as necessary to stay compliant with relevant
            laws.
          </span>
          <br />
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </Typography>
        <h1 id="link-fourteen" className={classes.contentHeading}>
          14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </h1>
        <Typography className={classes.contentTypography}>
          If you have questions or comments about this notice, you may email us
          at support@noqhub.com or by post to: <br /> <br />
          Techscientia 38/2 2nd Gizri Street, Phase 4<br /> Defence Housing
          Authority
          <br />
          Karachi, Sindh
          <br /> Pakistan
        </Typography>
        <h1 id="link-fifteen" className={classes.contentHeading}>
          15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
          YOU?
        </h1>
        <Typography className={classes.contentTypography}>
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information, please
          visit: support@noqhub.com.
        </Typography>
      </Paper>
    </div>
  );
};

export default PrivacyPolicy;
