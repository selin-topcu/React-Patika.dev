import * as yup from "yup";
const validations = yup.object().shape({
  email: yup.string().email("Geçerli Mail Giriniz").required("Zorunlu Alan"),
  password: yup
    .string()
    .min(8, "Parolanız en az 8 karakter olmalıdır.")
    .required("Zorunlu Alan"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolanız uyuşmuyor")
    .required("Zorunlu Alan"),
});

export default validations;
