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
  localCompany: string;
}

export interface ILocalCreate {
  name: string;
  address: string;
  companyId?: string;
}