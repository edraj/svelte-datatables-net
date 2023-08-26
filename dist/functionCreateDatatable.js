import { functionSearch } from './functionSearch';
export const functionCreateDatatable = function ({ parData, parSearchableColumns = undefined, parSearchString = '', parRowsPerPage = 'all', parSortBy, parSortOrder = 'ascending', parActivePage = 1, parSortFunction }) {
    if (parSortFunction === undefined) {
        const sortModifier = parSortOrder === 'ascending' ? 1 : -1;
        const functionDefaultSortFunction = function (elementA, elementB) {
            if (parSortBy === undefined) {
                return 0;
            }
            if (elementA[parSortBy] < elementB[parSortBy]) {
                return -1 * sortModifier;
            }
            if (elementA[parSortBy] > elementB[parSortBy]) {
                return 1 * sortModifier;
            }
            return 0;
        };
        parSortFunction = functionDefaultSortFunction;
    }
    const objectSorted = parData.sort(parSortFunction);
    const objectSearched = functionSearch(objectSorted, parSearchString, parSearchableColumns);
    const numberRowsPerPage = parRowsPerPage === 'all' ? objectSearched.length : parseInt(parRowsPerPage);
    return {
        arrayRawData: parData,
        arraySorted: objectSorted,
        arraySearched: objectSearched,
        arrayData: objectSearched.slice(0, numberRowsPerPage),
        stringSortBy: parSortBy,
        stringRowsPerPage: parRowsPerPage,
        numberRowsPerPage: numberRowsPerPage,
        numberActivePage: parActivePage,
        numberFirstRow: 0,
        numberLastRow: numberRowsPerPage,
        stringSearchString: parSearchString,
        arraySearchableColumns: parSearchableColumns,
        stringSortOrder: parSortOrder,
        functionSort: parSortFunction
    };
};
