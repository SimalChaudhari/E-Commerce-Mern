import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Privacy Policy</h2>
              <p>
                At [Your Company Name], we take your privacy seriously. This
                privacy policy outlines the types of personal information we
                collect, how we use it, and how we protect your information.
              </p>

              <h3>1. Information We Collect</h3>
              <p>
                We collect various types of information to provide and improve
                our services:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> When you use our services, we may ask you to provide certain personally identifiable information such as your name, email address, and payment details.</li>
                <li><strong>Usage Data:</strong> We may collect information about how our services are accessed and used, such as your device type, browser, and IP address.</li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <p>
                We use the collected data for various purposes, including:
              </p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analytics and improve our services</li>
                <li>To communicate with you regarding your account and our offerings</li>
              </ul>

              <h3>3. Data Security</h3>
              <p>
                We employ a variety of security measures to protect your personal
                information. However, please be aware that no method of
                transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>

              <h3>4. Sharing of Information</h3>
              <p>
                We may share your information with trusted third parties only to
                the extent necessary for business operations or legal compliance.
              </p>

              <h3>5. Cookies</h3>
              <p>
                Our website uses cookies to improve your experience. You may
                choose to disable cookies through your browser settings, but this
                may affect the functionality of certain parts of our site.
              </p>

              <h3>6. Your Rights</h3>
              <p>
                Depending on your location, you may have certain rights related to
                your personal data, such as the right to access, correct, or delete
                your information. If you wish to exercise any of these rights, please
                contact us using the information provided below.
              </p>

              <h3>7. Changes to This Privacy Policy</h3>
              <p>
                We may update this privacy policy from time to time. We will notify
                you of any changes by posting the new policy on this page. Please
                review this policy periodically for any updates.
              </p>

              <h3>8. Contact Us</h3>
              <p>
                If you have any questions or concerns about our privacy policy, you
                can contact us at:
              </p>
              <p>
                Email: [Your Company Email]
                <br />
                Phone: [Your Company Phone Number]
                <br />
                Address: [Your Company Address]
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
