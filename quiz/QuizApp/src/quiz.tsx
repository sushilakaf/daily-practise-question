export const quiz = {
  topic: "javascript",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "How can a datatype be declared to be a constant type?",
      choice: ["let", "constant", "const", "var"],
      type: "MCQs",
      correctAnswer: "const",
    },
    {
      question:
        "What keyword is used to check whether a given property is valid or not?",
      choice: ["exists", "is in", "in", "lies"],
      type: "MCQs",
      correctAnswer: "in",
    },
    {
      question:
        "Which of the following methods can be used to display data in some form using Javascript?",
      choice: [
        "document.write()",
        "console.log()",
        "window.aleart",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "Javascript is an ________ language",
      choice: [
        "Object-Oriented",
        "Object-Based",
        "Procedural",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Object-Based",
    },
    {
      question:
        "Which of the following method is used to access HTML elements using Javascript?",
      choice: [
        "getElementbyId()",
        "getElementsByClassName()",
        "Both A and B",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "getElementbyId()",
    },
  ],
};
