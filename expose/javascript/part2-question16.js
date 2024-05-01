let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let item in statistics){
  /*if starts with 'r' ot odd*/
  if (item.startsWith('r') || statistics[item] % 2 !== 0){
    console.log(statistics[item]);
  }
}
