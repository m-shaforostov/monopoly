import $ from 'jquery';
import _ from 'lodash';
import '../styles/index.scss';
import field from './data/field';
import countries from './data/countries';
import cellTemplate from './templates/cell.hbr';


const cellsArray = [];
$('.table-field td').each((index, cell) => {
    const id = $(cell).data('id');
    cellsArray[id-1] = cell;
});

cellsArray.forEach((cell, num) => {
    const fieldConfig = field.cells.find(item => item.index === num+1);
    if (!fieldConfig) return;

    const country = countries.ukraine;
    const city = country.find(item => item.index === num+1);

    const laneClass = _.get(fieldConfig, 'lane', '');
    const { colorClass, color, price } = fieldConfig;
    const cityName = _.get(city, 'name', '');

    const cellDiv = cellTemplate({
        laneClass,
        colorClass,
        color,
        price,
        cityName,
    });

    $(cell).append(cellDiv);
});
