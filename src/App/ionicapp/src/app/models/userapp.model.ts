import { BaseEntity } from "./baseentity.model";
import { TypeIdentification } from "./typeidentification.model";

export interface  ApplicationUser extends BaseEntity {
userName:string;
password:string;
email:string;
name:string;
lastName:string;
middleName:string;
typeIdentification: TypeIdentification 
typeIdenticationId:string; 
identification:string;

}
