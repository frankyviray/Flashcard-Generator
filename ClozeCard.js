function ClozeCard(text, cloze) {
    this.partial = text;
    this.cloze = cloze;
    this.fullText = function () {
        var part2 = text.split(".").splice(3, 1)
        var full = cloze + " " + part2
        return full
    }
        ;


}
module.exports = ClozeCard;