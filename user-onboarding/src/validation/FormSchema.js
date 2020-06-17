import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
      .string()
      .min(3, "Usermame must be at least 3 characters long.")
      .required("Please enter a valid name."),
      email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup
      .string()
      .min(8, "Passwords must contain at least 8 characters."),
    terms: Yup
      .boolean()
      .oneOf([true], "Please accept The Terms of Service."),
  })
  
  export default formSchema