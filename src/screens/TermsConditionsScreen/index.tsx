import { FC } from "react";
import { Link } from "react-router-dom";

import ITermsConditionsScreenProps from "./props";
import "./styles.scss";
import { IMAGES } from "../../assets";
import { ArticleHeading, Text } from "../../components";
import { Routes, TextStyles } from "../../utils/constants";
import { useScrollToStart } from "../../utils/hooks";

export const TermsConditionsScreen: FC<ITermsConditionsScreenProps> = () => {
  useScrollToStart();

  return (
    <div className="article_wrapper">
      <Link to={Routes.Home}>
        <img className="logo" src={IMAGES.LOGO} alt="" />
      </Link>

      <Text type={TextStyles.ArticleHeader}>Terms&Conditions</Text>
      <Text type={TextStyles.ArticleText}>Welcome to Panda!</Text>
      <Text type={TextStyles.ArticleText}>
        These terms and conditions outline the rules and regulations for the use
        of Panda's Website, located at{" "}
        <Link to="www.panadamenus.com" className="link" target="_blank">
          www.panadamenus.com
        </Link>
      </Text>
      <Text type={TextStyles.ArticleText}>
        By accessing this website, we assume you accept these terms and
        conditions. Do not continue to use Panda if you do not agree to take all
        of the terms and conditions stated on this page.
      </Text>
      <Text type={TextStyles.ArticleText}>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "“Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same.
      </Text>

      <ArticleHeading text="Cookies" />
      <Text type={TextStyles.ArticleText}>
        We employ the use of cookies. By accessing Panda, you agreed to use
        cookies in agreement with the Panda's Privacy Policy.
      </Text>
      <Text type={TextStyles.ArticleText}>
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </Text>

      <ArticleHeading text="License" />
      <Text type={TextStyles.ArticleText}>
        Unless otherwise stated, Panda and/or its licensors own the intellectual
        property rights for all material on Panda. All intellectual property
        rights are reserved. You may access this from Panda for your own
        personal use subjected to restrictions set in these terms and
        conditions.
      </Text>

      <span className="list_title">You must not:</span>
      <ul>
        <li>Republish material from Panda</li>
        <li>Sell, rent or sub-license material from Panda</li>
        <li>Reproduce, duplicate or copy material from Panda</li>
        <li>Redistribute content from Panda</li>
      </ul>
      <Text type={TextStyles.ArticleText}>
        This Agreement shall begin on the date hereof. Our Terms and Conditions
        were created with the help of the{" "}
        <Link to="/#">Terms And Conditions Generator.</Link>
      </Text>
      <Text type={TextStyles.ArticleText}>
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website. Panda
        does not filter, edit, publish or review Comments prior to their
        presence on the website. Comments do not reflect the views and opinions
        of Panda, its agents and/or affiliates. Comments reflect the views and
        opinions of the person who post their views and opinions. To the extent
        permitted by applicable laws, Panda shall not be liable for the Comments
        or for any liability, damages or expenses caused and/or suffered as a
        result of any use of and/or posting of and/or appearance of the Comments
        on this website.
      </Text>
      <Text type={TextStyles.ArticleText}>
        Panda reserves the right to monitor all Comments and to remove any
        Comments which can be considered inappropriate, offensive or causes
        breach of these Terms and Conditions.
      </Text>
      <span className="list_title">You warrant and represent that:</span>
      <ul>
        <li>
          You are entitled to post the Comments on our website and have all
          necessary licenses and consents to do so;
        </li>
        <li>
          The Comments do not invade any intellectual property right, including
          without limitation copyright, patent or trademark of any third party;
        </li>
        <li>
          The Comments do not contain any defamatory, libelous, offensive,
          indecent or otherwise unlawful material which is an invasion of
          privacy
        </li>
        <li>
          The Comments will not be used to solicit or promote business or custom
          or present commercial activities or unlawful activity.
        </li>
      </ul>
      <Text type={TextStyles.ArticleText}>
        You hereby grant Panda a non-exclusive license to use, reproduce, edit
        and authorize others to use, reproduce and edit any of your Comments in
        any and all forms, formats or media.
      </Text>

      <ArticleHeading text="Hyperlinking to our Content" />
      <span className="list_title">
        The following organizations may link to our Website without prior
        written approval:
      </span>
      <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
        <li>News organizations;</li>
        <li>
          Online directory distributors may link to our Website in the same
          manner as they hyperlink to the Websites of other listed businesses;
          and
        </li>
        <li>
          System wide Accredited Businesses except soliciting non-profit
          organizations, charity shopping malls, and charity fundraising groups
          which may not hyperlink to our Web site.
        </li>
      </ul>
      <Text type={TextStyles.ArticleText}>
        These organizations may link to our home page, to publications or to
        other Website information so long as the link: (a) is not in any way
        deceptive; (b) does not falsely imply sponsorship, endorsement or
        approval of the linking party and its products and/or services; and (c)
        fits within the context of the linking party’s site.
      </Text>
      <span className="list_title">
        We may consider and approve other link requests from the following types
        of organizations:
      </span>
      <ul>
        <li>commonly-known consumer and/or business information sources;</li>
        <li>dot.com community sites;</li>
        <li>associations or other groups representing charities;</li>
        <li>online directory distributors;</li>
        <li>internet portals;</li>
        <li>accounting, law and consulting firms; and</li>
        <li>educational institutions and trade associations.</li>
      </ul>

      <Text type={TextStyles.ArticleText}>
        We will approve link requests from these organizations if we decide
        that: (a) the link would not make us look unfavorably to ourselves or to
        our accredited businesses; (b) the organization does not have any
        negative records with us; (c) the benefit to us from the visibility of
        the hyperlink compensates the absence of Panda; and (d) the link is in
        the context of general resource information.
      </Text>
      <Text type={TextStyles.ArticleText}>
        These organizations may link to our home page so long as the link: (a)
        is not in any way deceptive; (b) does not falsely imply sponsorship,
        endorsement or approval of the linking party and its products or
        services; and (c) fits within the context of the linking party’s site.
      </Text>
      <Text type={TextStyles.ArticleText}>
        If you are one of the organizations listed in paragraph 2 above and are
        interested in linking to our website, you must inform us by sending an
        e-mail to Panda. Please include your name, your organization name,
        contact information as well as the URL of your site, a list of any URLs
        from which you intend to link to our Website, and a list of the URLs on
        our site to which you would like to link. Wait 2-3 weeks for a response.
      </Text>
      <span className="list_title">
        Approved organizations may hyperlink to our Website as follows:
      </span>
      <ul>
        <li>By use of our corporate name; or</li>
        <li>By use of the uniform resource locator being linked to; or</li>
        <li>
          By use of any other description of our Website being linked to that
          makes sense within the context and format of content on the linking
          party’s site.
        </li>
      </ul>
      <Text type={TextStyles.ArticleText}>
        No use of Panda's logo or other artwork will be allowed for linking
        absent a trademark license agreement.
      </Text>

      <ArticleHeading text="iFrames" />
      <Text type={TextStyles.ArticleText}>
        Without prior approval and written permission, you may not create frames
        around our Webpages that alter in any way the visual presentation or
        appearance of our Website.
      </Text>

      <ArticleHeading text="Content Liability" />
      <Text type={TextStyles.ArticleText}>
        We shall not be hold responsible for any content that appears on your
        Website. You agree to protect and defend us against all claims that is
        rising on your Website. No link(s) should appear on any Website that may
        be interpreted as libelous, obscene or criminal, or which infringes,
        otherwise violates, or advocates the infringement or other violation of,
        any third party rights.
      </Text>

      <ArticleHeading text="Your Privacy" />
      <Text type={TextStyles.ArticleText}>Please read Privacy Policy</Text>

      <ArticleHeading text="Reservation of Rights" />
      <Text type={TextStyles.ArticleText}>
        We reserve the right to request that you remove all links or any
        particular link to our Website. You approve to immediately remove all
        links to our Website upon request. We also reserve the right to amen
        these terms and conditions and it’s linking policy at any time. By
        continuously linking to our Website, you agree to be bound to and follow
        these linking terms and conditions.
      </Text>

      <ArticleHeading text="Removal of links from our website" />
      <Text type={TextStyles.ArticleText}>
        If you find any link on our Website that is offensive for any reason,
        you are free to contact and inform us any moment. We will consider
        requests to remove links but we are not obligated to or so or to respond
        to you directly.
      </Text>
      <Text type={TextStyles.ArticleText}>
        We do not ensure that the information on this website is correct, we do
        not warrant its completeness or accuracy; nor do we promise to ensure
        that the website remains available or that the material on the website
        is kept up to date.
      </Text>
      <ArticleHeading text="Disclaimer" />
      <span className="list_title">
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will:
      </span>
      <ul>
        <li>
          limit or exclude our or your liability for death or personal injury;
        </li>
        <li>
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation;
        </li>
        <li>
          limit any of our or your liabilities in any way that is not permitted
          under applicable law; or
        </li>
        <li>
          exclude any of our or your liabilities that may not be excluded under
          applicable law.
        </li>
      </ul>
      <Text type={TextStyles.ArticleText}>
        The limitations and prohibitions of liability set in this Section and
        elsewhere in this disclaimer: (a) are subject to the preceding
        paragraph; and (b) govern all liabilities arising under the disclaimer,
        including liabilities arising in contract, in tort and for breach of
        statutory duty.
      </Text>
      <Text type={TextStyles.ArticleText}>
        As long as the website and the information and services on the website
        are provided free of charge, we will not be liable for any loss or
        damage of any nature.
      </Text>
    </div>
  );
};
