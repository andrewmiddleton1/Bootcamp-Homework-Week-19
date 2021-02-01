/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API

export default {
  getEmployeeByName: function (name) {
    return axios.get("https://randomuser.me/api/?name=" + name);
  },

};
