// 1 => 1, 11
// 처음 합이 21이면 1.5

let card = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10,
];

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));
    const temporary = array[index];
    array[index] = array[randomPosition];
    array[randomPosition] = temporary;
  }
}

function checkShuffledCardLength() {
  if (shuffledCard.length === 0) {
    shuffledCard = card.slice();
    shuffle(shuffledCard);
  }
}

let shuffledCard = card.slice().slice();

// 랜덤으로 card 배열 섞기
shuffle(shuffledCard);

function blackJack(money, count) {
  if (count === 10) return;

  checkShuffledCardLength();
  let x = shuffledCard.shift();

  checkShuffledCardLength();
  let z = shuffledCard.shift();

  checkShuffledCardLength();
  let y = shuffledCard.shift();

  checkShuffledCardLength();
  let w = shuffledCard.shift();

  let user = x + y;
  let dealer = z + w;

  while (user <= 14) {
    checkShuffledCardLength();
    user = user + shuffledCard.shift();

    if (user > 21) {
      console.log("user", user, "dealer", dealer, "money", money - 1);
      return blackJack(money - 1, count + 1);
    }
  }

  while (dealer <= 16) {
    checkShuffledCardLength();
    dealer = dealer + shuffledCard.shift();

    if (dealer > 21) {
      console.log("user", user, "dealer", dealer, "money", money + 1);
      return blackJack(money + 1, count + 1);
    }
  }

  if (user > dealer) {
    console.log("user", user, "dealer", dealer, "money", money + 1);
    return blackJack(money + 1, count + 1);
  } else if (user < dealer) {
    console.log("user", user, "dealer", dealer, "money", money - 1);
    return blackJack(money - 1, count + 1);
  } else {
    console.log("user", user, "dealer", dealer, "money", money);
    return blackJack(money, count + 1);
  }
}

blackJack(0, 0);
