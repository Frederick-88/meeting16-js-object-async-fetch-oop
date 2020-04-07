// const githubGlintsImpactByte = [
// 'arb712',
// 'frederick-88',
// 'EvanCharles16'
// ]

// githubGlintsImpactByte.forEach(item =>{
//     fetch(`"https://api.github.com/users/herdanuyp" ${item}`)
//     .then(response => {
//         console.log(response);
        
//     })
// })

// PROGRESS FETCH DATA (FETCH,RESPONSE DAN TAMPILKAN)

fetch('https://swapi.co/api/people/1')
.then((response) =>{
    // console.log(response)
    return response.json()
})
.then(data=>{
    console.log(data);
    const peopleHTMLString = 
    `<div class ="col-sm-6 col-md-4">INCOMING</div>`

    document.getElementById('starWars').innerHTML = 'peopleHTMLString';

})