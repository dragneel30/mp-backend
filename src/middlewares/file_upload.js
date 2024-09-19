const fileValidation = (req, res, next) => {
  if (req.file) {
    req.body.filename = req.file.filename;
  }
  next();
};

export default fileValidation;
