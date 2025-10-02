import { useForm } from "react-hook-form";
import ProfileForm from "../Components/Dashboard/Profile/ProfileForm";
import { useState } from "react";
import ProfileButton from "../Components/Dashboard/Profile/ProfileButton";
import PasswordChangeForm from "../Components/Dashboard/Profile/PasswordChangeForm";


const Profile = () => {

  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    watch,
    formState: {errors},
  } = useForm();

  return (
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">
          Profile Information
        </h2>


        <ProfileForm register={register} errors={errors} isEditing={isEditing} />
        <PasswordChangeForm register={register} errors={errors} watch={watch} isEditing={isEditing} />
        <ProfileButton isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>
    </div>
  );
};

export default Profile;