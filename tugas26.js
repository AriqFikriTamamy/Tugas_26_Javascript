function panggilisFinite(){
  var x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  for(var i=0;i<x.length;i++){
    if(isFinite(x[i]) === true){
      console.log("Angka",x[i].toString(),"NOT Infnity.")
    }else {
      console.log("Angka",x[i].toString(),"Infinity")
    }
  }
}

panggilisFinite()
