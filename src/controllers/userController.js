export const join = (req, res) => res.render("join", { pageTitle: "Login" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("See User");
