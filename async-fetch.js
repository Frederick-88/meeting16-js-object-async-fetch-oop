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

// // PROGRESS FETCH DATA (FETCH,RESPONSE DAN TAMPILKAN)

// fetch('https://swapi.co/api/people/1')
// .then((response) =>{
//     // console.log(response)
//     return response.json()
// })
// .then(data=>{
//     console.log(data);

//     // DESTRUKTURISASI CARA LAMA
//     const name = data.name;
//     const skin_color = data.skin_color;
//     const gender = data.gender;
//     const films = data.films;

//     // DESTRUKTURISASI CARA BARU
//     // const{name,skin_color,gender,films} = data;

//     let linksFilm = '';
//     films.forEach((item,index)=>{
//         linksFilm += `<a href ="${item}">film ${index +1}</a>`;
//     })

//     const peopleHTMLString = 
//     `<div class ="col-sm-6 col-md-4">
//     name: ${name}
//     <br>
//     skin color: ${skin_color}
//     <br>
//     gender: ${gender}
//     <br>
//     films: ${linksFilm}
//     </div>`

//     document.getElementById('starWars').innerHTML = peopleHTMLString;

// })

// WANDERLINK API - CARA FETCH KE 2 TANPA CONST - INI NAMPILIN SEMUA DAN LEBIH SUSAH NAMPILIN 1 DOANG
// const serverWanderLink = `http://35.240.201.155:3000/`
// fetch(`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination`)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         // 3 HAL DIATAS ITU WAJIB. JADI STELAH SMUA PROSES DONE, KITA CONSOLE LOG DATA UNTUK NNGOK ISINYA, 
//         // BARU KITA NNGOK ITU APA DAN KITA DEFINE
//         data.forEach(item => {
//             const tampilanHTML = `
//             <div class ="col-sm-6 col-md-4">
//             <img width="100%" height="150px" src="${serverWanderLink}${item.images && item.images[0]}"/>
//             ${item.city}
//             <br>
//             ${item.province}
//             <br>
//             ${item.destinationName}
//             </div>

// `;

// // TUJUAN TAMBAH += ADALAH SUPAYA BISA REACH/MNCULIN LEBIH DARI 1
//             document.getElementById('wanderlink').innerHTML += tampilanHTML;
//         })
//     })



// WANDERLINK API - CARA FETCH DAN MAU NAMPILIN DALAM JARAK 10 BENTUK DOANG

const tampilanHTML = `
            <div class ="col-sm-6 col-md-4">
            <img width="100%" height="150px" src="${serverWanderLink}${item.images && item.images[0]}"/>
            ${item.city}
            <br>
            ${item.province}
            <br>
            ${item.destinationName}
            </div>

`;
            document.getElementById('wanderlink').innerHTML += tampilanHTML;

const serverWanderLink = `http://35.240.201.155:3000/`
fetch(`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
       for(let i = 10; i<20; i++){
        addWonderLink(data[i])
       }
    })
    
    // --------------------------------------

    // BUAT SHOW 10 UNTUK PAGE
    
//     const tampilanHTML = `
//     <div class ="col-sm-6 col-md-4">
//     <img width="100%" height="150px" src="${serverWanderLink}${item.images && item.images[0]}"/>
//     ${item.city}
//     <br>
//     ${item.province}
//     <br>
//     ${item.destinationName}
//     </div>

// `;
//     document.getElementById('wanderlink').innerHTML += tampilanHTML;

// const serverWanderLink = `http://35.240.201.155:3000/`
// fetch(`http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination`)
// .then(response => {
// return response.json();
// })
// .then(data => {
// console.log(data);
// for(let i = 10; i<20; i++){
// addWonderLink(data[i])
// }

    const show10 = (noIndex = 0) =>{
        const maxNomor = 10 + noIndex;
        for(noIndex; noIndex<maxNomor; noIndex++){
            addWonderLink(dataWonderLink[noIndex]);
        }
        currentPages = maxNomor;
    }

    const previous = () =>{
        show10(currentPage - 10);
    }
    const next = () =>{
        show10(currentPage + 10);
    }