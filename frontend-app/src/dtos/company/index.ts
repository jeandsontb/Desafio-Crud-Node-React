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
  name: string;
  cnpj: string;
  description: string;
  companyLocal: {
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