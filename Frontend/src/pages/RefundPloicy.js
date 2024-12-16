import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Refund Policy</h2>
              <p>
                Thank you for shopping with us at [Your Company Name]. We strive to
                ensure that our customers are completely satisfied with their
                purchases. However, if you are not entirely satisfied with your
                purchase, we are here to assist you in obtaining a refund, under
                the terms outlined below.
              </p>

              <h3>1. Eligibility for Refund</h3>
              <p>
                To be eligible for a refund, you must meet the following
                criteria:
              </p>
              <ul>
                <li>The item must be returned within [number of days] days from the date of purchase.</li>
                <li>The item must be unused, undamaged, and in its original packaging.</li>
                <li>The receipt or proof of purchase must be provided.</li>
              </ul>

              <h3>2. Non-refundable Items</h3>
              <p>
                Some items are non-refundable, including but not limited to:
              </p>
              <ul>
                <li>Gift cards</li>
                <li>Downloadable software and digital products</li>
                <li>Items on sale or clearance</li>
              </ul>

              <h3>3. Refund Process</h3>
              <p>
                Once your return is received and inspected, we will notify you
                about the status of your refund. If your refund is approved, it
                will be processed, and a credit will automatically be applied to
                your original payment method within [number of days] days.
              </p>

              <h3>4. Shipping Costs</h3>
              <p>
                Shipping costs are non-refundable. If you receive a refund, the
                cost of return shipping will be deducted from your refund, unless
                the return is due to an error on our part (e.g., wrong item sent).
              </p>

              <h3>5. Exchanges</h3>
              <p>
                We currently do not offer exchanges. If you wish to exchange an
                item, please return the item for a refund and place a new order.
              </p>

              <h3>6. Damaged or Defective Items</h3>
              <p>
                If you receive a damaged or defective item, please contact us
                immediately at [Your Company Email] with details and, if possible,
                photographic evidence. We will arrange for a replacement or refund.
              </p>

              <h3>7. How to Return Your Item</h3>
              <p>
                To return an item, please contact us at [Your Company Email] or
                call [Your Company Phone Number] to initiate the return process.
                We will provide you with the necessary instructions for returning
                your item.
              </p>

              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about our refund policy, please contact
                us at:
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

export default RefundPolicy;
