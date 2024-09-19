import multer from "multer";

const avatar = multer({ dest: "uploads/users/avatar/" });

const avatar_upload = avatar.single("avatar");

export { avatar_upload };
