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





////////////////////////////Coding Challenge #2 //////////////////////////////

/*
Let's continue with our football betting app!

1.Loop over the game.secored array and print each player name to the console, along with the goal number (Example: "Goal 1: Arbaaz")

2.Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go back check if you don't remember).

3.Print the 3 odds to the console, but in a nice formatted way ,exaclty like this:
        Odd of victory Arbaz: 1.33
        Odd of draw:3.25
        Odd of victory Laxman:6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").

HINT:Note how the odds and the game objects have the same property names😉

BONUS: Create an object called "scorers" which contains the name of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
        {
            Lokesh:1,
            Ayush:1,
            Mukul:2,
        }

    GOOD LUCK😄    
*/

console.log('-------------------------------- CODING CHALLENGE 2 --------------------------------------------');
// 1.
for(const [i, name] of game.scored.entries()) console.log( `Goal ${i+1}: ${name}`);



//  2.
const odds=Object.values(game.odds);
let average=0;
for (const odd of odds){
    average+=odd;
    console.log(odd);
}
average/=odds.length;
console.log('Avg: ',average);
 

// 3.
for(const [team , odd] of Object.entries(game.odds)){
    // console.log('Team: ',team,'  Score: ',odd);
    const teamStr= team =='x'?'draw':`victory ${game[team]}`;

console.log(`Odd of ${teamStr} ${odd}`); 

}

