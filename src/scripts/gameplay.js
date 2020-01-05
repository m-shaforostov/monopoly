import players from './data/players';
import config from './data/config';

let currentGame;

function startGame() {
    players.forEach(player => {
       player.money = config.initialMoney;
       player.position = 1;
       player.doubles = 0;
       player.triesToEscape = 0;
    });
    currentGame = {
        players,
        // properties: [undefined, {
        //     owner: 1,
        //     buildings: 0
        // }]
        properties: [],
    };
    return currentGame;
}

function makeTurn(player) {
    const currentPlayer = currentGame.players[player];
    const [dice1, dice2] = throwDices();
    if (dice1 === dice2) {
        currentPlayer.doubles++;
    }
    if (currentPlayer.doubles === 3) {
        currentPlayer.doubles = 0;
        currentPlayer.position = 11;
    } else {
        currentPlayer.position += (dice1 + dice2);
        if (currentPlayer.position > 40) {
            currentPlayer.position -= 40;
        }
    }
    return dice1 === dice2;
}

function throwDices() {

}

export default {
    startGame,
    makeTurn,
};
