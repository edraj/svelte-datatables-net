import { SvelteComponentTyped } from "svelte";
import type { typeDatatable } from './typeDatatable';
declare class __sveltets_Render<typeData> {
    props(): {
        propColumn: keyof typeData;
        propDatatable: typeDatatable<typeData>;
        propIconSize?: number;
        propSortFunction?: ((a: typeData, b: typeData) => number) | undefined;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
}
export type SortProps<typeData> = ReturnType<__sveltets_Render<typeData>['props']>;
export type SortEvents<typeData> = ReturnType<__sveltets_Render<typeData>['events']>;
export type SortSlots<typeData> = ReturnType<__sveltets_Render<typeData>['slots']>;
export default class Sort<typeData> extends SvelteComponentTyped<SortProps<typeData>, SortEvents<typeData>, SortSlots<typeData>> {
}
export {};
