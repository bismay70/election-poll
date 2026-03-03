import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getCandidateProfile } from "../candidateApi";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getCandidateProfile();
        setProfile(data);
      } catch (err) {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="mt-20 text-center text-gray-500">Loading profile...</div>;
  }

  if (!profile) {
    return <div className="mt-20 text-center text-red-500">Profile not found</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          My Profile
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your personal information
        </p>
      </div>

      <div className="bg-white shadow rounded-2xl p-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
             <img
            src="/images/user.jpg"
            alt="Candidate"
            className="w-full h-full object-cover"
          />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {profile.name}
            </h2>
            <p className="text-gray-500">Candidate</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <div className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
              {profile.name}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <div className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
              {profile.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Party
            </label>
            <div className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
              {profile.party || "—"}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Constituency
            </label>
            <div className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
              {profile.constituency || "—"}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Election Symbol
            </label>
            <div className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
              {profile.symbol || "—"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;