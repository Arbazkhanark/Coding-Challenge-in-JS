////////////////////////////////////////////////////////////////////
//Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1.Create one player array for each team (variables 'players1' and 'players2')

2.The first player in array player is the goalkeeper and the others are field players. For Arbaz (team 1) create one variable ('gk') with the goalKeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.

3.Create an array 'allPlayers' containing all players of both team (22 players)

4.During the game, Arbaz (team 1) used 3 subsititute players. So create a new array ('players1Final') containing all the original team1 players plus 'Jamshed', 'Kulbir' and 'Naman'.

5.Based on the game.odds object, create one variable for each odd(called 'team1','draw' and 'team2').


6.Write a function ('printGoals') that receives an arbitrary number of player names (NOT an Array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Aman', 'Mukul', 'Jai' and 'Sonu'. Then, call the function again with players from game.scored.

GOOD LUCK😄
*/


const game={
    team1:'Arbaz',
    team2:'Laxman',
    players:[
        [
            'Arbaz',
            'Souarbh',
            'Ayush',
            'Kartik',
            'Deepak',
            'Lokesh',
            'Ashfaq',
            'Chayank',
            'Vickey',
            'Krish',
        ],
        [
            'Laxman',
            'Sonu',
            'Mukul',
            'Aman',
            'Rahul',
            'Irshad',
            'Chirag',
            'Prasoon',
            'Jai',
            'Jyot',
        ],
    ],
    score:'4:0',
    scored: ['Chirag','Lokesh','Rahul','Arbaz'],
    date:'Nov 9th, 2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};

//  1.
const [players1,players2]=game.players;
console.log(players1);
console.log(players2);

// 2.
const [team1Goal, ...fieldPlayers1]=[...players1];
const [team2Goal, ...fieldPlayers2]=[...players2];
console.log('Goal Keeper: ',team1Goal);
console.log('fieldPlayers1: ',fieldPlayers1);
console.log('Goal Keeper: ',team2Goal);
console.log('fieldPlayers2: ',fieldPlayers2);


const [...gk]=[team1Goal, team2Goal];
console.log("Goal Keepers: ", gk);

// 3.
const [...allPlayers]=[players1,players2];
console.log('All players: ',allPlayers);

// 4.
const [...players1Final]=[...players1,'Jamshed','Kulbir','Naman'];
console.log('players1Final: ',players1Final);

// 5.
const {odds:{team1,x:draw,team2}}=game;
console.log(team1,draw,team2);

//6.
const printGoals=function(...players){
    console.log(players);
    console.log(`${players.length} goals were scored`)
}

printGoals(game.scored);
// printGoals('Chirag','Lokesh','Rahul','Arbaz');
// printGoals('Arbaz','Aman');


// 7.
team1<team2 && console.log('Team 1 is more likely to win');
team1>team2 && console.log('Team 2 is more likely to win');


/////////////////Challenge Completed ///////////////////////////////////////


