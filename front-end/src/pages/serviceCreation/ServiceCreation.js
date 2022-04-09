import React from 'react';
import PageLayout from '../../layout/PageLayout';

const ServiceCreation = () => {
  return (
    <PageLayout title="service Creation">
      <div>
        <h3> Create a Service</h3>
        <button type="button">Team</button>
        <button type="button">Price</button>
        <button type="button">Split</button>
      </div>
    </PageLayout>
  );
};

export default ServiceCreation;
