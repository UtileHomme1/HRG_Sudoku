var isValidSudoku = function(sudoku)
{
    //multi-dimensional array to check for each box, column and row for the occurrence of a particular number if repeated
    //like a hashMap

    //initially all are false / not-filled
    var individualBox = [[], [], [], [], [], [], [], [], []];
    var columns = [[], [], [], [], [], [], [], [], []];
    var rows = [[], [], [], [], [], [], [], [], []];


    for (var i = 0; i < 9; i++)
    {
        for (var j = 0; j < 9; j++)
        {
            var value = sudoku[i][j];

            //if the field of the soduku is filled
            if (value !== '.') {

                //this calculates the box number for the current row and column
                var boxNumber = Math.floor(j / 3) + (Math.floor(i / 3) * 3);

                //if the value at these places is already filled, this means that in either the box, row or column
                //the number is repeated. Therefore, return false
                if (individualBox[boxNumber][value] || columns[j][value] || rows[i][value]) {
                    return false;
                }

                //else set the value as true to check for next time
                individualBox[boxNumber][value] = columns[j][value] = rows[i][value] = true;
            }
        }
    }

    return true;
};

var sudoku = [
                [ '.', '.', '.', '.', '.', '.', '.', '6', '.' ],
                [ '.', '.', '7', '3', '.', '.', '9', '.', '.' ],
                [ '.', '.', '8', '9', '.', '.', '.', '.', '.' ],
                [ '.', '7', '1', '.', '.', '.', '.', '.', '.' ],
                [ '.', '.', '.', '.', '.', '.', '.', '.', '8' ],
                [ '8', '.', '.', '.', '5', '.', '6', '.', '4' ],
                [ '.', '1', '.', '2', '.', '.', '.', '9', '.' ],
                [ '2', '.', '.', '.', '.', '4', '.', '.', '.' ],
                [ '.', '6', '9', '.', '.', '.', '.', '7', '.' ]
            ];

var checkSudoku = isValidSudoku(sudoku);

document.write("Result for First soduku");

document.write("<br>");

document.write(checkSudoku);

document.write("<br>");

var sudoku = [
    [ '.', '.', '.', '.', '.', '.', '.', '6', '.' ],
    [ '.', '.', '7', '3', '.', '.', '9', '.', '.' ],
    [ '.', '.', '8', '9', '.', '.', '.', '.', '.' ],
    [ '.', '7', '1', '.', '.', '.', '.', '.', '.' ],
    [ '.', '.', '.', '.', '.', '.', '.', '.', '8' ],
    [ '8', '.', '.', '.', '5', '.', '6', '.', '4' ],
    [ '.', '1', '.', '2', '.', '.', '.', '9', '.' ],
    [ '2', '.', '.', '.', '.', '4', '.', '.', '.' ],
    [ '.', '6', '9', '.', '2', '.', '.', '7', '.' ]
];

var checkSudoku = isValidSudoku(sudoku);

document.write("Result for Second soduku");


document.write("<br>");

document.write(checkSudoku);


