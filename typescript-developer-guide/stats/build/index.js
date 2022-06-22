"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const data = fs_1.default.readFileSync("football.csv", {
    encoding: "utf-8",
});
const matches = data.split("\n").map((v) => v.split(","));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
MatchResult.Draw === "D";
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
        manUnitedWins++;
}
console.log("man winss!", manUnitedWins);
