import {
  requiredObjectValidation,
  requiredValidation,
} from "@/utils/library/validate";

const questionEditValidation = [
  requiredValidation("quizId", "QuizId")
    .isMongoId()
    .withMessage("Not a valid QuizId"),
  requiredObjectValidation("questionId", "QuestionId")
    .isMongoId()
    .withMessage("Not a valid QuestionId"),
  requiredObjectValidation("patch", "Patch").withMessage(
    "Patch must be an object having at least one key"
  ),
];

const deleteQuestionValidation = [
  requiredValidation("questionId", "QuestionId")
    .isMongoId()
    .withMessage("Not a valid QuestionId"),
];

export { questionEditValidation, deleteQuestionValidation };
