import axios from "axios";

export const getAllInbox = async () => {
  return await axios.get(`https://private-d031dca-simplequicks.apiary-mock.com/inbox`);
};

export const getAllTask = async () => {
  return await axios.get(`https://private-d031dca-simplequicks.apiary-mock.com/task`);
};
