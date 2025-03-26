"use client";

import React, { useState } from "react";

const PublishPage = ({
  type,
  handleThumbnailUpload,
  handleAddTopic,
  thumbnail,
  topics,
  topicInput,
  handlePublish,
  setTopicInput
}:{
  type: string,
  handleThumbnailUpload: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleAddTopic: () => void,
  thumbnail: File | string | null,
  topics: Array<string>,
  topicInput: string,
  handlePublish: () => void,
  setTopicInput: React.Dispatch<React.SetStateAction<string>>
}) => {

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-1/2 h-1/3 flex gap-4">
        {/* Left Column: Story Preview */}
        <section className="w-1/2 p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Story Preview</h2>
          <p className="text-gray-600 mb-2">
            Include a high-quality image in your {type} to make it more inviting to
            readers.
          </p>

          {/* Thumbnail Upload & Preview */}
          <div className="mb-4">
            <label className="block mb-2 font-medium" htmlFor="thumbnailInput">
              Upload Thumbnail
            </label>
            <input
              id="thumbnailInput"
              type="file"
              accept="image/*"
              onChange={handleThumbnailUpload}
              className="block w-full text-sm text-gray-900
                        border border-gray-300 rounded cursor-pointer
                        bg-gray-50 focus:outline-none h-7"
            />
          </div>

          {/* Preview Box */}
          <div
            className="border border-gray-300 rounded flex items-center justify-center
                      h-48 mb-4 bg-gray-50"
          >
            {thumbnail ? (
              <img
                src=""
                alt="Thumbnail Preview"
                className="max-h-full max-w-full object-cover"
              />
            ) : (
              <span className="text-gray-500">No thumbnail uploaded</span>
            )}
          </div>

          <p className="text-sm text-gray-500">
            <strong>Note:</strong> Changes here will affect how your {type} appears
            in public places like eMOTIONSs&apos; homepage and in subscribers’
            inboxes — not the contents of the {type} itself.
          </p>
        </section>

        {/* Right Column: Publishing Details */}
        <section className="w-1/2 pt-14 flex flex-col justify-between">
          <div>
            <label
              htmlFor="topicInput"
              className="block font-medium mb-2"
            >
              Add or change topics (up to 5) so readers know what your {type} is about:
            </label>
            <div className="flex gap-2 mb-4">
              <input
                id="topicInput"
                type="text"
                placeholder="Add a topic..."
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded"
              />
              <button
                onClick={handleAddTopic}
                className={`w-32 px-4 py-2 rounded ${topics.length == 5 ? "bg-gray-100 cursor-not-allowed hover:bg-gray-200 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
              >
                Add
              </button>
            </div>
            {/* List of topics */}
            <div className="flex gap-4 ml-6 mb-4">
              {topics.map((t, i) => (
                <p className="rounded-full py-2 px-6 bg-gray-200" key={i}>{t}</p>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-4 self-end">
            <button
              onClick={handlePublish}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Publish now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}


export default PublishPage;