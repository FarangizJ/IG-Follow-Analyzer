import React, { useState } from 'react';
import { Upload, Users, UserMinus, UserPlus, AlertCircle } from 'lucide-react';

export default function InstagramAnalyzer() {
  const [followersData, setFollowersData] = useState(null);
  const [followingData, setFollowingData] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('notFollowingBack');

  const parseJSON = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target.result);
          resolve(json);
        } catch (err) {
          reject(new Error('Invalid JSON file'));
        }
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  };

  const extractUsernames = (data) => {
    // Handle followers format (array)
    if (Array.isArray(data)) {
      return data.map(item => item.string_list_data[0].value);
    }
    // Handle following format (object with relationships_following)
    else if (data.relationships_following) {
      return data.relationships_following.map(item => {
        // For following, the title is the username
        return item.title;
      });
    }
    return [];
  };

  const handleFileUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setError('');
      const data = await parseJSON(file);
      
      if (type === 'followers') {
        setFollowersData(data);
      } else {
        setFollowingData(data);
      }
    } catch (err) {
      setError(`Error uploading ${type} file: ${err.message}`);
    }
  };

  const analyzeData = () => {
    if (!followersData || !followingData) {
      setError('Please upload both files');
      return;
    }

    const followers = extractUsernames(followersData);
    const following = extractUsernames(followingData);

    const followersSet = new Set(followers);
    const followingSet = new Set(following);

    const notFollowingBack = following.filter(user => !followersSet.has(user));
    const notFollowingYou = followers.filter(user => !followingSet.has(user));

    setResults({
      notFollowingBack,
      notFollowingYou,
      totalFollowers: followers.length,
      totalFollowing: following.length,
      mutualFollows: followers.filter(user => followingSet.has(user)).length
    });
  };

  React.useEffect(() => {
    if (followersData && followingData) {
      analyzeData();
    }
  }, [followersData, followingData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Users className="w-10 h-10 text-purple-600" />
            Instagram Follow Analyzer
          </h1>
          <p className="text-gray-600">Find who doesn't follow you back and who you don't follow back</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-purple-300 transition-all">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-purple-600" />
              Upload Followers
            </h2>
            <p className="text-sm text-gray-600 mb-4">Upload your followers_1.json file</p>
            <input
              type="file"
              accept=".json"
              onChange={(e) => handleFileUpload(e, 'followers')}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200 file:cursor-pointer cursor-pointer"
            />
            {followersData && (
              <div className="mt-3 text-sm text-green-600 font-medium">
                ✓ Followers file uploaded
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-pink-300 transition-all">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-pink-600" />
              Upload Following
            </h2>
            <p className="text-sm text-gray-600 mb-4">Upload your following.json file</p>
            <input
              type="file"
              accept=".json"
              onChange={(e) => handleFileUpload(e, 'following')}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 file:cursor-pointer cursor-pointer"
            />
            {followingData && (
              <div className="mt-3 text-sm text-green-600 font-medium">
                ✓ Following file uploaded
              </div>
            )}
          </div>
        </div>

        {results && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-700">{results.totalFollowers}</div>
                <div className="text-sm text-purple-600 mt-1">Followers</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-pink-700">{results.totalFollowing}</div>
                <div className="text-sm text-pink-600 mt-1">Following</div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-700">{results.mutualFollows}</div>
                <div className="text-sm text-green-600 mt-1">Mutual</div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-700">{results.notFollowingBack.length}</div>
                <div className="text-sm text-orange-600 mt-1">Not Following Back</div>
              </div>
            </div>
          </div>
        )}

        {results && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('notFollowingBack')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'notFollowingBack'
                    ? 'bg-orange-50 text-orange-700 border-b-2 border-orange-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <UserMinus className="w-5 h-5" />
                Not Following Back ({results.notFollowingBack.length})
              </button>
              <button
                onClick={() => setActiveTab('notFollowingYou')}
                className={`flex-1 py-4 px-6 font-semibold transition-colors flex items-center justify-center gap-2 ${
                  activeTab === 'notFollowingYou'
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <UserPlus className="w-5 h-5" />
                You Don't Follow ({results.notFollowingYou.length})
              </button>
            </div>

            <div className="p-6 max-h-96 overflow-y-auto">
              {activeTab === 'notFollowingBack' && (
                <div>
                  {results.notFollowingBack.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Everyone you follow follows you back! 🎉</p>
                  ) : (
                    <div className="space-y-2">
                      {results.notFollowingBack.map((username, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                          <span className="font-medium text-gray-800">@{username}</span>
                          <a
                            href={`https://www.instagram.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                          >
                            View Profile →
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'notFollowingYou' && (
                <div>
                  {results.notFollowingYou.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">You follow everyone who follows you! 🎉</p>
                  ) : (
                    <div className="space-y-2">
                      {results.notFollowingYou.map((username, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                          <span className="font-medium text-gray-800">@{username}</span>
                          <a
                            href={`https://www.instagram.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                          >
                            View Profile →
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">How to get your data:</h3>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Go to Instagram Settings → Your Activity → Download Your Information</li>
            <li>Request a download of your data in JSON format</li>
            <li>Wait for Instagram to prepare your data (can take a few days)</li>
            <li>Download and extract the files</li>
            <li>Upload followers_1.json and following.json here</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
