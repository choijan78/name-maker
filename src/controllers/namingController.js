export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const pet = (req, res) => res.send("Pet");
export const baby = (req, res) => res.send("Baby");
export const alias = (req, res) => res.send("Nickname");
