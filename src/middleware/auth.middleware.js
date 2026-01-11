module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== "Bearer dummy-token-12345") {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  next(); // ← WAJIB ADA
};