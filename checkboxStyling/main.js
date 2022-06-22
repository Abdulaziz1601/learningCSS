// Bu obyektlar massivi
// Backenddan ma'lumotlar juda ko'p holatlarda shu ko'rinishda bo'ladi
const persons = [
    {
      id: 325326,
      firstname: "Dan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.1990",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325326,
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325330,
      firstname: "Frank",
      lastname: "Lion",
      image: "url",
      birthday: "10.05.1991",
      gender: "male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "male",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
  ];

// 1. fullNames degan massiv yaratish
// 2. forEachda xar bitta obyektni consolega chiqazish, obyekni o'zini
// 3. forEach da xar bitta obyektni ism va familiyasi qiymatlarini olib massivga joylash (push())
//  Masalan: const fullNames = ["Dan Tigers"], shu xolatda joylab boriladi, logika yozilsin qo'l bola o'zila joylab qo'ymela
// Oxirida fullNames = [ 'Dan Tiger', 'Fan Tiger', 'Frank Lion', 'Bilal Zakki' ];