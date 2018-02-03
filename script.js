$(document).ready(function() {
    const apple = {
        "apple": {
            "strokepath": [
                {
                    "path": "M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796",
                    "duration": 1300
                }
            ],
            "dimensions": {
                "width": 128,
                "height": 128
            }
        },
        "windows" : {

                "strokepath": [
                    {
                        "path": "M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zM58.467 67.389l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z",
                        "duration": 600
                    }
                ],
                "dimensions": {
                    "width": 128,
                    "height": 128
                }

        },
    };
    let draw = false;
    let win = false;
    let turn = ['apple' , '#0029e0'];
    let turnNo = 0;
    $('td').on('click', function() {

        if (turn[0] === 'apple' && $.isNumeric(this.id) && !win) {
            turn[0] = 'windows';
            turn[1] = '#e00700';
            drawShape(this, turn);
            $(this).attr('id' , 'x');
            $('.gameText').attr('id' , 'blue').text("Player Two Turn");
            setTimeout(winCheck(), 1000);

        } else if (turn[0] === 'windows' && $.isNumeric(this.id) && !win) {
            turn[0] = 'apple';
            turn[1] = '#0029e0';
            drawShape(this, turn);
            $(this).attr('id' , 'o');
            $('.gameText').attr('id' , 'red').text("Player One Turn");
            setTimeout(winCheck(), 1000);
        }
        if (win && !draw) {
            $('.gameText').css('color' , 'green').text(turn[0] + " wins!");
        } else if (draw) {
            $('.gameText').css('color' , 'black').text("Its a draw..");
        }
    });
    function drawShape(e , turn) {
        turnNo++;
        $(e).attr('id',turn[0]).lazylinepainter(
            {
                "svgData": apple,
                "strokeWidth": 2,
                "strokeColor": turn[1]
            }).lazylinepainter('paint');

    };
    function winCheck() {

        $cells = $('td');
        if ($cells[0].id === $cells[1].id && $cells[1].id === $cells[2].id) {
            win = true;
        } else if ($cells[3].id === $cells[4].id && $cells[4].id === $cells[5].id) {
            win = true;
        } else if ($cells[6].id === $cells[7].id && $cells[7].id === $cells[8].id) {
            win = true;
        } else if ($cells[0].id === $cells[3].id && $cells[3].id === $cells[6].id) {
            win = true;
        } else if ($cells[1].id === $cells[4].id && $cells[4].id === $cells[7].id) {
            win = true;
        } else if ($cells[2].id === $cells[5].id && $cells[5].id === $cells[8].id) {
            win = true;
        } else if ($cells[0].id === $cells[4].id && $cells[4].id === $cells[8].id) {
            win = true;
        } else if ($cells[2].id === $cells[4].id && $cells[4].id === $cells[6].id) {
            win = true;
        } else if (turnNo === 9) {
            win = true;
            draw = true;
        }

    }
});