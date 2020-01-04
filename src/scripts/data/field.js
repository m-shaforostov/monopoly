const SMALL_SIDE = '50';
const LARGE_SIDE = '100';
const COLORS = ['white', '#b400ff', 'lightblue', 'magenta', 'orange', 'red', 'lightgreen', 'green', 'blue'];

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
                  lane: 'bottom',
                  price: 40,
            },
            {
                  index: 3,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 4,
                  colorClass: 'cell-color-top',
                  group: 1,
                  lane: 'bottom',
                  price: 60,
            },
            {
                  index: 5,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 6,
                  colorClass: 'cell-color-top',
                  group: 0,
                  lane: 'bottom',
                  price: 200,
            },
            {
                  index: 7,
                  colorClass: 'cell-color-top',
                  group: 2,
                  lane: 'bottom',
                  price: 100,
            },
            {
                  index: 8,
                  colorClass: 'cell-color-top',
                  group: 2,
                  lane: 'bottom',
                  price: 110,
            },
            {
                  index: 9,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 10,
                  colorClass: 'cell-color-top',
                  group: 2,
                  lane: 'bottom',
                  price: 120,
            },
            {
                  index: 11,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 12,
                  colorClass: 'cell-color-right',
                  group: 3,
                  lane: 'left',
                  price: 140,
            },
            {
                  index: 13,
                  colorClass: 'cell-color-right',
                  group: 0,
                  lane: 'left',
                  price: 150,
            },
            {
                  index: 14,
                  colorClass: 'cell-color-right',
                  group: 3,
                  lane: 'left',
                  price: 150,
            },
            {
                  index: 15,
                  colorClass: 'cell-color-right',
                  group: 3,
                  lane: 'left',
                  price: 160,
            },
            {
                  index: 16,
                  colorClass: 'cell-color-right',
                  group: 0,
                  lane: 'left',
                  price: 200,
            },
            {
                  index: 17,
                  colorClass: 'cell-color-right',
                  group: 4,
                  lane: 'left',
                  price: 180,
            },
            {
                  index: 18,
                  colorClass: 'cell-color-right',
                  group: 0,
            },
            {
                  index: 19,
                  colorClass: 'cell-color-right',
                  group: 4,
                  lane: 'left',
                  price: 190,
            },
            {
                  index: 20,
                  colorClass: 'cell-color-right',
                  group: 4,
                  lane: 'left',
                  price: 200,
            },
            {
                  index: 21,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 22,
                  colorClass: 'cell-color-bottom',
                  group: 5,
                  lane: 'top',
                  price: 220,
            },
            {
                  index: 23,
                  colorClass: 'cell-color-bottom',
                  group: 0,
            },
            {
                  index: 24,
                  colorClass: 'cell-color-bottom',
                  group: 5,
                  lane: 'top',
                  price: 230,
            },
            {
                  index: 25,
                  colorClass: 'cell-color-bottom',
                  group: 5,
                  lane: 'top',
                  price: 240,
            },
            {
                  index: 26,
                  colorClass: 'cell-color-bottom',
                  group: 0,
                  lane: 'top',
                  price: 200,
            },
            {
                  index: 27,
                  colorClass: 'cell-color-bottom',
                  group: 6,
                  lane: 'top',
                  price: 260,
            },
            {
                  index: 28,
                  colorClass: 'cell-color-bottom',
                  group: 6,
                  lane: 'top',
                  price: 270,
            },
            {
                  index: 29,
                  colorClass: 'cell-color-bottom',
                  group: 0,
                  lane: 'top',
                  price: 150,
            },
            {
                  index: 30,
                  colorClass: 'cell-color-bottom',
                  group: 6,
                  lane: 'top',
                  price: 280,
            },
            {
                  index: 31,
                  colorClass: 'cell-color-top',
                  group: 0,
            },
            {
                  index: 32,
                  colorClass: 'cell-color-left',
                  group: 7,
                  lane: 'right',
                  price: 300
            },
            {
                  index: 33,
                  colorClass: 'cell-color-left',
                  group: 0,
            },
            {
                  index: 34,
                  colorClass: 'cell-color-left',
                  group: 7,
                  lane: 'right',
                  price: 310,
            },
            {
                  index: 35,
                  colorClass: 'cell-color-left',
                  group: 7,
                  lane: 'right',
                  price: 320,
            },
            {
                  index: 36,
                  colorClass: 'cell-color-left',
                  group: 0,
                  lane: 'right',
                  price: 200,
            },
            {
                  index: 37,
                  colorClass: 'cell-color-left',
                  group: 0,
            },
            {
                  index: 38,
                  colorClass: 'cell-color-left',
                  group: 8,
                  lane: 'right',
                  price: 350,
            },
            {
                  index: 39,
                  colorClass: 'cell-color-left',
                  group: 0,
            },
            {
                  index: 40,
                  colorClass: 'cell-color-left',
                  group: 8,
                  lane: 'right',
                  price: 400,
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
