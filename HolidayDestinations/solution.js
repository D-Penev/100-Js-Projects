function addDestination() {
    debugger;
    let selectedSeason = document.getElementById('seasons');
    let cityAndCountryArr = document.getElementsByClassName('inputData');
    let destinationsTable = document.getElementById('destinations');
    let destinationsRow = document.getElementsByTagName('destinationsList');
    let destinatonSummaryBox = document.getElementById('summaryBox');
    let destinationCounter = {
        Summer: 0,
        Winter: 0,
        Autumn: 0,
        Spring: 0
    };

    if(selectedSeason !== null && cityAndCountryArr !== null && destinationsTable !== null 
        && destinationsRow !== null) {
       let city = cityAndCountryArr[0].value;
       let country = cityAndCountryArr[1].value;
       let season = selectedSeason.value;

       if (city.value !== "" || country.value !== "") {
            let row = destinationsTable.insertRow(0);
            let cell = row.insertCell(0);
            cell.innerText = `${city}, ${country}`;
             
       }
    } 

}

function incrementSeason(seasonsObj, currSeason) {
    switch(currSeason) {
        case "Summer":
            seasonsObj["Summer"]++;
            break;
        case "Winter":
            seasonsObj["Winter"]++;
            break;
        case "Spring":
            seasonsObj["Spring"]++;
            break;
        case "Autumn":
            seasonsObj["Autumn"]++;
            break;
    }
}

addDestination();