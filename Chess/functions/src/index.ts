import * as functions from "firebase-functions";
import * as admins from "firebase-admin";

admins.initializeApp(functions.config().firebase);

let database = admins.database();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.matchmaker = functions.database.ref("matchmaking/{playerId}").onCreate((snap, context) => {
  let gameId = generateGameId();
  let secondPlayer: any = null;
  database
    .ref("matchmaking")
    .once("value")
    .then((players) => {
      players.forEach((player) => {
        if (player.val() === "placeholder" && player.key !== context.params.playerId) {
          secondPlayer = player;
        }
      });

      if (secondPlayer === null) return null;

      database
        .ref("matchmaking")
        .transaction(function (matchmaking) {
          if (matchmaking === null || matchmaking[context.params.playerId] !== "placeholder" || matchmaking[secondPlayer.key] !== "placeholder") return matchmaking;

          matchmaking[context.params.playerId] = gameId;
          matchmaking[secondPlayer.key] = gameId;
          return matchmaking;
        })
        .then((result) => {
          if (result.snapshot.child(context.params.playerId).val() !== gameId) return;

          var game = {
            gameInfo: {
              gameId: gameId,
              playersIds: [context.params.playerId, secondPlayer.key],
            },
            turn: context.params.playerId,
          };

          database
            .ref("games/" + gameId)
            .set(game)
            .then((snapshot) => {
              console.log("Game created success fully " + game);
              return null;
            })
            .catch((error) => {
              console.log(error);
            });

          return null;
        })
        .catch((error) => {
          console.log(error);
        });
      return null;
    })
    .catch((error) => {
      console.log(error);
    });
});

function generateGameId() {
  var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gameId = "";
  for (var j = 0; j < 20; j++) gameId += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  return gameId;
}
