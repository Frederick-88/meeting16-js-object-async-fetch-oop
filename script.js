// Function dalam Object
// THIS NAME = MANUSIA.NAME, DISRANKAN PKAI MANUSIA.NAME
const manusia = {
    name: 'frederick',
    lastName: 'Gokil',
    getFullName(){
        return (`${this.name} ${this.lastName}`)
    },
    changeName(namaYangDiubah){
        this.name = namaYangDiubah;
    },
    setAnak(...args){
        let anakArray = [];
        for(let anak of args){
            anakArray.push(anak);
        }
        this.anak = anakArray;
    },
    getAnak(){
        return this.anak;
    }
}
console.log(manusia.getFullName());

// atau

let namaLengkap = manusia.getFullName();
console.log(namaLengkap);

manusia.changeName('GANTI NAMA');
namaLengkap = manusia.getFullName();
console.log(namaLengkap);

// DATE FUNCTION
const date = new Date();

const tanggal = (`Tanggal hari ini adalah ${date.getDate()} / ${date.getMonth() +1} / ${date.getFullYear()}`);
console.log(tanggal);
// 

// DESTRUCTURE
// PENAMAAN LAMA
// const name = manusia.name;
// const lastName = manusia.lastName;

// DESTRUCTURE PENAMAAN BARU - DGN SYARAT ELEMEN YANG SAMA
const {name, lastName} = manusia;
console.log(`${name} ${lastName}`);

    // LEARN DOM EVENT LISTENERS - BKIN FUNCTION UNTUK FITUR HTML DAN TAMPILIN KE HTML
    document.querySelector('#clickMe').addEventListener('click',()=>{
        const contentHTML = '<button class="btn btn-danger">Awas</button>';
        document.getElementById('content').innerHTML = contentHTML

        // UNLIMITED ADDITION
        // document.getElementById('content').innerHTML += contentHTML

        // window.alert('HAI!!')
    })
