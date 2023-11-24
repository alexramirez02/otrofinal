
export interface  User {
  id:string;
  name:string;
  password:string;
  roleId:string;
  email:string;
  image:string;
}
export interface UserQuery {
  users :User[];
}

export interface Role {
  id: string;
  name: string;
 createAt:Date;
 undateAt:Date;
}

export interface RolesQuery {
  roles: Role[];
}
