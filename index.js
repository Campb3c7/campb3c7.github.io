//TODO:



// MAKE IT SO THAT YOU CAN DRAW MORE THAN ONE CARD
// MAKE CARDS GO TO DRAW PILE AS SOON AS YOU USE THEM
// ADD IN DISCARDING


// MAKE TOTAL OF 10 CARDS
// MAKE TOTAL OF 3 ENEMYS

//MAKE ITEM SHOP WORK
//MAKE THE CARDS IN SHOP RANDOM AND MAKE THEM APEAR




//0. Lucky Coin
//1. Homming Missile
//2. Healing Pot
//3. Knuckle Sandwhich
//4. Charged Punch
//5. Basic Shield
//6. Strength Potion
//7. Tied Shoe Lace
//8. Antique Butter Knife
let drawCards = [0,0,0,0,0,0,0,1,1,8];
let discardCards = [];
let shopCards = [2,2,2,2,2,3,3,3,3,3,4,4,4,5,5,6]

//1. Skewed Archer
//2. Unloyal Knight
//3. Crooked Thief
let eneList = [1,3,2]

let choiceOption = -1;
let choiceCard;
let card1ID;
let card2ID;
let card3ID;
let card4ID;
let card5ID;
let shopCard1;
let shopCard2;
let shopCard3;
let shopCard4;
let shopCard5;
let shopCard6;
let enemy;
const user = {
    HP: 10,
    maxHP: 10,
    startStr: 1,
    str: 1,
    startShield: 0,
    shield: 0,
    coins: 0
}

document.getElementById('choice1').style.display = 'none';
document.getElementById('choice2').style.display = 'none';

function computerStart() {
    document.getElementById('shopSide').style.float = 'right';
    document.getElementById('gameSide').style.float = 'left';
    document.getElementById('mobileBreak').innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
    start();
}
function phoneStart(){
    start();
}
function start() {
    drawCards.sort(() => Math.random() - 0.5);
    shopCards.sort(() => Math.random() - 0.5);
    console.log(drawCards);
    card1ID = cards[drawCards[0]];
    card2ID = cards[drawCards[1]];
    card3ID = cards[drawCards[2]];
    card4ID = cards[drawCards[3]];
    card5ID = cards[drawCards[4]];
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
    document.getElementById('computerButton').style.display = 'none';
    document.getElementById('phoneButton').style.display = 'none';
    document.getElementById('shopTitle').innerHTML = "Lucy's Bargains and Buyouts";
    updateShopCards();
    drawEnemy();
    update()
}
function draw() {
    if (document.getElementById('slot1').style.backgroundColor === 'white') {
        discardCards.push(card1ID.ID);
    }
    if (document.getElementById('slot2').style.backgroundColor === 'white') {
        discardCards.push(card2ID.ID);
    }
    if (document.getElementById('slot3').style.backgroundColor === 'white') {
        discardCards.push(card3ID.ID);
    }
    if (document.getElementById('slot4').style.backgroundColor === 'white') {
        discardCards.push(card4ID.ID);
    }
    if (document.getElementById('slot5').style.backgroundColor === 'white') {
        discardCards.push(card5ID.ID);
    }
    if (drawCards.length < 5){
        shuffle();
    }
    card1ID = Object.create(cards[drawCards[0]]);
    card2ID = Object.create(cards[drawCards[1]]);
    card3ID = Object.create(cards[drawCards[2]]);
    card4ID = Object.create(cards[drawCards[3]]);
    card5ID = Object.create(cards[drawCards[4]]);
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
    resetCards()
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
function resetBasics() {
    user.shield = user.startShield;
    enemy.shield = enemy.startShield;
    user.str = user.startStr;
    enemy.str = enemy.startStr;
}
function updateShopCards() {
    if (document.getElementById("shop1").style.backgroundColor === "green"){
        shopCard1 = cards[shopCards[0]]
        console.log(shopCard1);
        shopCards.shift();
        document.getElementById('shop1').innerHTML = '<strong>' + shopCard1.name + ':</strong> ' + shopCard1.description + '<br>' + '<strong>' + shopCard1.describer + '</strong> ';
        document.getElementById('price1').innerHTML = shopCard1.price;
        document.getElementById("shop1").style.backgroundColor = "white"
        document.getElementById("price1").style.backgroundColor = "white"
    }
    if (document.getElementById("shop2").style.backgroundColor === "green"){
        shopCard2 = cards[shopCards[1]]
        console.log(shopCard2)
        shopCards.shift();
        document.getElementById('shop2').innerHTML = '<strong>' + shopCard2.name + ':</strong> ' + shopCard2.description+ '<br>' + '<strong>' + shopCard2.describer + '</strong> ';
        document.getElementById('price2').innerHTML = shopCard2.price;
        document.getElementById("shop2").style.backgroundColor = "white"
        document.getElementById("price2").style.backgroundColor = "white"
    }
    
    if (document.getElementById("shop3").style.backgroundColor === "green"){
        shopCards.shift();
        shopCard3 = cards[shopCards[2]]
        document.getElementById('shop3').innerHTML = '<strong>' + shopCard3.name + ':</strong> ' + shopCard3.description+ '<br>' + '<strong>' + shopCard3.describer + '</strong> ';
        document.getElementById('price3').innerHTML = shopCard3.price;
        document.getElementById("shop3").style.backgroundColor = "white"
        document.getElementById("price3").style.backgroundColor = "white"
    }
    if (document.getElementById("shop4").style.backgroundColor === "green"){
        shopCards.shift();
        shopCard4 = cards[shopCards[3]]
        document.getElementById('shop4').innerHTML = '<strong>' + shopCard4.name + ':</strong> ' + shopCard4.description+ '<br>' + '<strong>' + shopCard4.describer + '</strong> ';
        document.getElementById('price4').innerHTML = shopCard4.price;
        document.getElementById("shop4").style.backgroundColor = "white"
        document.getElementById("price4").style.backgroundColor = "white"
    }
    if (document.getElementById("shop5").style.backgroundColor === "green"){
        shopCards.shift();
        shopCard5 = cards[shopCards[4]]
        document.getElementById('shop5').innerHTML = '<strong>' + shopCard5.name + ':</strong> ' + shopCard5.description+ '<br>' + '<strong>' + shopCard5.describer + '</strong> ';
        document.getElementById('price5').innerHTML = shopCard5.price;
        document.getElementById("shop5").style.backgroundColor = "white"
        document.getElementById("price5").style.backgroundColor = "white"
    }
    if (document.getElementById("shop6").style.backgroundColor === "green"){
        shopCards.shift();
        shopCard6 = cards[shopCards[5]]
        document.getElementById('shop6').innerHTML = '<strong>' + shopCard6.name + ':</strong> ' + shopCard6.description+ '<br>' + '<strong>' + shopCard6.describer + '</strong> ';
        document.getElementById('price6').innerHTML = shopCard6.price;
        document.getElementById("shop6").style.backgroundColor = "white"
        document.getElementById("price6").style.backgroundColor = "white"
    }
}
function buyCard(shopSlotID,shopCard,priceID) {
    console.log(shopSlotID)
    console.log(shopCard)
    console.log(priceID)

    if (user.coins >= shopCard.price){
        switch (document.getElementById(shopSlotID).style.backgroundColor) {
            case 'white':
                
                document.getElementById(shopSlotID).style.backgroundColor = 'green';
                document.getElementById(priceID).style.backgroundColor = 'green';
                user.coins -= shopCard.price
                discardCards.push(shopCard.ID)
                update();
                break;
        
            default:
                break;
        }
    }

}
function playCard(slotID,card){
    switch (document.getElementById(slotID).style.backgroundColor) {
        case 'white':
            card.ability();
            if (card.ID != undefined) {
                discardCards.push(card.ID);
            }
            document.getElementById(slotID).style.backgroundColor = 'green';
            break;
    
        default:
            break;
    }
    update();
    
}
function showCard(cardID,slotID) {
    document.getElementById(slotID).innerHTML = '<strong>' + cardID.name + ':</strong> ' + cardID.description + '<br>' + '<strong>' + cardID.describer + '</strong> ';
}
function drawEnemy() {
    let enemyID = eneList[0];
    eneList.shift();
    user.coins = 0;
    enemy = Object.create(enemys[enemyID]);
    document.getElementById('enemyName').innerHTML = enemy.name;
    document.getElementById('enemyDescription').innerHTML = enemy.description;
    document.getElementById('enemyDescriber').innerHTML = enemy.describer;
    console.log(enemy);
}
function resetCards() {
    card7.ID = 7;
}
function chooseOption(card,option1,option2) {
    if (choiceOption === -1){
        document.getElementById('choice1').style.display = 'block';
        document.getElementById('choice2').style.display = 'block';
        document.getElementById('choice1').innerHTML = option1;
        document.getElementById('choice2').innerHTML = option2;
        choiceCard = card;
    }
    else {
        document.getElementById('choice1').style.display = 'none';
        document.getElementById('choice2').style.display = 'none';
        choiceCard.ability();
        update();
    }
}
function choiceButton(decision) {
    choiceOption = decision;
    console.log(choiceOption);
    chooseOption();
}





//ENEMYS
const enemy1 = {
    name: "Skewed Archer",
    description: "His wife is mad that all he cares about is archery. He spends all his time at the range but no time with her. Thank goodness he isn't very good. Whenever he attacks he uses all of his strength.",
    describer: "Deals 3 Damage, Cannot be blocked",
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
    name: "Unloyal Knight",
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
    describer: "Deals 2 damage, +1 additional damage for each coin you own when attacked",
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
        takeDamage(2)
        takeDamage(1*user.coins);
    }
}


//CARDS
const card0 = {
    name: "Lucky Coin",
    description: "You find a coin on the ground by chance",
    describer: "+1 Coin",
    price: 1,
    ID: 0,
    ability: function() {
        user.coins++;
    }
}
const card1 = {
    name: "Sharp Rock",
    description: "You find a sharp rock",
    describer: "-1 Enemy Health",
    price: 4,
    ID: 1,
    ability: function() {
        dealDamage(1);
    }
}
const card2 = {
    name: "Healing Potion",
    description: "A Witch's red elixer bought for cheap because it is expired",
    describer: "+2 User Health",
    price: 7,
    ID: 2,
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
    description: "Nothing some knuckles can't do",
    describer: "-" + user.str + " Enemy Health",
    price: 7,
    ID: 3,
    ability: function() {
        dealDamage(user.str);
    }
}
const card4 = {
    name: "Drunken Punch",
    description: "Who said you can't have fun and work at the same time.",
    describer: "+1 Strength, Enemy -(" + (user.str) + ") HP, -1 User HP",
    price: 10,
    ID: 4,
    ability: function() {
        user.str++;
        dealDamage(user.str);
        user.HP--;
    }
}
const card5 = {
    name: "Guard's Shield",
    description: "Found this in the back room. Hopefully nobody needed it.",
    describer: " +2 Sheild, 1/2 Enemy Strength, This turn Only",
    price: 9,
    ID: 5,
    ability: function() {
        user.shield += 2;
        enemy.str /= 2;
    }
}
const card6 = {
    name: "Rum",
    description: "Permenent booz power... Nice.",
    describer: "+1 Permenant Strength",
    price: 10,
    ID: 6,
    ability: function() {
        user.startStr += 1;
        user.str += 1;
    }
}
const card7 = {
    name: "Tied Show Laces",
    description: "Oldest Trick in the book",
    describer: "+1 Enemy Turn, One Use",
    price: 3,
    ID: 7,
    ability: function() {
        enemy.turn += 1;
        this.ID = undefined;
    }
}
const AntiqueButterKnife = {
    name: "Antique Butter Knife",
    description: "A family heirloom worth a pretty penny, and sharp enough to cut butter",
    describer: "+2 Coins || -1 Enemy Health",
    price: 10,
    ID: 8,
    ability: function() {
        if (choiceOption === -1){
            chooseOption(AntiqueButterKnife,'+2 Coins','-1 EnemyHealth');
        }
        else {
            console.log('testings')
            if(choiceOption === 1) {
                user.coins += 2;
            }
            else{
                dealDamage(1);
            }
            choiceOption = -1;
        }
    }
}

const cards = [card0,card1,card2,card3,card4,card5,card6,card7,AntiqueButterKnife];
const enemys = [0,enemy1,enemy2,enemy3]