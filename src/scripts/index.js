import '../styles/index.scss';
import field from './data/field';
import $ from 'jquery';

$('body').append($('<div>').addClass('field'));

const cellsArray = [];
$('.table-field td').each((index, cell) => {
    const id = $(cell).data('id');
    cellsArray[id-1] = cell;
});

cellsArray.forEach((cell, num) => {
    const fieldConfig = field.cells.find(item => item.index === num+1);
    if (!fieldConfig) return;
    const cellDiv = $('<div>').addClass('cell-content');
    const cellColor = $('<div>').addClass(fieldConfig.colorClass);
    cellColor.css('backgroundColor', fieldConfig.color);
    cellDiv.append(cellColor);

    $(cell).append(cellDiv);
});

field.cells.forEach((cell) => {
    $('.field').append(
        $('<div>').css({
            width: cell.width,
            height: cell.height,
            top: cell.top,
            left: cell.left,
        }).addClass('cell')
            .append(
                $('<div>').css({
                    backgroundColor: cell.color,
                }).addClass(cell.colorClass)
            )
    );
});

console.log(JSON.stringify(field));
