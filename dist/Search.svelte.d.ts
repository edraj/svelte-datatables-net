import { SvelteComponentTyped } from "svelte";
import type { typeDatatable } from './typeDatatable';
declare class __sveltets_Render<typeData> {
    props(): {
        [x: string]: any;
        propDatatable: typeDatatable<typeData>;
        propPlaceholder?: string | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type SearchProps<typeData> = ReturnType<__sveltets_Render<typeData>['props']>;
export type SearchEvents<typeData> = ReturnType<__sveltets_Render<typeData>['events']>;
export type SearchSlots<typeData> = ReturnType<__sveltets_Render<typeData>['slots']>;
export default class Search<typeData> extends SvelteComponentTyped<SearchProps<typeData>, SearchEvents<typeData>, SearchSlots<typeData>> {
}
export {};
