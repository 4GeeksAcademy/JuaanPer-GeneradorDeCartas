function generateCard() {
  const suits = ['♦', '♥', '♠', '♣'];
  const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const color = (suit === '♥' || suit === '♦') ? 'red' : 'black';

  document.getElementById('top-suit').textContent = suit;
  document.getElementById('bottom-suit').textContent = suit;
  document.getElementById('card-value').textContent = value;

  document.getElementById('top-suit').style.color = color;
  document.getElementById('bottom-suit').style.color = color;
  document.getElementById('card-value').style.color = color;
}

window.onload = generateCard;
