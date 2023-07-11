import { SvelteComponentTyped } from "svelte";
import type { typeDatatable } from './typeDatatable';
declare class __sveltets_Render<typeData> {
    props(): {
        propDatatable: typeDatatable<typeData>;
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
}
export type EngineProps<typeData> = ReturnType<__sveltets_Render<typeData>['props']>;
export type EngineEvents<typeData> = ReturnType<__sveltets_Render<typeData>['events']>;
export type EngineSlots<typeData> = ReturnType<__sveltets_Render<typeData>['slots']>;
export default class Engine<typeData> extends SvelteComponentTyped<EngineProps<typeData>, EngineEvents<typeData>, EngineSlots<typeData>> {
}
export {};
