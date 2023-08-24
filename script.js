
function battleship(length,name){
    return {
        name,
       length,
       hits:0,
       sunk:false,
       hit (){
        this.hits=this.hits + 1;
       },
       isSunk(){
            if(this.hits == this.length){
                this.sunk=true;
            }
       }
    }
}

function gameboard(){
    
    return {
        game:Array(),
        inicialize(){
            let i=0;
            while(i<10){
                aux=Array(10);
                this.game.push(aux);
                i++;
            }
        },



    }
}

function findposition(game,aux){
    let disponivel=true;
    let horizontal=parseInt(Math.random()*10);
    
        if (horizontal<5){
            x=parseInt(Math.random()*10);
            y=parseInt(Math.random()*(11-aux.length));
            let auxy=y;
            for(i=0;i<aux.length;i++){
                if(game[x][auxy]!=undefined){
                    return false;
                }
                auxy++;
            }

            for(i=0;i<aux.length;i++){
                game[x][y]=aux.name;
                y++;
            }
            
        }else{
            x=parseInt(Math.random()*(11-aux.length));
            y=parseInt(Math.random()*10);
            let auxx=x;
            for(i=0;i<aux.length;i++){
                if(game[auxx][y]!=undefined){
                    return false;
                }
                auxx++;
            }
            
            for(i=0;i<aux.length;i++){
                game[x][y]=aux.name;
                x++;
            }
        }
        return true;
   
   
}

function positionShips (game,ships){
    let x,y;
    let aux;
    let result
    aux=battleship(5,'carrier');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(4,'battleship1');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(4,'battleship2');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(3,'cruiser');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(3,'submarine');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(2,'destroyer1');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(2,'destroyer2');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
    aux=battleship(2,'desstroyer3');
    ships.push(aux);
    do{
       result=findposition(game,aux);
    }while(!result);
 
 


}

function verificahit(e){
    let aux;
    let sunkships=0;
    if(b.game[e.target.id[1]][e.target.id[2]]!=undefined){
        console.log('hit');
        aux=b.game[e.target.id[1]][e.target.id[2]]
        for (let i=0;i<ships.length;i++){
            if(ships[i].name==aux){
                ships[i].hit();
                ships[i].isSunk();
            }
        }
        for(let i=0;i<ships.length;i++){
            if(ships[i].sunk==true){
                sunkships++;
            }
        }
        if(sunkships==8){
            console.log("You won");
        }
        e.target.classList.add('hit');
    }else{
        e.target.classList.add('nohit');
    }    
    
}

let ships=[];
let b=gameboard();
b.inicialize();

positionShips(b.game,ships);
console.log(b.game);




let board1=document.getElementById('board1');

    for (let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            let aux=document.createElement('div');
            aux.classList.add('cell');
            aux.setAttribute('id',`a${j}${i}`);
            aux.addEventListener('click',(e)=>{verificahit(e)});
            board1.appendChild(aux);
        }
    }
  
