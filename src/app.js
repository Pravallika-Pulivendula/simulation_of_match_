var arr = ["Kirat Boli", "N.S Nodhi", "R Rumrah", "Sashi Henra"];
var players_name = ["Kirat Boli", "N.S Nodhi", "R Rumrah", "Sashi Henra"];
var players_scores = [0, 0, 0, 0];
var balls_played = [0, 0, 0, 0];
var p = new Map();
p.set("Kirat Boli", [0.05, 0.3, 0.25, 0.10, 0.15, 0.01, 0.09, 0.05]);
p.set("N.S Nodhi", [0.10, 0.40, 0.20, 0.05, 0.10, 0.01, 0.04, 0.10]);
p.set("R Rumrah", [0.20, 0.30, 0.15, 0.05, 0.05, 0.01, 0.04, 0.20]);
p.set("Sashi Henra", [0.30, 0.25, 0.05, 0.0, 0.05, 0.01, 0.04, 0.30]);
var not_out = new Map();
not_out.set("Kirat Boli", " ");
not_out.set("N.S Nodhi", " ");
not_out.set("R Rumrah", " ");
not_out.set("Sashi Henra", " ");
var current_player = arr[0], i = 0, score = 0, total = 40, current_player_index = 0, runs_for_over = 0;
//weighted random number generator that return the runs for each ball
function runs_generator(current_player) {
    var a = Math.random();
    var temp = p.get(current_player);
    var j = 1;
    var curr = temp[0];
    while (a > curr) {
        curr += temp[j];
        j = j + 1;
    }
    var runs = j - 1;
    return runs;
}
//updates the striker end
function update_strike_end() {
    var _a;
    _a = [arr[1], arr[0]], arr[0] = _a[0], arr[1] = _a[1];
    return arr[0];
}
//simulates the match, ball by ball for the last 4 overs
function simulate() {
    var _a;
    for (var o = 4; o > 0; o--) {
        if (arr.length < 1 || score > 40) {
            break;
        }
        total -= runs_for_over;
        if (total <= 0) {
            break;
        }
        runs_for_over = 0;
        console.log(o + " overs left. " + total + " runs to win");
        for (var b = 6; b > 0; b--) {
            var curr_score = 0;
            if (arr.length > 1)
                curr_score = runs_generator(current_player);
            var index = players_name.indexOf(current_player);
            if (curr_score !== 7)
                players_scores[index] += curr_score;
            balls_played[index] += 1;
            if (arr.length <= 1) {
                break;
            }
            if (arr.length > 1) {
                //updating with the new player at the same position, when the old player is out.
                if (curr_score === 7) {
                    var index_1 = arr.indexOf(current_player);
                    console.log(Math.abs(o - 4) + "." + Math.abs(b - 7) + " " + current_player + " is out.");
                    var temp = index_1;
                    arr.splice(index_1, 1);
                    if (temp === 0 && arr.length > 1) {
                        _a = [arr[1], arr[0]], arr[0] = _a[0], arr[1] = _a[1];
                    }
                    current_player = arr[0];
                    curr_score = 0;
                }
                else {
                    var runs = void 0;
                    if (curr_score === 1) {
                        runs = " run";
                    }
                    else
                        runs = " runs";
                    console.log(Math.abs(o - 4) + "." + Math.abs(b - 7) + " " + current_player + " scores " + curr_score + runs);
                }
            }
            runs_for_over += curr_score;
            if (total - runs_for_over <= 0) {
                break;
            }
            if (arr.length > 1) {
                //changing the strike end if the runs are 1,3,5
                if (curr_score === 1 || curr_score === 3 || curr_score === 5) {
                    current_player = update_strike_end();
                }
            }
            if (arr.length <= 1) {
                break;
            }
            score += curr_score;
        }
        if (arr.length <= 1 || total - runs_for_over <= 0) {
            break;
        }
        current_player = update_strike_end();
        console.log();
    }
}
//displays the score board
function scoreBoard() {
    var s = balls_played.reduce(function (a, b) { return a + b; }, 0);
    if (total <= 0) {
        console.log("\nBengaluru won by " + (arr.length - 1) + " wickets and " + (24 - s) + " balls remaining");
        for (var k = 0; k < 4; k++) {
            if (balls_played[k])
                console.log(players_name[k] + " - " + players_scores[k] + not_out_arr[k] + " (" + balls_played[k] + " balls)");
        }
    }
    else if (total === 1) {
        console.log("\nIt's a draw.");
        for (var k = 0; k < 4; k++) {
            if (balls_played[k])
                console.log(players_name[k] + " - " + players_scores[k] + not_out_arr[k] + " (" + balls_played[k] + " balls)");
        }
    }
    else {
        console.log("\nBengaluru team lost by " + total + " runs");
        for (var k = 0; k < 4; k++) {
            if (balls_played[k])
                console.log(players_name[k] + " - " + players_scores[k] + not_out_arr[k] + " (" + balls_played[k] + " balls)");
        }
    }
}
simulate();
total -= runs_for_over;
var not_out_arr = [];
//marking not out players with '*'
function not_out_players() {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var c = arr_1[_i];
        not_out.set(c, "*");
    }
    not_out.forEach(function (value, key) {
        not_out_arr.push(value);
    });
}
not_out_players();
scoreBoard();
