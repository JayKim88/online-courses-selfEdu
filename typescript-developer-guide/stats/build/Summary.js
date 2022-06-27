"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        console.log(output);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
