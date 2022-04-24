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
        /*
        Needed from API:
        coin.rank
        coin.name
        coin.symbol 
        coin.quotes.USD.price 
        coin.quotes.USD.percent_change_24h
          */
        document.querySelector(".js-table")
            .innerHTML += first20Coins;
    } )
    .catch(console.error)