import React from "react";
import handleAccordion from "../../common/handleAccordion";

const Faq = () => {

  return (
    <section id="faq" className="app-faq section-padding bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h3 className="stit mb-30">
                <span className="left"></span> Privacy Policy
              </h3>
              <h6 className="mb-20">
                At EuclidOS, accessible from EuclidOS official website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by EuclidOS and how we use it.
              </h6>
              <h6 className="mb-20">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </h6>
              <h6 className="mb-20">
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in EuclidOS. This policy is not applicable to any information collected offline or via channels other than this website.
              </h6>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="content">
              <div className="accordion shadwo">
                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Consent
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p>
                      By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Information we collect
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                    </p>
                    <p className="mb-20">
                      If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                    </p>
                    <p className="mb-20">
                      When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      How we use your information
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      We use the information we collect in various ways, including to:
                    </p>
                    <ul>
                      <li className="mb-10">◆ Provide, operate, and maintain our website</li>
                      <li className="mb-10">◆ Improve, personalize, and expand our website</li>
                      <li className="mb-10">◆ Understand and analyze how you use our website</li>
                      <li className="mb-10">◆ Develop new products, services, features, and functionality</li>
                      <li className="mb-10">◆ Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                      <li className="mb-10">◆ Send you emails</li>
                      <li className="mb-10">◆ Find and prevent fraud</li>
                    </ul>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Log Files
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      EuclidOS follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.
                    </p>
                    <p className="mb-20">Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Privacy Policy Generator</a> and the <a href="https://www.privacypolicyonline.com/privacy-policy-generator">Online Privacy Policy Generator.</a></p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Advertising Partners Privacy Policies
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      You may consult this list to find the Privacy Policy for each of the advertising partners of EuclidOS.
                    </p>
                    <p className="mb-20">
                      Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on EuclidOS, which are sent directly to users browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                    </p>
                    <p className="mb-20">
                      Note that EuclidOS has no access to or control over these cookies that are used by third-party advertisers.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Third Party Privacy Policies
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      EuclidOS Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                    </p>
                    <p className="mb-20">
                      You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      CCPA Privacy Rights
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      Under the CCPA, among other rights, California consumers have the right to:
                    </p>
                    <p className="mb-20">
                      Request that a business that collects a consumers personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                    </p>
                    <p className="mb-20">
                      Request that a business delete any personal data about the consumer that a business has collected.
                    </p>
                    <p className="mb-20">
                      Request that a business that sells a consumers personal data, not sell the consumers personal data.
                    </p>
                    <p className="mb-20">
                      If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      GDPR Data Protection Rights
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                    </p>
                    <p className="mb-20">
                      The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                    </p>
                    <p className="mb-20">
                      The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                    </p>
                    <p className="mb-20">
                      The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                    </p>
                    <p className="mb-20">
                      The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                    </p>
                    <p className="mb-20">
                      The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                    </p>
                    <p className="mb-20">
                      The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                    </p>
                    <p className="mb-20">
                      If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                    </p>
                  </div>
                </div>

                <div
                  className="item mb-30"
                  onClick={(e) =>
                    handleAccordion(
                      e.currentTarget.querySelector(".accordion-info")
                    )
                  }
                >
                  <div className="title">
                    <h6>
                      Childrens Information
                      <span className="icon pe-7s-angle-right"></span>
                    </h6>
                  </div>
                  <div className="accordion-info">
                    <p className="mb-20">
                      Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                    </p>
                    <p className="mb-20">
                      EuclidOS does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
