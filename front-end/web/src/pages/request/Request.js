import React from 'react';
import PageLayout from '../../layout/PageLayout';

const About = () => {
  return (
    <PageLayout title="Request">
      <div>
        <h3>Create a Service Request</h3>
        <button>Description</button>
      </div>

      <div>
        <h3> Service Request</h3>
        <button>Description</button>
        <button>Delete</button>
      </div>

      <div>
        <h3> Service Search</h3>
        <button>List</button>
        <button>Show Interest</button>
        <button>Build Team</button>
      </div>
    </PageLayout>
  );
};

export default About;
