import {
  requiredObjectValidation,
  requiredValidation,
} from "@/utils/library/validate";

const validation = [
  requiredValidation("quizId", "QuizId")
    .isMongoId()
    .withMessage("Not a valid QuizId"),
  requiredObjectValidation("patch", "Patch").withMessage(
    "Patch must be an object having at least one key"
  ),
];

const publishValidation = [requiredValidation("quizId", "QuizId")];
export { validation as updateQuizValidation, publishValidation };
