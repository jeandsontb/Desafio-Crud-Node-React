import { useNavigate } from 'react-router-dom';

import { 
  DashboardBackground, 
  Content,
  BoxLeft,
  BoxRight
} from './styles';
import Header from '../../components/Header'
import { ListCompany } from '../../components/ListCompany';
import { useEffect } from 'react';
import useCompany from '../../hooks/useCompany';
import { FormDashboard } from '../../components/FormDashboard';
import { ICompanyEdit } from '../../dtos/company';

const Dashboard = () => {
  const navigate = useNavigate();

  const { 
    company, 
    showAllCompanys, 
    editCompany, 
    deleteCompany, 
    showOneCompany 
  } = useCompany();

    useEffect(() => {
      showAllCompanys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const handleDetailsCompany = (id: string) => {
    showOneCompany(id);
    navigate('details');
  }

  const handleEditCompany = (data: ICompanyEdit) => {
    editCompany(data);
  }

  const handleTrashCompany = (id: string) => {
    deleteCompany(id);
  }
 
  return (
    <DashboardBackground>
      <Header />

      <Content>
        <BoxLeft>
          <FormDashboard />
        </BoxLeft>

        <BoxRight>
          {company.map((item, index) => {

            let verify = false;
            if(index % 2 === 0) {
              verify = true;
            }

            return (
              <ListCompany 
                key={index}
                verify={verify} 
                data={item}
                details={handleDetailsCompany} 
                edit={() => handleEditCompany(item)} 
                trash={handleTrashCompany}  
              />
            );
          })}
        </BoxRight>
      </Content>
    </DashboardBackground>
  );
}

export default Dashboard;