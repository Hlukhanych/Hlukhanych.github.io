function getExchangeRates() {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then(response => response.json())
        .then(data => {
            const currencyRates = data;

            const table = document.getElementById('currencyTable');

            currencyRates.forEach(rate => {
                const currency = rate.txt;
                const price = rate.rate;

                const row = table.insertRow(-1);
                const currencyCell = row.insertCell(0);
                const priceCell = row.insertCell(1);

                currencyCell.textContent = currency;
                priceCell.textContent = price;
            });
        })
        .catch(error => {
            console.log('Помилка при отриманні даних про курс валют:', error);
        });
}

getExchangeRates();