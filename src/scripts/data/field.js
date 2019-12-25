const SMALL_SIDE = '50';
const LARGE_SIDE = '100';
const COLORS = ['white', '#b400ff', 'lightblue', 'magenta', 'orange', 'red', 'mint', 'green', 'blue'];

const field = {
      cells: [
            {
                  index: 1,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 2,
                  colorClass: 'cell-color-top',
                  group: 1,
            },
            {
                  index: 3,
                  colorClass: 'cell-color-top',
                  group: 1,
            },
            {
                  index: 4,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 5,
                  colorClass: 'cell-color-top',
                  group: 2,
            },




            {
                  index: 40,
                  colorClass: 'cell-color-left',
                  group: 8,
            }
      ]
};

const buildField = () => {
      const cells = field.cells.map((cell, index) => {
            cell.color = COLORS[cell.group];
            return cell;
      });
      return {
            cells,
      };
};

export default buildField();
