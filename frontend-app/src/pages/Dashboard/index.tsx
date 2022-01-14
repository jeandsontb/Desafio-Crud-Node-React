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

const Dashboard = () => {

  const { showAllCompanys, company, editCompany } = useCompany();

    useEffect(() => {
      showAllCompanys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const handleDetailsCompany = (id: string) => {
    console.log('o id foi '+ id);
  }

  const handleEditCompany = (id: string) => {
    editCompany(id);
  }

  const handleTrashCompany = (id: string) => {
    console.log('lixeira '+ id)
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
                edit={handleEditCompany} 
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