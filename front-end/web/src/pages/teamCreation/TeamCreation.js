import React from 'react';
import PageLayout from '../../layout/PageLayout';

const TeamCreation = () => {
  return (
    <PageLayout title="Team Creation">
      <div>
        <h3> Create a Team DAO</h3>
        <button>Name</button>
        <button>Description</button>
        <button>Wallet 1</button>
        <button>Wallet n</button>
      </div>

      <div>
        <h3> Service</h3>
        <button>List of Project Interested</button>
        <button>Select</button>
        <button>Request Details</button>
        <button>Interested Team Member Profile</button>
        <button>Create DAO with all Interest Party</button>
      </div>
    </PageLayout>
  );
};

export default TeamCreation;
