import type { typeDatatable } from './typeDatatable';
type typeParameters<Generic> = {
    parData: Generic[];
    parSearchableColumns?: (keyof Generic)[];
    parSearchString?: string;
    parRowsPerPage?: `${number}` | 'all';
    parSortBy?: keyof Generic;
    parSortOrder?: 'ascending' | 'descending';
    parActivePage?: number;
    parSortFunction?: (a: Generic, b: Generic) => number;
};
export declare const functionCreateDatatable: <Generic>({ parData, parSearchableColumns, parSearchString, parRowsPerPage, parSortBy, parSortOrder, parActivePage, parSortFunction }: typeParameters<Generic>) => typeDatatable<Generic>;
export {};
