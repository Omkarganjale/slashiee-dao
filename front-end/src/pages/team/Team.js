import React from 'react';
import PageLayout from '../../layout/PageLayout';

const Contact = () => {
  return (
    <PageLayout title="Team">
      <div>
        <h3>My team detail and services and bookings</h3>
        <button type="button">Create a Proposal</button>
        <button type="button">Delete</button>
      </div>

      <div>
        <h3>Proposal</h3>
        <button type="button">Vote for a Proposal</button>
      </div>
    </PageLayout>
  );
};

export default Contact;
