import { Dispatch, SetStateAction } from "react";
import { BoxShadowType, DimensionsType, StylingType } from "../types";

const Examples = ({
  dimensions,
  setDimensions,
  setBoxShadow,
  styling,
  setStyling,
}: {
  dimensions: DimensionsType;
  setDimensions: Dispatch<SetStateAction<DimensionsType>>;
  boxShadow: BoxShadowType;
  setBoxShadow: Dispatch<SetStateAction<BoxShadowType>>;
  styling: StylingType;
  setStyling: Dispatch<SetStateAction<StylingType>>;
}) => {
  return (
    <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
        <span className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></span>
        Quick Style Presets
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* Card Style */}
        <button
          onClick={() => {
            setDimensions({
              ...dimensions,
              width: 150,
              height: 100,
              borderRadius: 12,
            });
            setBoxShadow({
              offsetX: 0,
              offsetY: 4,
              blurRadius: 20,
              spreadRadius: 0,
              color: "#00000020",
              inset: false,
            });
            setStyling({
              ...styling,
              backgroundColor: "#ffffff",
              backgroundGradient: false,
              borderWidth: 1,
              borderColor: "#e5e7eb",
            });
          }}
          className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
        >
          <div className="w-12 h-8 bg-white rounded-lg shadow-md mx-auto mb-2 border"></div>
          <span className="text-xs font-medium text-gray-700">Card</span>
        </button>

        {/* Button Style */}
        <button
          onClick={() => {
            setDimensions({
              ...dimensions,
              width: 120,
              height: 40,
              borderRadius: 20,
            });
            setBoxShadow({
              offsetX: 0,
              offsetY: 2,
              blurRadius: 8,
              spreadRadius: 0,
              color: "#3b82f640",
              inset: false,
            });
            setStyling({
              ...styling,
              backgroundColor: "#3b82f6",
              backgroundGradient: false,
              borderWidth: 0,
            });
          }}
          className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
        >
          <div className="w-12 h-4 bg-blue-500 rounded-full mx-auto mb-2 shadow-sm"></div>
          <span className="text-xs font-medium text-gray-700">Button</span>
        </button>

        {/* Avatar Style */}
        <button
          onClick={() => {
            setDimensions({
              ...dimensions,
              width: 80,
              height: 80,
              borderRadius: 40,
            });
            setBoxShadow({
              offsetX: 0,
              offsetY: 0,
              blurRadius: 0,
              spreadRadius: 3,
              color: "#ffffff",
              inset: false,
            });
            setStyling({
              ...styling,
              backgroundColor: "#10b981",
              backgroundGradient: false,
              borderWidth: 2,
              borderColor: "#ffffff",
            });
          }}
          className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
        >
          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 border-2 border-white shadow-sm"></div>
          <span className="text-xs font-medium text-gray-700">Avatar</span>
        </button>

        {/* Neon Style */}
        <button
          onClick={() => {
            setDimensions({
              ...dimensions,
              width: 100,
              height: 100,
              borderRadius: 12,
            });
            setBoxShadow({
              offsetX: 0,
              offsetY: 0,
              blurRadius: 25,
              spreadRadius: 5,
              color: "#8b5cf6aa",
              inset: false,
            });
            setStyling({
              ...styling,
              backgroundColor: "#1f2937",
              backgroundGradient: false,
              borderWidth: 2,
              borderColor: "#8b5cf6",
            });
          }}
          className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
        >
          <div className="w-10 h-10 bg-gray-800 rounded-lg mx-auto mb-2 border-2 border-purple-500 shadow-purple-500 shadow-lg"></div>
          <span className="text-xs font-medium text-gray-700">Neon</span>
        </button>

        {/* Neumorphism Style */}
        <button
          onClick={() => {
            setDimensions({
              ...dimensions,
              width: 120,
              height: 120,
              borderRadius: 20,
            });
            setBoxShadow({
              offsetX: 8,
              offsetY: 8,
              blurRadius: 16,
              spreadRadius: 0,
              color: "#00000020",
              inset: false,
            });
            setStyling({
              ...styling,
              backgroundColor: "#f3f4f6",
              backgroundGradient: false,
              borderWidth: 0,
            });
          }}
          className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
        >
          <div className="w-12 h-12 bg-gray-200 rounded-2xl mx-auto mb-2 shadow-lg"></div>
          <span className="text-xs font-medium text-gray-700">Neumorphic</span>
        </button>

        {/* Glass Style */}
        <button
          onClick={() => {
            setDimensions({
              ...dimensions,
              width: 140,
              height: 100,
              borderRadius: 16,
            });
            setBoxShadow({
              offsetX: 0,
              offsetY: 8,
              blurRadius: 32,
              spreadRadius: 0,
              color: "#00000020",
              inset: false,
            });
            setStyling({
              ...styling,
              backgroundColor: "#ffffff40",
              backgroundGradient: false,
              borderWidth: 1,
              borderColor: "#ffffff60",
              opacity: 80,
            });
          }}
          className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl hover:from-cyan-100 hover:to-cyan-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
        >
          <div className="w-14 h-10 bg-white bg-opacity-40 rounded-2xl mx-auto mb-2 border border-white border-opacity-60 backdrop-blur-sm shadow-lg"></div>
          <span className="text-xs font-medium text-gray-700">Glass</span>
        </button>
      </div>
    </div>
  );
};

export default Examples;
