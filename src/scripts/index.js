import $ from 'jquery';
import _ from 'lodash';
import '../styles/index.scss';
import field from './data/field';
import countries from './data/countries';
import cellTemplate from './templates/cell.hbr';
import gameplay from './gameplay';

function handleCityClick(event) {
debugger;
    const url = $(event.currentTarget).data('city-url');
    $('.modal-photo img').attr('src', url);
    $('.modal-dark').show();
}

function handleCloseModal() {
    $('.modal-dark').hide();
}

$('.modal-dark').on('click', handleCloseModal);

window.cellsArray = [];
$('.table-field td').each((index, cell) => {
    const id = $(cell).data('id');
    window.cellsArray[id-1] = cell;
});

window.cellsArray.forEach((cell, num) => {
    const fieldConfig = field.cells.find(item => item.index === num+1);
    if (!fieldConfig) return;

    const country = countries.ukraine;
    const city = country.find(item => item.index === num+1);

    const laneClass = _.get(fieldConfig, 'lane', '');
    const { colorClass, color, price } = fieldConfig;
    const cityName = _.get(city, 'name', '');
    const cityUrl = _.get(city, 'cityUrl', '');
    const image = _.get(city, 'image', '');

    const cellDiv = cellTemplate({
        laneClass,
        colorClass,
        color,
        price,
        cityName,
        cityUrl,
        image,
    });

    const cellDiv$ = $(cellDiv);

    $(cell).append(cellDiv$);

    cellDiv$.on('click', handleCityClick);
});

const game = gameplay.startGame();

$('.start').on('click', gameplay.makeTurn);

// gameplay.play();


