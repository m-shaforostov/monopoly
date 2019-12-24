import '../styles/index.scss';
import field from './data/field';
import $ from 'jquery';

$('body').append($('<div>').addClass('field'));

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
