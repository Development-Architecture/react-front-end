import service from "./service";

export default {
  userList() {
    return service({
      url: 'users',
      method: "GET",
    });
  }
}
  