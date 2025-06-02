import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl p-6 flex flex-col justify-between h-full">
      <div>
        <h5 className="text-xl font-semibold text-white mb-3">{title}</h5>
        <p className="text-[#ADB7BE] mb-6">{description}</p>
      </div>
      <div className="flex gap-4">
        <Link
          href={gitUrl}
          className="flex items-center justify-center h-12 w-12 border-2 border-[#ADB7BE] rounded-full hover:border-white transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
        </Link>
        <Link
          href={previewUrl}
          className="flex items-center justify-center h-12 w-12 border-2 border-[#ADB7BE] rounded-full hover:border-white transition"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Preview"
        >
          <EyeIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
