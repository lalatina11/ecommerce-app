"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const ProfileCompletionsProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(33), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex text-sm gap-2 flex-col">
      <Progress value={progress} max={100} />

      <span className="">Completed {progress}%</span>
    </div>
  );
};

export default ProfileCompletionsProgress;
