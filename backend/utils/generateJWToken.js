import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "15d",
  });

  res.cookie("jwtToken", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //milliseconds
    httpOnly: true, // to prevent XSS attacks cross site scripting attacks
    sameSite: "strict", // to prevent CSRF attacks cross site request forgery
    secure: process.env.NODE_ENV !== "development",
  });
};

// as
export default createTokenAndSaveCookie;
