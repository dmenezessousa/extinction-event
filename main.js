//Top list
//get list elements from ordered list
const topListItems = document.querySelectorAll('ol li');

//add a line-through each clicked item in the ordered list
for(const list of topListItems) {
    list.addEventListener('click',function() {
        list.style.textDecoration = 'line-through';
    });
}

//============================================================================================
//Bottom list
//get list elements from unordered list
const bottomListItems = document.querySelectorAll('ul li');

//set the opacity of any targeted element in html to be 0
const fadeAway = function(event){
    event.target.style.opacity = 0;
}

//loop through the list in the Unordered list and apply the fadeAway function from above.
// for (const list of bottomListItems){
//     list.addEventListener('click', fadeAway);
// }

//testing forEach loop
bottomListItems.forEach(element => element.addEventListener('click', fadeAway));


//============================================================================================
//Dino Images
//get images elements
const dinoImages = document.querySelectorAll("#row img");

//set the images pxs to 0 making it collapse.
const beGone = function(e){
    e.target.style.width = '0px';
}

//loop through the images and apply the beGone function from above.
// for(const dinos of dinoImages){
//     dinos.addEventListener('click', beGone)
// }

////testing forEach loop
dinoImages.forEach(element => element.addEventListener('click', beGone));

//============================================================================================
//Kill them All
//get buttom element
const fireBall = document.querySelector('#destroy-all');

//apply all the previous options to the page
const killEmAll = function(){
    
    for(const list of topListItems){
        list.style.textDecoration = 'line-through';
    }

    for(const list of bottomListItems){
        list.style.opacity = 0;
    }

    for(const dinos of dinoImages){
        dinos.style.width = '0px';
    }
}

//when the buttom is clicked use the killEmAll fuction.
fireBall.addEventListener('click', killEmAll);

