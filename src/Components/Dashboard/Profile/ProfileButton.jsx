
const ProfileButton = ({ isEditing, setIsEditing, isSubmitting }) => {

  return (
    <div className='flex justify-center pt-4'>
      {
        isEditing ? (
          <div>
              <button
              type='submit'
              className='btn btn-primary px-8'
              onClick={() => setIsEditing(true)}
              disabled={isSubmitting}
            >
              {
                isSubmitting ? ("Saving...") : ("Save Changes")
              }
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="btn btn-outline ml-3"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type='button'
            className='btn btn-primary px-8'
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )
      }
    </div>
  );
};

export default ProfileButton;