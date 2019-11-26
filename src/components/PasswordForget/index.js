import { withFirebase } from "../Firebase"
import PasswordForgetLink from "./PasswordForgetLink"
import PasswordForgetFormBase from "./PasswordForgetFormBase"
import PasswordForgetPage from "./PasswordForgetPage"

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)
export default PasswordForgetPage

export { PasswordForgetForm, PasswordForgetLink }
