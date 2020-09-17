import { types, flow } from "mobx-state-tree";
import login from "services/api/login";

const LoginStore = types
  .model({
    token: types.maybe(types.string),
    state: types.enumeration("State", ["pending", "done", "error"]),
  })
  .views((self) => ({
  }))
  .actions((self) => ({
    signin: flow(function* signin(formData) {
      try {
        const res = yield login.signin(formData);
        self.token = res.data.access_token;
        self.state = "done";
      } catch (error) {
        console.error(error);
        self.state = "error";
      }
    }),
  }));

export default LoginStore;