import permissionData from "./mock/permissions.data.json";
import rolesJsonData from "./mock/roles.data.json";
import quizJsonData from "./mock/quiz.data.json";
import { PermissionModel } from "@/models/permission";
import { MetaDataModel } from "@/models/metadata";
import { RoleModel } from "@/models/role";
import { CreateQuizProps } from "@/models/quiz/interface";
import { CreateQuestionProps } from "@/models/question/type";
import { QuizModel } from "@/models/quiz";
import { QuestionModel } from "@/models/question";
import Logging from "@/utils/library/logging";

class DatabaseSeed {
  constructor() {}

  async initializeDatabaseModels() {
    const data = await MetaDataModel.findOne();

    if (!data) {
      Logging.warn(
        "Seeding started........................................🏁 "
      );
      // 1. Seeding the permissions collection
      const pmsCreated = await PermissionModel.insertMany(permissionData);

      // 2.  Seeding the default roles
      const rolesInputData = rolesJsonData.map((element) => {
        const permissions = element.except
          ? pmsCreated
              .filter(
                (item) => !element.except.some((ele) => item.name === ele)
              )
              .map((item) => item._id)
          : element.include.map(
              (item) => pmsCreated.find((pms) => pms.name === item)?._id
            );

        return { name: element.name, permissions };
      });
      const rolesCreated = await RoleModel.insertMany(rolesInputData);

      // Will be required soon
      const adminDocument = rolesCreated.find((item) => item.name === "ADMIN");

      // 3. Seeding quiz for faster test process
      const quizInputData = quizJsonData.map(
        (item) =>
          ({
            ...item.quiz,
            isPublished: false,
          } as CreateQuizProps)
      );
      // Quiz created
      const quizzesCreated = await QuizModel.insertMany(quizInputData);

      // 4. Seeding questions for faster test process
      const questionsInputData = quizzesCreated.reduce((acc, curr) => {
        const quizFound = quizJsonData.find(
          (item) => item.quiz.title === curr.title
        );
        const questionsNew =
          quizFound?.questions.map((question) => {
            return {
              ...question,
              quizId: curr._id.toString(),
            } as CreateQuestionProps;
          }) || [];
        return [...questionsNew, ...acc];
      }, [] as CreateQuestionProps[]);
      await QuestionModel.insertMany(questionsInputData);

      // Setting a flag point to ideate that seeding has been done throught the application
      await MetaDataModel.create({ initialized: true });
      Logging.success(
        "Seeding complete ✅....................................."
      );
    }
  }
}

export default DatabaseSeed;
