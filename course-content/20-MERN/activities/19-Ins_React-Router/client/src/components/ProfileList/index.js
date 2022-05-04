import React from 'react';
// Import Link component for all internal application hyperlinks
// 🔑 Links are a React Router component that allow us to navigate around our app using a hyperlink.
// To use a link, we first have to import the component:
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.skills ? profile.skills.length : 0}{' '}
                    endorsed skill
                    {profile.skills && profile.skills.length === 1 ? '' : 's'}
                  </span>
                </h4>

                {/* Use <Link> component to create an internal hyperlink reference. Use `to` prop to set the path instead of `href` */}
                {/* 🔑 Then, we create the link inside the .map() function and give it a path to an existing route using to. We use ${profile._id} to assign the route's parameter to the id of our current tech friend: */}
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
