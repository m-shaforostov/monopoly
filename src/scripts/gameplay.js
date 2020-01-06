import $ from 'jquery';
import Promise from 'bluebird';
import players from './data/players';
import config from './data/config';
import playerTemplate from "./templates/player.hbr";


let currentGame;

function startGame() {
    players.forEach((player, id) => {
        player.money = config.initialMoney;
        player.position = 1;
        player.doubles = 0;
        player.triesToEscape = 0;

        const cellDiv = $(window.cellsArray[player.position-1]).find('.cell-content');
        const top = cellDiv.offset().top + cellDiv.height() / 2;
        const left = cellDiv.offset().left + cellDiv.width() / 2;

        player.div = $(playerTemplate({
            id: id + 1,
            image: player.image,
            top,
            left,
        }));

        $(`.player-${id + 1}`).remove();
        $('body').append(player.div);
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

async function makeTurn(player) {
    const currentPlayer = currentGame.players[player];
    const [dice1, dice2] = throwDices();
    console.log([dice1, dice2]);

    const oldPosition = currentPlayer.position;

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

    for (let i = oldPosition; i < oldPosition + dice1 + dice2; i++) {
        const j = i >= 40 ? i - 40 : i;
        const cellDiv = $(window.cellsArray[j]).find('.cell-content');
        const top = cellDiv.offset().top + cellDiv.height() / 2;
        const left = cellDiv.offset().left + cellDiv.width() / 2;
        const playerDiv = currentPlayer.div;
        playerDiv.css({
            left: `${left}px`,
            top: `${top}px`,
        });
        await Promise.delay(200);
    }

    return dice1 === dice2;
}

function throwDices() {
    return [Math.round(Math.random() * 5 + 1), Math.round(Math.random() * 5 + 1)];
}

async function play() {
    for (let i = 0; i < 10; i++)
    {
        await Promise.delay(2000);
        await makeTurn(1);
    }
}

export default {
    startGame,
    play,
};
