class Student{
    id;
    name;
    mathScore;
    physicalScore;
    englishScore;
    averageScore;
    rank;
    constructor(inputId, inputName, inputMathScore, inputPhysicalScore, inputEnglishScore, inputAverage, inputRank) {
        this.id = inputId;
        this.name = inputName;
        this.mathScore = inputMathScore;
        this.physicalScore = inputPhysicalScore;
        this.englishScore = inputEnglishScore;
        this.averageScore = inputAverage;
        this.rank = inputRank;
    }
}