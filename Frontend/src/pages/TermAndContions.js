import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Terms and Conditions</h2>
              <p>
                Welcome to [Your Company Name]. By using our website and services,
                you agree to the following terms and conditions. Please read them carefully.
              </p>

              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using the services provided by [Your Company Name], you agree to
                comply with and be bound by these terms and conditions, as well as our privacy
                policy. If you do not agree with these terms, you should not use our website.
              </p>

              <h3>2. Use of Our Website</h3>
              <p>
                You agree to use our website in accordance with applicable laws and regulations. You
                must not engage in any activity that could damage, disable, or impair the website or
                interfere with others' use of the site.
              </p>

              <h3>3. Account Registration</h3>
              <p>
                To access certain services or features on the website, you may be required to create
                an account. You agree to provide accurate, current, and complete information during
                registration and to update your information if it changes.
              </p>

              <h3>4. Intellectual Property</h3>
              <p>
                All content on the website, including text, images, graphics, logos, and software, is
                the property of [Your Company Name] or its licensors and is protected by copyright,
                trademark, and other intellectual property laws. You may not use, reproduce, or
                distribute any content without permission.
              </p>

              <h3>5. Product Information</h3>
              <p>
                We make every effort to ensure the accuracy of product descriptions, prices, and
                availability. However, we cannot guarantee that all information is error-free. If a
                product is listed at an incorrect price or with incorrect information, we reserve the
                right to cancel or refuse any orders placed for that product.
              </p>

              <h3>6. Payment Terms</h3>
              <p>
                All payments for products or services must be made through the payment methods
                provided during checkout. You agree to provide accurate payment information and to
                pay the applicable fees for your purchases.
              </p>

              <h3>7. Shipping and Delivery</h3>
              <p>
                Shipping and delivery of products are subject to our shipping policy, which is
                incorporated into these terms. You acknowledge and agree to comply with the shipping
                terms outlined on our website.
              </p>

              <h3>8. Returns and Refunds</h3>
              <p>
                Our return and refund policy is available on our website. By purchasing from us, you
                agree to be bound by the terms of our return and refund policy.
              </p>

              <h3>9. Limitation of Liability</h3>
              <p>
                [Your Company Name] shall not be liable for any damages arising from the use or
                inability to use the website, including but not limited to indirect, incidental,
                special, or consequential damages.
              </p>

              <h3>10. Governing Law</h3>
              <p>
                These terms and conditions shall be governed by and construed in accordance with the
                laws of [Your Jurisdiction]. Any disputes arising from these terms shall be subject
                to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
              </p>

              <h3>11. Changes to the Terms</h3>
              <p>
                We reserve the right to modify or update these terms at any time. Any changes will
                be posted on this page, and your continued use of the website after such changes
                indicates your acceptance of the revised terms.
              </p>

              <h3>12. Contact Information</h3>
              <p>
                If you have any questions regarding these terms and conditions, please contact us:
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

export default TermAndConditions;
