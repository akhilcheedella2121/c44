 class Player {
    constructor(){
      this.index = null;
      this.score = 0;
      this.name = null;
   //this.rank=null;
   }
  
    //getCount(){
     // var playerCountRef = database.ref('playerCount');
      //playerCountRef.on("value",(data)=>{
       // playerCount = data.val();
     // })
   // }
  
    //updateCount(count){
     // database.ref('/').update({
        //playerCount: count
      //});
    //}
  
    update(){
      //var playerIndex = "player" //+ this.index;
      database.ref("player").set({
        name:this.name,
      score:this.score
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('player');
      playerInfoRef.on("value",(data)=>{
        player = data.val();
      })
    }
    //getCarsAtEnd(){
      //database.ref('CarsAtEnd').on("value",(data)=>{
        //this.rank=data.val()
      //})
   // }
    // updateCarsAtEnd(rank){
    //database.ref('/').update({
      //CarsAtEnd:rank
   // })
    }
 // }
  