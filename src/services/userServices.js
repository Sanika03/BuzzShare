import axios from "axios";

export const getAllUserService = () => {
  return axios.get("/api/users");
};

export const updateProfileService = ({ editInput, token }) => {
  return axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: token } }
  );
};

export const getBookmarkService = (token) => {
  return axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};

export const addBookmarkService = ({ token, _id }) => {
  return axios.post(
    `/api/users/bookmark/${_id}`,
    {},
    { headers: { authorization: token } }
  );
};

export const removeBookmarkService = ({ token, _id }) => {
  return axios.post(
    `/api/users/remove-bookmark/${_id}`,
    {},
    { headers: { authorization: token } }
  );
};

export const followUserService = ({ token, followUserId }) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const unfollowUserService = ({ token, followUserId }) => {
  return axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
