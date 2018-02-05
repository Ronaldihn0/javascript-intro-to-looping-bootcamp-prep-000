function forLoop(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = `I am ${i} strange loop`;
    if(i > 1){
      var temp += 's';
    }

  }
  return array;
}
