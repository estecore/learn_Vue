const App = {
  data() {
    return {
      totalScore: 0,
      overallRating: 0,
      text: [
        "1. Sooner or later you will hear from someone that you are talented",
        "2. You look younger than your age",
        "3. You'll have a great time on your next holiday",
        "4. Suddenly you will receive a decent amount of money and you will be able to spend it only on yourself",
        "5. At least one of your dreams will certainly come true",
        "6. Good relations will remain in the family",
        "7. Finally, a friend with whom you have long lost touch will arrive",
        "8. Your achievements will cause everyone's admiration",
      ],
      values: Array(6).fill(50),
    };
  },

  computed: {
    computedTotalScore() {
      this.totalScore = 0;
      for (let i = 0; i < this.values.length; i++) {
        this.totalScore += this.values[i];
      }

      return this.totalScore;
    },

    computedOverallRating() {
      this.overallRating = Math.floor(this.totalScore / this.values.length);
      return this.overallRating;
    },

    myLuckLevel() {
      if (this.overallRating > 80) {
        return { type: "lucky", style: "green", char: "😎" };
      } else if (this.overallRating > 45) {
        return { type: "neutral", style: "gray", char: "😐" };
      } else {
        return { type: "unlucky", style: "red", char: "😔" };
      }
    },
  },
};

Vue.createApp(App).mount("#app2");
