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