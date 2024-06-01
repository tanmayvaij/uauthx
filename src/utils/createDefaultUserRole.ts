import { UserRole } from "../models";

export const createDefaultUserRole = async () => {
  try {
    const defaultRoleExists = await UserRole.findOne({
      role: "user",
    });

    if (defaultRoleExists) {
      console.log("Default role 'user' already exists");
    } else {
      const createdDefaultUserRole = await UserRole.create({ role: "user" });

      console.log(`Created default user role '${createdDefaultUserRole.role}'`);
    }
  } catch (error) {
    console.log(error);
  }
};
