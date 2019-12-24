const SMALL_SIDE = '50';
const LARGE_SIDE = '100';
const COLORS = ['white', 'pink', 'lightblue', 'magenta', 'orange', 'red', 'mint', 'green', 'blue'];

const field = {
      cells: [
            {
                  index: 1,
                  top: 650-SMALL_SIDE*2,
                  left: 650-SMALL_SIDE*2,
                  width: LARGE_SIDE,
                  height: LARGE_SIDE,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 2,
                  top: 650-SMALL_SIDE*2,
                  left: 650-SMALL_SIDE*3,
                  width: SMALL_SIDE,
                  height: LARGE_SIDE,
                  colorClass: 'cell-color-top',
                  group: 1,
            },
            {
                  index: 3,
                  top: 650-SMALL_SIDE*2,
                  left: 650-SMALL_SIDE*4,
                  width: SMALL_SIDE,
                  height: LARGE_SIDE,
                  colorClass: 'cell-color-top',
                  group: 1,
            },
            {
                  index: 4,
                  top: 650-SMALL_SIDE*2,
                  left: 650-SMALL_SIDE*5,
                  width: SMALL_SIDE,
                  height: LARGE_SIDE,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 5,
                  top: 650-SMALL_SIDE*2,
                  left: 650-SMALL_SIDE*6,
                  width: SMALL_SIDE,
                  height: LARGE_SIDE,
                  colorClass: 'cell-color-top',
                  group: 2,
            },




            {
                  index: 40,
                  top: 650-SMALL_SIDE*3,
                  left: 650-SMALL_SIDE*2,
                  width: LARGE_SIDE,
                  height: SMALL_SIDE,
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
