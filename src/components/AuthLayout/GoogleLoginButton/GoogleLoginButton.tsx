import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/hooks";
import { googleLogin } from "@/redux/auth/operations";

const GoogleLoginButton = () => {
  const dispatch = useAppDispatch();

  const onSuccess = async (resp: CredentialResponse) => {
    try {
      if (!resp.credential) throw new Error("No credential returned");
      await dispatch(googleLogin({ idToken: resp.credential })).unwrap();
      toast.success("Logged in with Google");
    } catch (err: any) {
      toast.error(err.message || "Google login failed");
    }
  };

  const onError = () => {
    toast.error("Google login was cancelled");
  };

  return <GoogleLogin onSuccess={onSuccess} onError={onError} />;
};

export default GoogleLoginButton;
