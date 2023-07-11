export const functionSearch = function (parData, parSearchString, parSearchableColumns) {
    const arraySearchable = parData.map((currentData) => {
        if (parSearchableColumns === undefined) {
            return {
                objectData: currentData,
                stringSearchable: ''
            };
        }
        const arraySearchablesBeforeJoin = parSearchableColumns.map((current) => {
            return currentData[current];
        });
        return {
            objectData: currentData,
            stringSearchable: arraySearchablesBeforeJoin.join(' ').toLowerCase()
        };
    });
    const arrayFilteredSearchable = arraySearchable.filter((current) => current.stringSearchable.includes(parSearchString.toLocaleLowerCase()));
    return arrayFilteredSearchable.map((current) => current.objectData);
};
