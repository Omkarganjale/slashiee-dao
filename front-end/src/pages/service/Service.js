import React from 'react';
import PageLayout from '../../layout/PageLayout';

const Home = () => {
  return (
    <PageLayout title="Service">
      <div>
        <h3>View Service Detail</h3>
        <button type="button">Book a Service</button>
      </div>

      <div>
        <h3>View Service Detail</h3>
        <button type="button">Valid a service</button>
      </div>

      <div>
        <h3>View Service Detail</h3>
        <button type="button">Ask for Payment</button>
      </div>
    </PageLayout>
  );
};

export default Home;
