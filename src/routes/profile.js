import { getProfile, updateProfile } from "../store/profile.js";

export default async function (app) {
  app.get("/profile/me", async (req, reply) => {
    const user = req.user;
    const profile = getProfile(user.id, user.email);
    return { profile };
  });

  app.put("/profile/me", async (req, reply) => {
    const user = req.user;
    const profile = updateProfile(user.id, req.body);
    return { profile };
  });
}
