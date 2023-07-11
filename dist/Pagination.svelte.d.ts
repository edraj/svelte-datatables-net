import { SvelteComponentTyped } from "svelte";
import type { typeDatatable } from './typeDatatable';
declare class __sveltets_Render<typeData> {
    props(): {
        [x: string]: any;
        propDatatable: typeDatatable<typeData>;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type PaginationProps<typeData> = ReturnType<__sveltets_Render<typeData>['props']>;
export type PaginationEvents<typeData> = ReturnType<__sveltets_Render<typeData>['events']>;
export type PaginationSlots<typeData> = ReturnType<__sveltets_Render<typeData>['slots']>;
export default class Pagination<typeData> extends SvelteComponentTyped<PaginationProps<typeData>, PaginationEvents<typeData>, PaginationSlots<typeData>> {
}
export {};
