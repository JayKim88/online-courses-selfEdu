import fs from "fs";

const data = fs.readFileSync("football.csv", {
  encoding: "utf-8",
});

const matches = data.split("\n").map((v: string): string[] => v.split(","));

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

MatchResult.Draw === "D";

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log("man winss!", manUnitedWins);
