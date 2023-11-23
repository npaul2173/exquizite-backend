import {
  optionalValidation,
  requiredValidation,
} from "@/utils/library/validate";

const validation = [
  requiredValidation("title", "Title").isLength({ min: 1 }),
  requiredValidation("topic", "Topic").isLength({ min: 1 }),
  requiredValidation("quizId", "Quiz Id")
    .isMongoId()
    .withMessage("Not a valid quiz id"),
  optionalValidation("duration")
    .isNumeric()
    .withMessage("Duration must be a number"),
];

export { validation as updateQuizValidation };
