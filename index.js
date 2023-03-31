//TODO:



// MAKE IT SO THAT YOU CAN DRAW MORE THAN ONE CARD
// MAKE CARDS GO TO DRAW PILE AS SOON AS YOU USE THEM
// ADD IN DISCARDING


// MAKE TOTAL OF 10 CARDS
// MAKE TOTAL OF 3 ENEMYS

//MAKE ITEM SHOP WORK
//MAKE THE CARDS IN SHOP RANDOM AND MAKE THEM APEAR







//setting the starting values for game
const user = {
    HP: 10,
    maxHP: 10,
    startStr: 1,
    str: 1,
    startShield: 0,
    shield: 0,
    coins: 0
}

//testing certain cards
//0. Lucky Coin
//1. Homming Missile
//2. Healing Pot
//3. Knuckle Sandwhich
//4. Charged Punch
//5. Basic Shield
//6. Strength Potion
let drawCards = [0,0,0,0,0,0,0,1,1,3];
let discardCards = [];
let shopCards = [2,2,2,2,2,3,3,3,3,3,4,4,4,5,5,6]

let card1ID;
let card2ID;
let card3ID;
let card4ID;
let card5ID;


let shopCard1 = {
    ID: 0,
    price: -1
}
let shopCard2 = {
    ID: 0,
    price: -1
}
let shopCard3 = {
    ID: 0,
    price: -1
}
let shopCard4 = {
    ID: 0,
    price: -1
}
let shopCard5 = {
    ID: 0,
    price: -1
}
let shopCard6 = {
    ID: 0,
    price: -1
}
function start() {
    drawCards.sort(() => Math.random() - 0.5);
    shopCards.sort(() => Math.random() - 0.5);
    console.log(drawCards);
    card1ID = drawCards[0];
    card2ID = drawCards[1];
    card3ID = drawCards[2];
    card4ID = drawCards[3];
    card5ID = drawCards[4];
    drawCards.splice(0,5);
    document.getElementById('slot1').style.backgroundColor = 'white';
    document.getElementById('slot2').style.backgroundColor = 'white';
    document.getElementById('slot3').style.backgroundColor = 'white';
    document.getElementById('slot4').style.backgroundColor = 'white';
    document.getElementById('slot5').style.backgroundColor = 'white';
    document.getElementById('shop1').style.backgroundColor = 'green';
    document.getElementById('shop2').style.backgroundColor = 'green';
    document.getElementById('shop3').style.backgroundColor = 'green';
    document.getElementById('shop4').style.backgroundColor = 'green';
    document.getElementById('shop5').style.backgroundColor = 'green';
    document.getElementById('shop6').style.backgroundColor = 'green';
    document.getElementById('startButton').style.display = 'none';
    updateShopCards();
    drawEnemy();
    update()
}
function draw() {
    discardCards.push(card1ID);
    discardCards.push(card2ID);
    discardCards.push(card3ID);
    discardCards.push(card4ID);
    discardCards.push(card5ID);
    if (drawCards.length < 5){
        shuffle();
    }
    card1ID = drawCards[0];
    card2ID = drawCards[1];
    card3ID = drawCards[2];
    card4ID = drawCards[3];
    card5ID = drawCards[4];
    drawCards.splice(0,5);
    document.getElementById('slot1').style.backgroundColor = 'white';
    document.getElementById('slot2').style.backgroundColor = 'white';
    document.getElementById('slot3').style.backgroundColor = 'white';
    document.getElementById('slot4').style.backgroundColor = 'white';
    document.getElementById('slot5').style.backgroundColor = 'white';
    enemy.turn -= 1;
    if (enemy.HP > 0 && enemy.turn == 0) {
        enemy.ability();
        user.coins = 0;
    }
    
    checkHealth();
    resetBasics();
    updateShopCards();
    update()
}
function shuffle() {
    discardCards.sort(() => Math.random() - 0.5);
    drawCards = drawCards.concat(discardCards);
    console.log(drawCards)
    discardCards = [];
}
function playCard(slotID,cardID){
    switch (document.getElementById(slotID).style.backgroundColor) {
        case 'white':
            card(cardID);
            document.getElementById(slotID).style.backgroundColor = 'green';
            break;
    
        default:
            break;
    }
    update();
    
}
function update() {
    document.getElementById('usrHP').innerHTML = "User Hp: " + user.HP;
    document.getElementById('usrStr').innerHTML = "User Strength: " + user.str;
    document.getElementById('eneStr').innerHTML = "Enemy Strength: " + enemy.str;
    document.getElementById('draw').innerHTML = "Draw Pile: " + drawCards.length;
    document.getElementById('discard').innerHTML = "Discard Pile: " + discardCards.length;
    document.getElementById('usrShield').innerHTML = 'User Shield: ' + user.shield;
    document.getElementById('eneShield').innerHTML = 'Enemy Shield: ' + enemy.shield;
    document.getElementById('usrCoins').innerHTML = 'User Coins: ' + user.coins;
    document.getElementById('turn').innerHTML = "Turns Left: " + enemy.turn;
    if (enemy.HP <=0){
        document.getElementById('eneHP').innerHTML = "Enemy Health: 0";
    }
    else{
        document.getElementById('eneHP').innerHTML = "Enemy Health: " + enemy.HP;
    }
    showCard(card1ID,'slot1');
    showCard(card2ID,'slot2');
    showCard(card3ID,'slot3');
    showCard(card4ID,'slot4');
    showCard(card5ID,'slot5');
}
function checkHealth() {
    if (user.HP <= 0) {
        loseGame();
    }
    else if(enemy.HP <=0) {
        if (eneList.length <= 0){
            winGame();
        }
        else {
            drawEnemy();
        }
    }
}
function winGame() {
    document.getElementById('winScreen').innerHTML = "You Win!";
}
function loseGame() {
    document.getElementById('loseScreen').innerHTML = "You Lose!";
}
function dealDamage(damage) {
    damage = damage - enemy.shield;
    if (damage >= 0){
        enemy.HP -= damage;
        enemy.shield = 0;
    }
    else {
        enemy.shield = damage * -1;
    }
}
function takeDamage(damage) {
    damage = damage - user.shield;
    if (damage >= 0) {
        user.HP -= damage;
        user.shield = 0;
    }
    else {
        user.shield = damage * -1;
    }
}   
function getCoin(coins) {
    user.coins++;
}
function resetBasics() {
    user.shield = user.startShield;
    enemy.shield = enemy.startShield;
    user.str = user.startStr;
    enemy.str = enemy.startStr;
}
function updateShopCards() {
    if (document.getElementById("shop1").style.backgroundColor === "green"){
        shopCard1.ID = shopCards[0]
        shopCards.shift();
        shopCard1.price = showShopCard(shopCard1,"shop1","price1");
        document.getElementById("shop1").style.backgroundColor = "white"
        document.getElementById("price1").style.backgroundColor = "white"
    }
    if (document.getElementById("shop2").style.backgroundColor === "green"){
        shopCard2.ID = shopCards[0]
        shopCards.shift();
        shopCard2.price = showShopCard(shopCard2,"shop2","price2");
        document.getElementById("shop2").style.backgroundColor = "white"
        document.getElementById("price2").style.backgroundColor = "white"
    }
    
    if (document.getElementById("shop3").style.backgroundColor === "green"){
        shopCard3.ID = shopCards[0]
        shopCards.shift();
        shopCard3.price = showShopCard(shopCard3,"shop3","price3");
        document.getElementById("shop3").style.backgroundColor = "white"
        document.getElementById("price3").style.backgroundColor = "white"
    }
    if (document.getElementById("shop4").style.backgroundColor === "green"){
        shopCard4.ID = shopCards[0]
        shopCards.shift();
        shopCard4.price = showShopCard(shopCard4,"shop4","price4");
        document.getElementById("shop4").style.backgroundColor = "white"
        document.getElementById("price4").style.backgroundColor = "white"
    }
    if (document.getElementById("shop5").style.backgroundColor === "green"){
        shopCard5.ID = shopCards[0]
        shopCards.shift();
        shopCard5.price = showShopCard(shopCard5,"shop5","price5");
        document.getElementById("shop5").style.backgroundColor = "white"
        document.getElementById("price5").style.backgroundColor = "white"
    }
    if (document.getElementById("shop6").style.backgroundColor === "green"){
        shopCard6.ID = shopCards[0]
        shopCards.shift();
        shopCard6.price = showShopCard(shopCard6,"shop6","price6");
        document.getElementById("shop6").style.backgroundColor = "white"
        document.getElementById("price6").style.backgroundColor = "white"
    }
    console.log(shopCards);
}
function buyCard(shopSlotID,shopCardID,priceID) {
    console.log(shopSlotID)
    console.log(shopCardID)
    console.log(priceID)

    if (user.coins >= shopCardID.price){
        switch (document.getElementById(shopSlotID).style.backgroundColor) {
            case 'white':
                
                document.getElementById(shopSlotID).style.backgroundColor = 'green';
                document.getElementById(priceID).style.backgroundColor = 'green';
                user.coins -= shopCardID.price
                discardCards.push(shopCardID.ID)
                update();
                break;
        
            default:
                break;
        }
    }

}



//ENEMYS
eneList = [1,3,2]
let enemy = {
    name: "Villian Didn't load",
    description: "Error in script",
    HP: 5,
    maxHP: 5,
    startStr: 2,
    str: 2,
    startShield: 0,
    shield: 0,
    damageType: 'projectile',
    turn: 3,
    baseTurn: 3,
    ability: function() {
        dealDamage(str);
    }
}
function enemyAbility(enemyID) {
    switch(enemyID) {
        case 1:
            enemy1.ability();
            break;
            
        case 2:
            enemy2.ability();
            break;
        case 3:
            enemy3.ability();
            break;
    }
}
function drawEnemy() {
    let enemyID = eneList[0];
    eneList.shift();
    user.coins = 0;
    switch(enemyID) {
        case 1:
            document.getElementById('enemyName').innerHTML = enemy1.name;
            document.getElementById('enemyDescription').innerHTML = enemy1.description;
            document.getElementById('enemyDescriber').innerHTML = enemy1.describer;
            enemy = Object.create(enemy1);
            enemy.turn = enemy1.baseTurn;
            break;
        case 2:
            document.getElementById('enemyName').innerHTML = enemy2.name;
            document.getElementById('enemyDescription').innerHTML = enemy2.description;
            document.getElementById('enemyDescriber').innerHTML = enemy2.describer;
            enemy = Object.create(enemy2);
            enemy.turn = enemy2.baseTurn;
            break;
        case 3:
            document.getElementById('enemyName').innerHTML = enemy3.name;
            document.getElementById('enemyDescription').innerHTML = enemy3.description;
            document.getElementById('enemyDescriber').innerHTML = enemy3.describer;
            enemy = Object.create(enemy3);
            enemy.turn = enemy3.baseTurn;
            break;
    }
    console.log(enemy);
}



const enemy1 = {
    name: "Simple Archer",
    description: "His wife is mad that all he cares about is archery. He spends all his time at the range but no time with her. Thank goodness he isn't very good. Whenever he attacks he uses all of his strength.",
    describer: "Deals 2 Damage",
    HP: 6,
    maxHP: 10,
    startStr: 2,
    str: 2,
    startShield: 0,
    shield: 0,
    damageType: 'projectile',
    baseTurn: 3,
    turn: 3,
    ability: function() {
        enemy.turn = 3;
        takeDamage(1*enemy.str);
    }
}
const enemy2 = {
    name: "Simple Knight",
    description: "He was disloyal to the King, by getting with the Queen! His wife wants this relationship to end by any means neccesary, don't let things go on too long, He has a temper!",
    describer: "Deals 3 damage, Gains 1 strength each turn",
    HP: 14,
    maxHP: 14,
    startStr: 3,
    str: 3,
    startShield: 2,
    shield: 2,
    damageType: 'physical',
    baseTurn: 4,
    turn: 4,
    ability: function() {
        enemy.turn = 4;
        takeDamage(enemy.str);
        enemy.startStr++;
    }
}
const enemy3 = {
    name: "Crooked Thief",
    description: "A terrible ladies man who steals from unsuspecting women. He goes to the local tavern and leaves with a lady. When that lady wakes up the next morning all of her jewlery is gone. His latest victim wants him gone.",
    describer: "Deals 2 damage for each coin you have",
    HP: 15,
    maxHP: 15,
    startStr: 0,
    str: 0,
    startShield: 0,
    shield: 0,
    damageType: 'physical',
    baseTurn: 3,
    turn: 3,
    ability: function() {
        enemy.turn = 3;
        takeDamage(2*user.coins);
    }
}






//BELOW ARE ALL OF THE CODE FOR THE CARDS TO WORK
//FIRST TWO FUCTIONS MAKE THEM WORK BELOW ARE THE 
//OBJECTS THAT ARE THE CARDS THEMSELVES



function card(cardID) {
    switch(cardID) {
        case 0:
            card0.ability();
            break;
        case 1:
            card1.ability();
            break;
        case 2:
            card2.ability();
            break;
        case 3:
            card3.ability();
            break;
        case 4:
            card4.ability();
            break;
        case 5:
            card5.ability();
            break;
        case 6:
            card6.ability();
            break;
    }
}
function showCard(cardID,slotID) {
    switch(cardID) {
        case 0:
            document.getElementById(slotID).innerHTML = card0.name + ": " + card0.description;
            break;
        case 1:
            document.getElementById(slotID).innerHTML = card1.name + ": " + card1.description;
            break;
        case 2:
            document.getElementById(slotID).innerHTML = card2.name + ": " + card2.description;
            break;
        case 3:
            document.getElementById(slotID).innerHTML = card3.name + ": " + card3.description;
            break;
        case 4:
            document.getElementById(slotID).innerHTML = card4.name + ": " + card4.description;
            break;
        case 5:
            document.getElementById(slotID).innerHTML = card5.name + ": " + card5.description;
            break;
        case 6:
            document.getElementById(slotID).innerHTML = card6.name + ": " + card6.description;
            break;
    }
}
function showShopCard(shopCard,shopSlotID,priceID) {
    switch(shopCard.ID) {
        case 0:
            document.getElementById(shopSlotID).innerHTML = card0.name + ": " + card0.description;
            document.getElementById(priceID).innerHTML = card0.price;
            return card0.price;
        case 1:
            document.getElementById(shopSlotID).innerHTML = card1.name + ": " + card1.description;
            document.getElementById(priceID).innerHTML = card1.price;
            return card1.price;
        case 2:
            document.getElementById(shopSlotID).innerHTML = card2.name + ": " + card2.description;
            document.getElementById(priceID).innerHTML = card2.price;
            return card2.price;
        case 3:
            document.getElementById(shopSlotID).innerHTML = card3.name + ": " + card3.description;
            document.getElementById(priceID).innerHTML = card3.price;
            return card3.price;
        case 4:
            document.getElementById(shopSlotID).innerHTML = card4.name + ": " + card4.description;
            document.getElementById(priceID).innerHTML = card4.price;
            return card4.price;
        case 5:
            document.getElementById(shopSlotID).innerHTML = card5.name + ": " + card5.description;
            document.getElementById(priceID).innerHTML = card5.price;
            return card5.price;
        case 6:
            document.getElementById(shopSlotID).innerHTML = card6.name + ": " + card6.description;
            document.getElementById(priceID).innerHTML = card6.price;
            return card6.price;

    }
    
}
const card0 = {
    name: "Lucky Coin",
    description: "You find a coin on the ground by chance, +1 coin",
    price: 1,
    ability: function() {
        getCoin(1);
    }
}
const card1 = {
    name: "Sharp Rock",
    description: "You find a sharp rock, -1 enemy health",
    price: 4,
    ability: function() {
        dealDamage(1);
    }
}
const card2 = {
    name: "Healing Potion",
    description: "A Witch's red elixer bought for cheap because it is expired, +2 user health",
    price: 7,
    ability: function() {
        if (user.HP <= user.maxHP -2) {
            user.HP += 2;
        }
        else if(user.HP <= user.maxHP -1) {
            user.HP = user.maxHP;
        }
    }
}
const card3 = {
    name: "Royal Punch",
    description: "Nothing some knuckles can't do, do the users strength in damage",
    price: 7,
    ability: function() {
        dealDamage(user.str);
    }
}
const card4 = {
    name: "Drunken Punch",
    description: "Who said you can't have fun and work at the same time. +1 Strength, then do strength as damage and -1 user HP",
    price: 10,
    ability: function() {
        user.str++;
        dealDamage(user.str);
        user.HP--;
    }
}
const card5 = {
    name: "Guard's Shield",
    description: "Found this in the back room. Hopefully nobody needed it. +2 Sheilds and 1/2 enemy damage for this turn only",
    price: 9,
    ability: function() {
        user.shield += 2;
        enemy.str /= 2;
    }
}
const card6 = {
    name: "Strength Potion",
    description: "Permenent booz power... Nice. Gives the user +1 permanent damage bonus",
    price: 10,
    ability: function() {
        user.startStr += 1;
        user.str += 1;
    }
}





console.log(enemy.name);