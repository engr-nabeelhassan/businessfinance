import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">BF</span>
              </div>
              <h3 className="text-xl font-bold">{t("companyName")}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("companyDescription")}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">{t("contactInfo")}</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="text-blue-400 mr-3" />
                <span className="text-gray-300">{t("location")}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@businessfinance.com" className="text-gray-300 hover:text-white transition-colors">
                  {t("email")}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+923001234567" className="text-gray-300 hover:text-white transition-colors">
                  {t("phone")}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">{t("followUs")}</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaInstagram className="text-white text-xl group-hover:animate-pulse" />
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaFacebook className="text-white text-xl group-hover:animate-pulse" />
              </a>
              <a 
                href="https://youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaYoutube className="text-white text-xl group-hover:animate-pulse" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              {t("socialDescription")}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t("copyright")} | 
            <span className="ml-2">{t("madeBy")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
