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
    slots(): {
        default: {};
    };
}
export type RowsPerPageProps<typeData> = ReturnType<__sveltets_Render<typeData>['props']>;
export type RowsPerPageEvents<typeData> = ReturnType<__sveltets_Render<typeData>['events']>;
export type RowsPerPageSlots<typeData> = ReturnType<__sveltets_Render<typeData>['slots']>;
export default class RowsPerPage<typeData> extends SvelteComponentTyped<RowsPerPageProps<typeData>, RowsPerPageEvents<typeData>, RowsPerPageSlots<typeData>> {
}
export {};
