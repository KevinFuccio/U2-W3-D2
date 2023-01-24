class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
    static ageDifference(x,y){
      let firstPerson = x.name
      let secondPerson = y.name
    if(x > y){
      return `${firstPerson} ha ${x.age} ed è piu grande di ${secondPerson} che ne ha ${y.age}`
    }else{
      return `${secondPerson} ha ${y.age} ed è piu grande di ${firstPerson} che ne ha ${x.age}`
    }
   
  }
}
let p1 = new Person('Matteo', 20)
let p2 = new Person('Francesco',28)
let p3 = new Person('Roberto',33)

console.log(Person.ageDifference(p1,p3));

let divDisplay = document.getElementById('dArr')
let nextBtn = document.getElementById('nextBtn')
let score= 0;
let arrPersonaggi = [
  {
   "name": "Androxus",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/androxus.jpg"
  },
  {
   "name": "Ash",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/ash.jpg"
  },
  {
   "name": "Atlas",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/atlas.jpg"
  },
  {
   "name": "Azaan",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/azaan.jpg"
  },
  {
   "name": "Barik",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/barik.jpg"
  },
  {
   "name": "Betty la Bomba",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/betty-la-bomba.jpg"
  },
  {
   "name": "Bomb King",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/bomb-king.jpg"
  },
  {
   "name": "Buck",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/buck.jpg"
  },
  {
   "name": "Caspian",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/caspian.jpg"
  },
  {
   "name": "Cassie",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/cassie.jpg"
  },
  {
   "name": "Corvus",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/corvus.jpg"
  },
  {
   "name": "Dredge",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/dredge.jpg"
  },
  {
   "name": "Drogoz",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/drogoz.jpg"
  },
  {
   "name": "Evie",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/evie.jpg"
  },
  {
   "name": "Fernando",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/fernando.jpg"
  },
  {
   "name": "Furia",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/furia.jpg"
  },
  {
   "name": "Grohk",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/grohk.jpg"
  },
  {
   "name": "Grover",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/grover.jpg"
  },
  {
   "name": "Imani",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/imani.jpg"
  },
  {
   "name": "Inara",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/inara.jpg"
  },
  {
   "name": "Io",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/io.jpg"
  },
  {
   "name": "Jenos",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/jenos.jpg"
  },
  {
   "name": "Kasumi",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/kasumi.jpg"
  },
  {
   "name": "Khan",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/khan.jpg"
  },
  {
   "name": "Kinessa",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/kinessa.jpg"
  },
  {
   "name": "Koga",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/koga.jpg"
  },
  {
   "name": "Lex",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/lex.jpg"
  },
  {
   "name": "Lian",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/lian.jpg"
  },
  {
   "name": "Lillith",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/lilith.jpg"
  },
  {
   "name": "Maeve",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/maeve.jpg"
  },
  {
   "name": "Makoa",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/makoa.jpg"
  },
  {
   "name": "Mal'Damba",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/maldamba.jpg"
  },
  {
   "name": "Moji",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/moji.jpg"
  },
  {
   "name": "Octavia",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/octavia.jpg"
  },
  {
   "name": "Pip",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/pip.jpg"
  },
  {
   "name": "Raum",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/raum.jpg"
  },
  {
   "name": "Rei",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/rei.jpg"
  },
  {
   "name": "Ruckus",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/ruckus.jpg"
  },
  {
   "name": "Saati",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/saati.jpg"
  },
  {
   "name": "Seris",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/seris.jpg"
  },
  {
   "name": "Sha Lin",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/sha-lin.jpg"
  },
  {
   "name": "Skye",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/skye.jpg"
  },
  {
   "name": "Strix",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/strix.jpg"
  },
  {
   "name": "Talus",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/talus.jpg"
  },
  {
   "name": "Terminus",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/terminus.jpg"
  },
  {
   "name": "Tiberius",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/tiberius.jpg"
  },
  {
   "name": "Torvald",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/torvald.jpg"
  },
  {
   "name": "Tyra",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/tyra.jpg"
  },
  {
   "name": "Vatu",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/vatu.jpg"
  },
  {
   "name": "VII",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/vii.jpg"
  },
  {
   "name": "Viktor",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/viktor.jpg"
  },
  {
   "name": "Vivian",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/vivian.jpg"
  },
  {
   "name": "Vora",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/vora.jpg"
  },
  {
   "name": "Willo",
   "role": "damage",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/willo.jpg"
  },
  {
   "name": "Yagorath",
   "role": "tank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/yagorath.jpg"
  },
  {
   "name": "Ying",
   "role": "healer",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/ying.jpg"
  },
  {
   "name": "Zhin",
   "role": "flank",
   "image": "https://webcdn.hirezstudios.com/paladins/champion-icons/zhin.jpg"
  }
]


 class Champions {
  constructor(items,pageSize){
    this.items = items;
    this.pageSize = pageSize;
  }
  static counterChamp(items,score){
    
    divDisplay.innerHTML= '';
    for (let i = 0; i < score; i++) {
      let div = document.createElement('div')
      div.innerHTML = items[i].name;
      divDisplay.appendChild(div)
    if(score > items.length){
      divDisplay.innerHTML= '';
      break
    }
  }
}
}
nextBtn.addEventListener('click', () =>{
  Champions.counterChamp(arrPersonaggi,score += 10)
  if(score > arrPersonaggi.length){
    score = 0
    console.log(score);
  }
})