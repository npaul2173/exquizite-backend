import {
  requiredObjectValidation,
  requiredValidation,
} from "@/utils/library/validate";

const validation = [
  requiredValidation("quizId", "Quiz Id")
    .isMongoId()
    .withMessage("Not a valid quiz id"),
  requiredObjectValidation("patch", "Patch").withMessage(
    "Patch must be an object having at least one key"
  ),
];

export { validation as updateQuizValidation };
