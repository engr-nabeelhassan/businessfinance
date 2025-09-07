import React from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScreenshotSlider from "./components/ScreenshotSlider";
import VideoTutorial from "./components/VideoTutorial";

function App() {
  const { t } = useTranslation();

  const handleDownload = () => {
    // Create a dummy 3MB file for testing
    const link = document.createElement('a');
    link.href = '/downloads/business-finance-setup.exe';
    link.download = 'business-finance-setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Logo with enhanced animation */}
              <div className="mb-10">
                <div className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl mb-8 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse opacity-75"></div>
                  <span className="text-5xl font-bold text-white relative z-10 group-hover:scale-110 transition-transform duration-300">BF</span>
                </div>
              </div>

              {/* Title with enhanced styling */}
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
                {t("title")}
              </h1>
              
              {/* Description with better typography */}
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                {t("description")}
              </p>

              {/* Enhanced Download Button */}
              <div className="mb-12">
                <button 
                  onClick={handleDownload}
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-semibold text-white bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-7 h-7 mr-4 group-hover:animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="relative z-10">{t("download")} (32/64-bit)</span>
                </button>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t("supportedOS")}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {t("fileSize")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-700/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                {t("installationSteps")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("installationDescription")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "1", 
                  title: t("step1Title"), 
                  desc: t("step1Desc"),
                  icon: "📥",
                  color: "from-blue-500 to-blue-600"
                },
                { 
                  step: "2", 
                  title: t("step2Title"), 
                  desc: t("step2Desc"),
                  icon: "⚙️",
                  color: "from-purple-500 to-purple-600"
                },
                { 
                  step: "3", 
                  title: t("step3Title"), 
                  desc: t("step3Desc"),
                  icon: "🔧",
                  color: "from-green-500 to-green-600"
                },
                { 
                  step: "4", 
                  title: t("step4Title"), 
                  desc: t("step4Desc"),
                  icon: "🚀",
                  color: "from-pink-500 to-pink-600"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group relative">
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-800/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                {t("screenshots")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t("screenshotsDescription")}
              </p>
            </div>
            <ScreenshotSlider />
          </div>
        </div>

        {/* Video Section */}
        <div className="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-gray-800/50 dark:to-gray-700/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VideoTutorial />
          </div>
        </div>

        {/* About Section */}
        <div className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-gray-800/30"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                {t("aboutTitle")}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {t("about")}
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t("professional")}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t("professionalDesc")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t("fast")}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t("fastDesc")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t("accurate")}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{t("accurateDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
