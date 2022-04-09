import React from 'react';
import PageLayout from '../../layout/PageLayout';

const TeamCreation = () => {
  return (
    <PageLayout title="Team Creation">
      <div>
        <h3> Create a Team DAO</h3>
        <button type="button">Name</button>
        <button type="button">Description</button>
        <button type="button">Wallet 1</button>
        <button type="button">Wallet n</button>
      </div>

      <div>
        <h3> Service</h3>
        <button type="button">List of Project Interested</button>
        <button type="button">Select</button>
        <button type="button">Request Details</button>
        <button type="button">Interested Team Member Profile</button>
        <button type="button">Create DAO with all Interest Party</button>
      </div>
    </PageLayout>
  );
};

export default TeamCreation;
