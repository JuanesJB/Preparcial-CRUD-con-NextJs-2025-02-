export interface Author {
  id: number;
  name: string;
  birthDate: string;
  description: string;
  image: string;
}

export interface CreateAuthorData {
  name: string;
  birthDate: string;
  description: string;
  image: string;
}

export interface UpdateAuthorData extends Partial<CreateAuthorData> {
  id: number;
}
