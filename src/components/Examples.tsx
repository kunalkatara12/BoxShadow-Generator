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
  const Card = () => {
    return (
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
    );
  };
  const Button = () => {
    return (
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
    );
  };
  const Avatar = () => {
    return (
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
    );
  };
  const Neon = () => {
    return (
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
    );
  };
  const Neumorphism = () => {
    return (
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
    );
  };
  const Glass = () => {
    return (
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
    );
  };


  const FloatingShadow = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 160,
            height: 60,
            borderRadius: 30,
          });
          setBoxShadow({
            offsetX: 0,
            offsetY: 20,
            blurRadius: 40,
            spreadRadius: -10,
            color: "#0ea5e945",
            inset: false,
          });
          setStyling({
            ...styling,
            backgroundColor: "#0ea5e9",
            backgroundGradient: true,
            gradientStart: "#0ea5e9",
            gradientEnd: "#0284c7",
            gradientDirection: "135deg",
            borderWidth: 0,
          });
        }}
        className="p-4 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl hover:from-sky-100 hover:to-sky-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
      >
        <div className="w-16 h-6 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full mx-auto mb-2 shadow-xl shadow-sky-500/30"></div>
        <span className="text-xs font-medium text-gray-700">Floating</span>
      </button>
    );
  };

  const InnerShadow = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 100,
            height: 100,
            borderRadius: 50,
          });
          setBoxShadow({
            offsetX: 0,
            offsetY: 0,
            blurRadius: 15,
            spreadRadius: 0,
            color: "#00000030",
            inset: true,
          });
          setStyling({
            ...styling,
            backgroundColor: "#f59e0b",
            backgroundGradient: true,
            gradientStart: "#f59e0b",
            gradientEnd: "#d97706",
            gradientDirection: "45deg",
            borderWidth: 3,
            borderColor: "#fbbf24",
          });
        }}
        className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl hover:from-amber-100 hover:to-amber-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mx-auto mb-2 border-2 border-amber-300 shadow-inner"></div>
        <span className="text-xs font-medium text-gray-700">Inset</span>
      </button>
    );
  };

  const Retro = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 140,
            height: 80,
            borderRadius: 8,
          });
          setBoxShadow({
            offsetX: 6,
            offsetY: 6,
            blurRadius: 0,
            spreadRadius: 0,
            color: "#dc2626",
            inset: false,
          });
          setStyling({
            ...styling,
            backgroundColor: "#fef3c7",
            backgroundGradient: false,
            borderWidth: 3,
            borderColor: "#000000",
          });
        }}
        className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:from-red-100 hover:to-red-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
      >
        <div className="w-14 h-8 bg-yellow-100 rounded mx-auto mb-2 border-2 border-black shadow-[4px_4px_0px_#dc2626]"></div>
        <span className="text-xs font-medium text-gray-700">Retro</span>
      </button>
    );
  };

  const Minimal = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 200,
            height: 50,
            borderRadius: 4,
          });
          setBoxShadow({
            offsetX: 0,
            offsetY: 1,
            blurRadius: 3,
            spreadRadius: 0,
            color: "#00000010",
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
        <div className="w-20 h-5 bg-white rounded mx-auto mb-2 border border-gray-200 shadow-sm"></div>
        <span className="text-xs font-medium text-gray-700">Minimal</span>
      </button>
    );
  };

  const GradientBorder = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 120,
            height: 120,
            borderRadius: 24,
          });
          setBoxShadow({
            offsetX: 0,
            offsetY: 4,
            blurRadius: 12,
            spreadRadius: 0,
            color: "#00000015",
            inset: false,
          });
          setStyling({
            ...styling,
            backgroundColor: "#ffffff",
            backgroundGradient: false,
            borderWidth: 2,
            borderColor: "#8b5cf6",
          });
        }}
        className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl hover:from-indigo-100 hover:to-indigo-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
      >
        <div className="w-12 h-12 bg-white rounded-3xl mx-auto mb-2 border-2 border-purple-500 shadow-sm"></div>
        <span className="text-xs font-medium text-gray-700">Gradient</span>
      </button>
    );
  };

  const Dark = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 160,
            height: 90,
            borderRadius: 12,
          });
          setBoxShadow({
            offsetX: 0,
            offsetY: 8,
            blurRadius: 24,
            spreadRadius: 0,
            color: "#00000040",
            inset: false,
          });
          setStyling({
            ...styling,
            backgroundColor: "#1f2937",
            backgroundGradient: true,
            gradientStart: "#1f2937",
            gradientEnd: "#111827",
            gradientDirection: "180deg",
            borderWidth: 1,
            borderColor: "#374151",
          });
        }}
        className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:from-slate-100 hover:to-slate-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
      >
        <div className="w-16 h-9 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl mx-auto mb-2 border border-gray-600 shadow-lg"></div>
        <span className="text-xs font-medium text-gray-700">Dark</span>
      </button>
    );
  };

  const Soft = () => {
    return (
      <button
        onClick={() => {
          setDimensions({
            ...dimensions,
            width: 130,
            height: 130,
            borderRadius: 65,
          });
          setBoxShadow({
            offsetX: 0,
            offsetY: 15,
            blurRadius: 35,
            spreadRadius: -5,
            color: "#f472b650",
            inset: false,
          });
          setStyling({
            ...styling,
            backgroundColor: "#fdf2f8",
            backgroundGradient: true,
            gradientStart: "#fdf2f8",
            gradientEnd: "#fce7f3",
            gradientDirection: "45deg",
            borderWidth: 0,
          });
        }}
        className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl hover:from-pink-100 hover:to-pink-200 transition-all duration-200 text-center shadow-sm hover:shadow-md"
      >
        <div className="w-13 h-13 bg-gradient-to-br from-pink-50 to-pink-100 rounded-full mx-auto mb-2 shadow-xl shadow-pink-400/30"></div>
        <span className="text-xs font-medium text-gray-700">Soft</span>
      </button>
    );
  };
  return (
    <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
        <span className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></span>
        Quick Style Presets
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <Card />
        <Button />
        <Avatar />
        <Neon />
        <Neumorphism />
        <Glass />
        <FloatingShadow/>
        <InnerShadow/>
        <Retro/>
        <Minimal/>
        <GradientBorder/>
        <Dark/>
        <Soft/>
      </div>
    </div>
  );
};

export default Examples;
