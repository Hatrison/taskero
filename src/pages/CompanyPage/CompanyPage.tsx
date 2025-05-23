import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "@/hooks";
import {
  selectCompanies,
  selectCompaniesLoading,
} from "@/redux/companies/selectors";
import Loader from "@/components/Loader";
import CustomSelect from "@/components/CustomSelect";
import CompanyCard from "@/components/CompanyCard";
import CreateCompanyModal from "@/components/Modals/CreateCompanyModal";
import {
  PageWrapper,
  PageHeader,
  Title,
  TopBar,
  SearchInput,
  Grid,
  CreateButton,
  SelectWrapper,
  UpperBlock,
  LoaderContainer,
} from "./CompanyPage.styled";

const CompanyPage = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const loading = useAppSelector(selectCompaniesLoading);
  const companies = useAppSelector(selectCompanies);
  const { t } = useTranslation();

  const toggleCreateModal = () => {
    setIsCreateModalOpen((prev) => !prev);
  };

  const filteredCompanies = useMemo(() => {
    return companies
      .filter((company) =>
        company.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === "name") {
          return a.name.localeCompare(b.name);
        }
        if (sort === "date") {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
        return 0;
      });
  }, [companies, search, sort]);

  return (
    <PageWrapper>
      {loading ? (
        <LoaderContainer>
          <Loader size="48px" color="#3e85f3" />
        </LoaderContainer>
      ) : (
        <>
          <UpperBlock>
            <PageHeader>
              <Title>{t("Companies.title")}</Title>
              <CreateButton onClick={() => toggleCreateModal()}>
                {t("Companies.create")}
              </CreateButton>
            </PageHeader>

            <TopBar>
              <SearchInput
                type="text"
                placeholder={t("Companies.searchPlaceholder")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <SelectWrapper>
                <CustomSelect
                  options={["name", "date"]}
                  value={sort}
                  onChange={setSort}
                  getLabel={(r) => t(`Companies.filters.${r}`)}
                  getKey={(r) => r}
                />
              </SelectWrapper>
            </TopBar>
          </UpperBlock>

          <Grid>
            {filteredCompanies.map((company) => (
              <CompanyCard key={company._id} company={company} />
            ))}
          </Grid>
          {isCreateModalOpen && (
            <CreateCompanyModal handlerCloseModal={toggleCreateModal} />
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default CompanyPage;
