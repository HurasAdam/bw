 export interface IRegisterFormData{
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ILoginFormData{

    email: string;
    password: string;

}


export interface ITag {
    _id: string;
    name: string;
  }
  
 export  interface IUser {
    _id: string;
    name: string;
    surname: string;
  }

export interface IArticle {
    _id: string;
    title: string;
    employeeDescription: string;
    clientDescription: string;
    createdBy: IUser;
    tags: ITag[];
    isVerified: boolean;
    verifiedBy?: IUser;
    viewsCounter: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }