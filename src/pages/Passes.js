import React from 'react';
import "../Styles/Passes.css";

const Passes = () => {
  
  const membershipData = [
    { ageGroup: 'Adult (18+)', baseMembership: '$200', proMembership: '$350' },
    { ageGroup: 'Youth (12-17)', baseMembership: '$150', proMembership: '$300' },
    { ageGroup: 'Child (6-11)', baseMembership: '$100', proMembership: '$250' },
    
  ];

  return (
    <div className="passes">
      <div className="passes-table-container">
        <table className="passes-table">
          <thead>
            <tr>
              <th>Age Group</th>
              <th>Base Membership</th>
              <th>Pro Membership</th>
            </tr>
          </thead>
          <tbody>
            {membershipData.map((membership) => (
              <tr key={membership.ageGroup}>
                <td>{membership.ageGroup}</td>
                <td>{membership.baseMembership}</td>
                <td>{membership.proMembership}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Passes;