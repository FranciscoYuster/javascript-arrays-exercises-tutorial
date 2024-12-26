let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(estacionamiento){
  let state = {
    totalSlots : 0,
    availableSlots:0,
    occupiedSlots: 0
  }
  for (let i = 0; i< estacionamiento.length; i++){
    for ( let x = 0; x < estacionamiento[i].length; x++){
      if (estacionamiento[i][x] === 2) {
        state.availableSlots += 1;
        state.totalSlots += 1;
      } else if (estacionamiento[i][x] === 1){
        state.occupiedSlots += 1;
        state.totalSlots += 1;
      }
    }
  }
    return state
}

console.log(getParkingLotState(parkingState))
