import S from './styles';
import { FiTrash, FiEdit } from 'react-icons/fi';
import { BiDetail } from 'react-icons/bi';
import { IShowCompanyDataAll } from '../../dtos/company';

interface IListProps {
  verify: boolean;
  data: IShowCompanyDataAll;
  details: (id: string) => void;
  edit: (id: string) => void;
  trash: (id: string) => void;
}

const ListCompany = ({ verify, data, details, edit, trash }: IListProps) => {

  return (
    <S.Container>
      <S.BoxList colorSelected={verify} >
        <S.TextName> {data.name} </S.TextName>
        <S.TextCpnj> {data.cnpj} </S.TextCpnj>
        <S.BoxIcons>
          <S.ButtonIcon onClick={() => details(data.id)} >
            <BiDetail size={24} />
          </S.ButtonIcon>
          <S.ButtonIcon onClick={() => edit(data.id)} >
            <FiEdit size={24} />
          </S.ButtonIcon>
          <S.ButtonIcon onClick={() => trash(data.id)} >
            <FiTrash size={24} />
          </S.ButtonIcon>
        </S.BoxIcons>
      </S.BoxList>
    </S.Container>
  );
}

export { ListCompany };