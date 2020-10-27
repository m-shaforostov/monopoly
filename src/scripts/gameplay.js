import $ from 'jquery';
import Promise from 'bluebird';
import players from './data/players';
import config from './data/config';
import playerTemplate from "./templates/player.hbr";
import fieldCenterTemplate from "./templates/fieldCenter.hbr";
import imgQuestion from "../images/question.png";
import imgChest from "../images/chest.jpg";

let currentGame;
let currentPlayerNumber = 1;

function startGame() {
    const fieldCenterDiv = $(fieldCenterTemplate({
        dice1: 6,
        dice2: 6,
        imgQuestion,
        imgChest,
    }));
    $('td.cell-center').append(fieldCenterDiv);



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
        $('').append(player.image);
    });
    currentGame = {
        players,
        // properties: [undefined, {
        //     owner: 1,
        //     buildings: 0
        // }]
        properties: [],
        fieldCenterDiv,
    };
    return currentGame;
}

async function makeTurn() {
    $('.start').prop('disabled', true);
    const currentPlayer = currentGame.players[currentPlayerNumber-1];
    const [dice1, dice2] = throwDices();

    await Promise.delay(1000);

    currentGame.fieldCenterDiv.find('.dice-number1').text(dice1);
    currentGame.fieldCenterDiv.find('.dice-number2').text(dice2);

    await Promise.delay(1000);


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

    currentPlayerNumber++;
    if (currentPlayerNumber > players.length) currentPlayerNumber = 1;

    $('.start').prop('disabled', false);

    return dice1 === dice2;
}

function throwDices() {
    const dicenum1 = Math.round(Math.random() * 5 + 1);
    const dicenum2 = Math.round(Math.random() * 5 + 1);

    return [dicenum1, dicenum2];
}

async function play() {
    for (let i = 0; i < 10; i++)
    {
        await makeTurn(1);
    }
}

export default {
    startGame,
    play,
    makeTurn,
};

