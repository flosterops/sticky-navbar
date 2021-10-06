import {
  CompaniesWrapper,
  Company,
  CompanyDescription,
  CompanyTitle,
} from "./styles";

const Companies = ({ companies }) => {
  return (
    <CompaniesWrapper>
      {companies.map(({ id, company, description }) => (
        <Company key={id}>
          <CompanyTitle>{company}</CompanyTitle>
          <CompanyDescription>{description}</CompanyDescription>
        </Company>
      ))}
    </CompaniesWrapper>
  );
};

export { Companies };
