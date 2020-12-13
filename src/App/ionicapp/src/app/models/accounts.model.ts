import { BaseEntity } from "./baseentity.model";
import { TypeAccount } from "./typeaccount.model";
import { ApplicationUser } from "./userapp.model";

export interface Account extends BaseEntity {
    numberAccount: string;
    description: string;
    typeAccount: TypeAccount;
    typeAccountId: string;
    applicationUserId: string;
    applicationUser: ApplicationUser;
    balance: number;
}