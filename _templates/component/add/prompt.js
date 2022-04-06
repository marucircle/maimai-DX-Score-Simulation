module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "コンポーネント名は何?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { name } = answers;
      return { name };
    });
  },
};
