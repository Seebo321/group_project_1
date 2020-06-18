// contributers Alicia Williams, Erin Mehaffey,Jack Polson, Sharnetta Lamar
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
const mainElement=document.querySelector('.katas')

// heading and adding
const MainHeading=document.createElement('h1')
mainElement.append(MainHeading)
MainHeading.append('Here we SHOW again!')

//kata 1
const kata1heading=document.createElement('h2')
mainElement.append(kata1heading)
kata1heading.append('Kata 1')
// kata 1 p
const kata1P=document.createElement('p')
mainElement.append(kata1P)
for (counter=0;counter<=20;counter++){
    if(counter<=19){
    kata1P.append(counter +',')}else{
        kata1P.append(counter)

    }
  }
//kata 2 heading
const kata2heading=document.createElement('h2')
mainElement.append(kata2heading)
kata2heading.append('Kata 2')
// kata 2 p
const kata2P=document.createElement('p')
mainElement.append(kata2P)


for (counter=0;counter <=20;counter+=2){
    if(counter<=19){
        kata2P.append(counter +',')}else{
            kata2P.append(counter)
    
        }

}
//kata 3 heading
const kata3heading=document.createElement('h2')
mainElement.append(kata3heading)
kata3heading.append('Kata 3')
// kata 3 p
const kata3P=document.createElement('p')
mainElement.append(kata3P)

for (counter=1;counter <=20;counter+=2){
    if(counter<=18){
        kata3P.append(counter +',')}else{
            kata3P.append(counter)
    
        }

}

//kata 4 heading
const kata4heading=document.createElement('h2')
mainElement.append(kata4heading)
kata4heading.append('Kata 4')
// kata 4 p
const kata4P=document.createElement('p')
mainElement.append(kata4P)

for (counter=5;counter<=100;counter+=5){
   if(counter<=95){
        kata4P.append(counter +',')}else{
            kata4P.append(counter)
    
        }

}

//kata 5 heading
const kata5heading=document.createElement('h2')
mainElement.append(kata5heading)
kata5heading.append('Kata 5')
// kata 5 p
const kata5P=document.createElement('p')
mainElement.append(kata5P)
let array=[]
for(let counter=1; counter<=100; counter+=1)
{
  const counterIsPerfectSquare=Number.isInteger(Math.sqrt(counter))
  if(counterIsPerfectSquare){
      array.push(counter)
       }

    
        }
 kata5P.append(array.join(','))

 //kata 6
const kata6heading=document.createElement('h2')
mainElement.append(kata6heading)
kata6heading.append('Kata 6')
// kata 6 p
const kata6P=document.createElement('p')
mainElement.append(kata6P)
for (counter=20;counter>=0;counter-=1){
    if(counter>=1){
    kata6P.append(counter +',')}else{
        kata6P.append(counter)

    }
  }

   //kata 7
const kata7heading=document.createElement('h2')
mainElement.append(kata7heading)
kata7heading.append('Kata 7')
// kata 7 p
const kata7P=document.createElement('p')
mainElement.append(kata7P)
for (counter=20;counter>=0;counter-=2){
    if(counter>=1){
    kata7P.append(counter +',')}else{
        kata7P.append(counter)

    }
  }

  //kata 8
  const kata8heading=document.createElement('h2')
  mainElement.append(kata8heading)
  kata8heading.append('Kata 8')
  // kata 8 p
  const kata8P=document.createElement('p')
  mainElement.append(kata8P)
  for (counter=19;counter>=0;counter-=2){
      if(counter>=1){
      kata8P.append(counter +',')}else{
          kata8P.append(counter)
  
      }
    }

//kata 9 heading
const kata9heading=document.createElement('h2')
mainElement.append(kata9heading)
kata9heading.append('Kata 9')
// kata 9 p
const kata9P=document.createElement('p')
mainElement.append(kata9P)

for (counter=100;counter>=5;counter-=5){
   if(counter>=10){
        kata9P.append(counter +',')}else{
            kata9P.append(counter)
    
        }

}


    //kata 10
const kata10heading=document.createElement('h2')
mainElement.append(kata10heading)
kata10heading.append('Kata 10')
  // kata 10 p
const kata10P=document.createElement('p')
mainElement.append(kata10P)
let array2=[]
for(let counter=100; counter>=1; counter-=1)
{
  const counterIsPerfectSquare=Number.isInteger(Math.sqrt(counter))
  if(counterIsPerfectSquare){
      array2.push(counter)
       }

    
        }
 kata10P.append(array2.join(','))

     //kata 11
const kata11heading=document.createElement('h2')
mainElement.append(kata11heading)
kata11heading.append('Kata 11')
  // kata 11 p
const kata11P=document.createElement('p')
mainElement.append(kata11P)
 kata11P.append(sampleArray.join(','))

      //kata 12
const kata12heading=document.createElement('h2')
mainElement.append(kata12heading)
kata12heading.append('Kata 12')
  // kata 12 p
const kata12P=document.createElement('p')
mainElement.append(kata12P)
        let evenArray=[]
        for(let index=0;index<sampleArray.length;index++){
            let possibleNumber=sampleArray[index]
            if(possibleNumber%2){}else{evenArray.push(possibleNumber)}
        }
 kata12P.append(evenArray.join(','))

       //kata 13
const kata13heading=document.createElement('h2')
mainElement.append(kata13heading)
kata13heading.append('Kata 13')
  // kata 13 p
const kata13P=document.createElement('p')
mainElement.append(kata13P)
        let oddArray=[]
        for(let index=0;index<sampleArray.length;index++){
            let possibleNumber=sampleArray[index]
            if(possibleNumber%2){oddArray.push(possibleNumber)}
        }
 kata13P.append(oddArray.join(','))

        //kata 14
const kata14heading=document.createElement('h2')
mainElement.append(kata14heading)
kata14heading.append('Kata 14')
  // kata 14 p
const kata14P=document.createElement('p')
mainElement.append(kata14P)
        let squareArray=[]
        for(let index=0;index<sampleArray.length;index++){
            let possibleNumber=sampleArray[index]
            squareArray.push(possibleNumber*possibleNumber)}
        
 kata14P.append(squareArray.join(','))

   //kata 15
const kata15heading=document.createElement('h2')
mainElement.append(kata15heading)
kata15heading.append('Kata 15')
  // kata 15 p
const kata15P=document.createElement('p')
mainElement.append(kata15P)
     let total20=0
     for(counter=1;counter<=20;counter++){
         total20=counter+total20
     }
        
 kata15P.append(total20)

 //kata 16
const kata16heading=document.createElement('h2')
mainElement.append(kata16heading)
kata16heading.append('Kata 16')
  // kata 16 p
const kata16P=document.createElement('p')
mainElement.append(kata16P)
     let totalSample=0
     for(index=0;index<sampleArray.length;index++){
            let numberadd=sampleArray[index]
         totalSample=totalSample+numberadd
     }
        
 kata16P.append(totalSample)

 //kata 17
const kata17heading=document.createElement('h2')
mainElement.append(kata17heading)
kata17heading.append('Kata 17')
  // kata 17 p
const kata17P=document.createElement('p')
mainElement.append(kata17P)
   let smallNum=Math.min(...sampleArray)
        
 kata17P.append(smallNum)

  //kata 18
const kata18heading=document.createElement('h2')
mainElement.append(kata18heading)
kata18heading.append('Kata 18')
  // kata 18p
const kata18P=document.createElement('p')
mainElement.append(kata18P)
   let largeNum=Math.max(...sampleArray)
        
 kata18P.append(largeNum)