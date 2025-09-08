import React from "react";
import { useTranslation } from "react-i18next";

function VideoTutorial() {
  const { t } = useTranslation();
  
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{t("videoTutorial")}</h2>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/IpRU-YLq4aI"
        title="Tutorial"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoTutorial;
