import $ from 'jquery';
import _ from 'lodash';
import Handlebars from 'handlebars';
import '../styles/index.scss';
import field from './data/field';

$('body').append($('<div>').addClass('field')); //

const cellsArray = [];
$('.table-field td').each((index, cell) => {
    const id = $(cell).data('id');
    cellsArray[id-1] = cell;
});

cellsArray.forEach((cell, num) => {
    const fieldConfig = field.cells.find(item => item.index === num+1);
    if (!fieldConfig) return;
    const laneClass =  _.get(fieldConfig, 'lane', '');
    const cellDiv = $('<div>').addClass(`cell-content ${laneClass}`);

    const cellColor = $('<div>').addClass(fieldConfig.colorClass);
    cellColor.css('backgroundColor', fieldConfig.color);
    cellDiv.append(cellColor);

    const cellPrice = $('<div>').addClass('price').text(fieldConfig.price);
    cellDiv.append(cellPrice);

    $(cell).append(cellDiv);
});

field.cells.forEach((cell) => {
    $('.field').append(
        $('<div>').css({
            width: cell.width,
            height: cell.height,
            top: cell.top,
            left: cell.left,
            right: cell.right,
        }).addClass('cell')
            .append(
                $('<div>').css({
                    backgroundColor: cell.color,
                }).addClass(cell.colorClass)
            )
    );
});

console.log(JSON.stringify(field));
