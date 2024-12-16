import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Shipping Policy</h2>
              <p>
                Thank you for shopping with [Your Company Name]. We are committed to delivering your orders in a timely and efficient manner. Please read our shipping policy below to understand how your orders are processed and shipped.
              </p>

              <h3>1. Shipping Methods and Delivery Times</h3>
              <p>
                We offer various shipping methods depending on your location and the items you purchase. Delivery times vary based on the shipping method chosen during checkout:
              </p>
              <ul>
                <li><strong>Standard Shipping:</strong> [Delivery time, e.g., 5-7 business days]</li>
                <li><strong>Expedited Shipping:</strong> [Delivery time, e.g., 2-3 business days]</li>
                <li><strong>Express Shipping:</strong> [Delivery time, e.g., 1-2 business days]</li>
              </ul>

              <h3>2. Shipping Rates</h3>
              <p>
                Shipping rates depend on the destination, weight, and size of your order. The final shipping cost will be displayed at checkout before you complete your purchase.
              </p>

              <h3>3. Order Processing Time</h3>
              <p>
                All orders are processed within [number of days, e.g., 1-2 business days]. Orders placed on weekends or holidays will be processed the next business day.
              </p>

              <h3>4. International Shipping</h3>
              <p>
                We offer international shipping to select countries. Please note that international shipping may be subject to additional customs fees, taxes, and import duties, which are the responsibility of the customer. Delivery times for international orders may vary depending on the destination country.
              </p>

              <h3>5. Shipping Restrictions</h3>
              <p>
                We currently do not ship to [list any regions/countries you do not ship to]. Additionally, certain items may have shipping restrictions based on location, size, or other factors.
              </p>

              <h3>6. Tracking Your Order</h3>
              <p>
                Once your order has been shipped, you will receive an email with tracking information. You can use this tracking number to monitor the status of your shipment on the carrier's website.
              </p>

              <h3>7. Delivery Issues</h3>
              <p>
                If you experience any issues with your delivery (e.g., missing packages, delays), please contact us immediately at [Your Company Email] or call [Your Company Phone Number], and we will assist you in resolving the issue.
              </p>

              <h3>8. Shipping Address</h3>
              <p>
                Please ensure that the shipping address provided during checkout is accurate and complete. We are not responsible for delays or issues caused by incorrect or incomplete shipping addresses.
              </p>

              <h3>9. Damaged or Lost Items</h3>
              <p>
                If your order arrives damaged or is lost during transit, please contact us within [number of days, e.g., 7 days] of receiving your order. We will work with you to resolve the issue, either through a replacement or refund, depending on the circumstances.
              </p>

              <h3>10. Contact Us</h3>
              <p>
                If you have any questions regarding our shipping policy, please reach out to us:
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

export default ShippingPolicy;
