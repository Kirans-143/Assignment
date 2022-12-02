const validateCreate = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Book is not available",
    });
  }
  next();
};
module.exports = { validateCreate };
