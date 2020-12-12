export interface BaseEntity {
    id: string;
    state: boolean;
    createdOn: Date;
    modifiedOn: Date;
    createdBy: string;
    modifiedBy: string;
}