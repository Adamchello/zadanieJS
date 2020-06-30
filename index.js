// Stwórz funkcję paginateArray

const paginateArray = (dataEntries, settings) => {
    if (dataEntries.length == 0) throw new Error("Array has no elements")
    if (!settings.entriesOnPage || !settings.actualPageIdx) throw new Error("All arguments are not entered");
    const start = settings.entriesOnPage * settings.actualPageIdx;
    const end = start + settings.entriesOnPage;
    if (dataEntries.slice(start,end).length != settings.entriesOnPage) throw new Error("There aren't enought elements in array");
    const entriesOnSelectedPage = dataEntries.slice(start,end);
    return entriesOnSelectedPage;
}

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony