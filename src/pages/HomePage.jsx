import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ companies }) {
  const [company, setCompanyItems] = useState(companies);
  return (
    <div>
      <h1>List of Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.slug}>
            <Link to={`/company/${company.slug}`}>
              <img src={company.logo} alt={company.name} />
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;



