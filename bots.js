// Боты первого района: Шилкинская 6 к2 (43.12035, 131.92178) и Толстого 40А (43.12219, 131.91329).
// place: mall = ТЦ/помещение (старт 100 м), street = улица (300 м), square = площадь/открытое место (500 м).
const BOTS = [
  // у работы
  {id:"b1", name:"Сеня Шило",     w:"pistols", lvl:1, place:"street", lat:43.12070, lng:131.92120},
  {id:"b2", name:"Гоша Пятак",    w:"shotgun", lvl:2, place:"mall",   lat:43.12010, lng:131.92260},
  {id:"b3", name:"Лёха Вахта",    w:"auto",    lvl:4, place:"street", lat:43.11960, lng:131.92080},
  {id:"b4", name:"Старый Фома",   w:"sniper",  lvl:7, place:"square", lat:43.12120, lng:131.92330},
  // у дома
  {id:"b5", name:"Витя Толстый",  w:"pistols", lvl:1, place:"street", lat:43.12250, lng:131.91280},
  {id:"b6", name:"Кира Дым",      w:"shotgun", lvl:3, place:"mall",   lat:43.12190, lng:131.91420},
  {id:"b7", name:"Макс Гильза",   w:"mg",      lvl:5, place:"street", lat:43.12300, lng:131.91200},
  {id:"b8", name:"Тихий Глеб",    w:"sniper",  lvl:6, place:"square", lat:43.12150, lng:131.91180},
  // между
  {id:"b9", name:"Боря Проезд",   w:"auto",    lvl:3, place:"street", lat:43.12130, lng:131.91750},
  {id:"b10",name:"Нора Крыса",    w:"pistols", lvl:2, place:"mall",   lat:43.12080, lng:131.91600},
];
