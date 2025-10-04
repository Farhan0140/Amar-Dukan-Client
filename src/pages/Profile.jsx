import { useForm } from "react-hook-form";
import ProfileForm from "../Components/Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileButton from "../Components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../Components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../Hooks/useAuthContext";


const Profile = () => {

  const {user, updateUserProfile, changePassword} = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors, isSubmitting},
  } = useForm();

  useEffect(() => {
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  }, [user, setValue])

  const onSubmit = async (data) => {
    try {
      // For Profile 
      const profilePayload = {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
        address: data.address,
      }

      let res = await updateUserProfile(profilePayload);
      setIsEditing(false);

      if (res.success) {
        setSuccessMsg(res.message);
      } else {
        setErrorMsg(res.message);
      }

      // For Password 
      if ( data.new_password && data.current_password ) {
        res = await changePassword(data);

        if (res.success) {
          setSuccessMsg(res.message);
        } else {
          setErrorMsg(res.message);
        }
      }
    } catch ( error ) {
      console.log(error);
    }
  }

  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        {
          successMsg && (
            <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{successMsg}</span>
            </div>
          )
        }
        {
          errorMsg && (
            <div role="alert" className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{errorMsg}</span>
            </div>
          )
        }
        <h2 className="card-title text-2xl mb-4">
          Profile Information
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileForm register={register} errors={errors} isEditing={isEditing} />
          <PasswordChangeForm register={register} errors={errors} watch={watch} isEditing={isEditing} />
          <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
};

export default Profile;