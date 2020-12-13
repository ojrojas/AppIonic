import { BaseEntity } from "./baseentity.model";
import {Account } from './accounts.model';

export interface MoveBalanceAccount extends BaseEntity{
    account: Account;
    accountId:string;
    isDebit:boolean;
    balance:number;
}