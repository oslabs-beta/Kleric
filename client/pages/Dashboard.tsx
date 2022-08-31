import React from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';

const Dashboard = () => {

  fetchKubernetesData()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dignissimos accusantium tempora sit assumenda dolorum alias vero ut, eligendi perspiciatis exercitationem. A incidunt natus illum fugit ad impedit qui harum!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aspernatur totam eum, commodi quod facilis quo asperiores illo. Nulla saepe beatae ipsa aspernatur explicabo natus veniam quia. Sed, laborum maxime.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ab. Deserunt tenetur qui, aspernatur ullam saepe exercitationem hic sunt, in debitis, explicabo nobis cum! Sint sequi tempora quaerat dicta accusantium?</p>
    </div>
  )
}

export default Dashboard;