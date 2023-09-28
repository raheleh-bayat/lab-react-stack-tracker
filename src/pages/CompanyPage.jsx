import React from "react";
import { useParams } from "react-router-dom";

const CompanyPage = ({ companies, technologies }) => {
  const { companySlug } = useParams();

  const company = companies.find((c) => c.slug === companySlug);

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div>
      <h1>{company.name}</h1>
      <p>Website: {company.website}</p>
      <p>Description: {company.description}</p>
      <img src={company.logo} alt={company.name} />

      <h2>Tech Stack</h2>
      <ul>
        {company.techStack.map((techId) => {
          const tech = technologies.find((t) => t.id === techId);
          if (!tech) {
            return null;
          }
          return (
            <li key={tech.slug}>
              <Link to={`/tech/${tech.slug}`}>
                <img src={tech.image} alt={tech.name} />
                {tech.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyPage;
