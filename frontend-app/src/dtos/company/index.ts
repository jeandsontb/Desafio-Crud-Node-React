export interface IShowCompanyDataAll {
  id: string,
  name: string,
  cnpj: string,
  description: string,
  userId: string,
  createdAt: string,
  updatedAt: string
};

export interface ICompanyCreate {
  name: string;
	cnpj: string;
	description: string;
}

export interface ICompanyEdit {
  id: string;
  name: string;
  cnpj: string;
  description: string;
  userId: string
}

export interface ICompanyUpdate {
  id: string;
  userId: string;
  name: string;
  cnpj: string;
  description: string;
  localCompany?: string;
  nameResponsible?: string;
  addressResponsible?: string;
}

export interface ICompanyShowOne {
  id: string;
  name: string;
  cnpj: string;
  description: string;
  companyLocal: {
    id: string;
    nameLocal: string;
    addressLocal: string;
  }[],
  companyResponsible: {
    nameResponsible: string;
    addressResponsible: string;
  }[]
}

export interface IResponsibleList {
  nameResponsible: string;
  addressResponsible: string;
}

export interface ILocalList {
  id: string;
  nameLocal: string;
  addressLocal: string;
}

export interface ILocalCreate {
  name: string;
  address: string;
  companyId?: string;
}

export interface IResponsibleCreate {
  name: string;
  address: string;
}

export interface IResponsibleListLocal {
  name: string;
  address: string;
}