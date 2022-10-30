async function search() {
    
    const inputValue = document.getElementById("input").value
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eb34cb4114mshdadc3337f0f3908p19051ajsnfa19e0e19979',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'eb34cb4114mshdadc3337f0f3908p19051ajsnfa19e0e19979',
    //         'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    //     }
    // };
    
    const res = await fetch('https://covid-193.p.rapidapi.com/statistics?country=' + inputValue, options)
        .then(response => response.json());
    
    for (const [key, value] of Object.entries(res.response[0].cases)) {
        if (key === '1M_pop') return;

        const card = document.createElement('div')
        card.classList.add('card')

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.appendChild(document.createTextNode(key))

        const cases = document.createTextNode(value)

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cases)
        card.appendChild(cardBody)

        const content = document.getElementById('content')
        content.appendChild(card)
    }
}