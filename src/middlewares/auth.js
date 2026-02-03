export const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!!");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorised request");
  } else {
    next();
  }
};

export const userAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!!");
  const token = "abc";
  const isAdminAuthorized = token === "abc";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorised request");
  } else {
    next();
  }
};
