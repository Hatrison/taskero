import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentCompany } from "@/redux/companies/companiesSlice";
import {
  selectCompanies,
  selectCurrentCompany,
} from "@/redux/companies/selectors";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";
import {
  Button,
  Dropdown,
  Wrapper,
  Option,
  CompanyName,
} from "./CompanySelect.styled";

const CompanySelect = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const current = useAppSelector(selectCurrentCompany);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleSelect = (id: string) => {
    const company = companies.find((c) => c._id === id);
    if (company) {
      dispatch(setCurrentCompany(company));
      setOpen(false);
    }
  };

  return (
    <Wrapper>
      <Button onClick={() => setOpen((prev) => !prev)} title={current?.name}>
        <CompanyName>{current?.name || t("Header.selectCompany")}</CompanyName>
        <FiChevronDown size={16} />
      </Button>

      {open && (
        <Dropdown>
          {companies.map((company) => (
            <Option key={company._id} onClick={() => handleSelect(company._id)}>
              {company.name}
            </Option>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default CompanySelect;
