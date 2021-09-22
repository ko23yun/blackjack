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

let shuffledCard = card;

// 랜덤으로 card 배열 섞기
shuffle(shuffledCard);

function blackJack(money, count) {
  if (count === 20) {
    return;
  }

  if (shuffledCard.length === 0) {
    shuffledCard = card;
    shuffle(shuffledCard);
  }
  let x = shuffledCard.shift();
  if (shuffledCard.length === 0) {
    shuffledCard = card;
    shuffle(shuffledCard);
  }
  let z = shuffledCard.shift();
  if (shuffledCard.length === 0) {
    shuffledCard = card;
    shuffle(shuffledCard);
  }
  let y = shuffledCard.shift();
  if (shuffledCard.length === 0) {
    shuffledCard = card;
    shuffle(shuffledCard);
  }
  let w = shuffledCard.shift();

  let user = x + y;
  let dealer = z + w;

  while (user <= 14) {
    if (shuffledCard.length === 0) {
      shuffledCard = card;
      shuffle(shuffledCard);
    }
    user = user + shuffledCard.shift();

    if (user > 21) {
      console.log("user", user, "dealer", dealer, "money", money - 1);
      return blackJack(money - 1, count + 1);
    }
  }

  while (dealer <= 16) {
    if (shuffledCard.length === 0) {
      shuffledCard = card;
      shuffle(shuffledCard);
    }
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
