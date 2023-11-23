import {
  requiredObjectValidation,
  requiredValidation,
} from "@/utils/library/validate";

const validation = [
  requiredValidation("quizId", "Quiz Id")
    .isMongoId()
    .withMessage("Not a valid quiz id"),
  requiredObjectValidation("patch", "Patch"),
];

export { validation as updateQuizValidation };
