export const main = (req, res) => res.render("main", { pageTitle: "Main" });
export const animal = (req, res) =>
  res.render("animal", { pageTitle: "Get your pet's name" });
export const human = (req, res) =>
  res.render("human", { pageTitle: "Get your baby's name " });
export const alias = (req, res) =>
  res.render("nickname", { pageTitle: "Get your nickname" });
