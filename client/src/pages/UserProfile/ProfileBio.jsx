import React from "react";


const ProfileBio = ({ currentProfile }) => {    
  return (
    
        <div className="user-bio-section">
          <div className="user-tags">
            {currentProfile?.tags.length !== 0 ? (
              <>
                <h4>Tags watched</h4>
                {currentProfile?.tags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
              </>
            ) : (
              <span>0 tags watched</span>
            )}
          </div>
          <div className="user-bio">
            {currentProfile?.about ? (
              <>
                <h4>About</h4>
                <p>{currentProfile?.about}</p>
              </>
            ) : (
              <p>
                No bio found
              </p>
            )}
         </div>
         </div>
      )
};

export default ProfileBio;