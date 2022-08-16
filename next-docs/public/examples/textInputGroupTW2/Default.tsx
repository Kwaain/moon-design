import React from 'react';
import { TextInput } from '@heathmont/moon-headless';

const Example = ({}) => {
  return (
    <TextInput>
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <TextInput.Label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            Name
          </TextInput.Label>
          <TextInput.Input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Jane Smith"
          />
        </div>

        <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <TextInput.Label
            htmlFor="job-title"
            className="block text-xs font-medium text-gray-900"
          >
            Job Title
          </TextInput.Label>
          <TextInput.Input
            type="text"
            name="job-title"
            id="job-title"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Head of Tomfoolery"
          />
        </div>
      </div>
    </TextInput>
  );
};

export default Example;
