
export const SIGNUP = "SIGNUP";


// signup user

export const signupuser = (detail) => {
  // console.log(detail, "user singup detail")
    

  return {
    type: SIGNUP,
    payload: detail,
  };
};