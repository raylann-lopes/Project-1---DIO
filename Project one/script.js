let nome = "Raylan";
let xp = 8743;
let elo = " ";

if (xp < 1000) {
  elo = "Ferro";
} else if (xp > 1001 && xp < 2000) {
  elo = "Bronze";
} else if (xp > 2001 && xp < 5000) {
  elo = "Prata";
} else if (xp > 6001 && xp < 7000) {
  elo = "Ouro";
} else if (xp > 7001 && xp < 8000) {
  elo = "Platina";
} else if (xp > 8001 && xp < 9000) {
  elo = "Ascendente";
} else if (xp > 9001 && xp < 10000) {
  elo = "Imortal";
} else if (xp >= 10001) {
  elo = "Radiante";
} else {
  elo = " ";
}

let resultado =
  "O Heroi de nome " +
  nome +
  " esta no nivel " +
  elo +
  " com " +
  xp +
  " pontos de experiência.";

console.log(resultado);
