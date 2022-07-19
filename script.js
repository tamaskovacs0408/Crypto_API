const coinTable = document.querySelector('.js-table');

fetch(`https://api.coinpaprika.com/v1/tickers`)
    .then(data => data.json())
    .then(coins => {
            const first20Coins = 
                coins
                    .filter( coin => coin.rank <= 20 ).sort((coin1, coin2) => coin1.rank - coin2.rank)
                    .map( coin => `<tr>
                    <td class="coin-rank">${coin.rank}.</td>
                    <td class="coin-name">${coin.name}</td>
                    <td class="coin-ticker">${coin.symbol}</td>
                    <td class="coin-price">${parseFloat( coin.quotes.USD.price).toFixed(2)} USD</td>
                    <td class="coin-vol">${coin.quotes.USD.percent_change_24h}%</td>
                    </tr>`)
                    .join('');
                    coinTable.innerHTML += first20Coins;
    } )