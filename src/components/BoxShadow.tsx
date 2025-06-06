import { Dispatch, SetStateAction } from "react";
import { BoxShadowType } from "../types";

const BoxShadow = ({
  boxShadow,
  setBoxShadow,
}: {
  boxShadow: BoxShadowType;
  setBoxShadow: Dispatch<SetStateAction<BoxShadowType>>;
}) => {
  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></span>
        Shadow Properties
      </h3>

      {/* Inset Checkbox */}
      <div className="flex items-center space-x-3 p-4 bg-white rounded-lg mb-6 shadow-sm">
        <input
          type="checkbox"
          id="inset"
          checked={boxShadow.inset}
          onChange={(e) =>
            setBoxShadow((prev) => ({
              ...prev,
              inset: e.target.checked,
            }))
          }
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor="inset" className="text-sm font-medium text-gray-700">
          Inset Shadow
        </label>
      </div>

      {/* Offset Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              Offset X
            </label>
            <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-green-600">
              {boxShadow.offsetX}px
            </span>
          </div>
          <input
            type="range"
            min={-50}
            max={50}
            value={boxShadow.offsetX}
            onChange={(e) =>
              setBoxShadow((prev) => ({
                ...prev,
                offsetX: Number(e.target.value),
              }))
            }
            className="w-full h-2 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              Offset Y
            </label>
            <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-green-600">
              {boxShadow.offsetY}px
            </span>
          </div>
          <input
            type="range"
            min={-50}
            max={50}
            value={boxShadow.offsetY}
            onChange={(e) =>
              setBoxShadow((prev) => ({
                ...prev,
                offsetY: Number(e.target.value),
              }))
            }
            className="w-full h-2 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Blur and Spread */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              Blur Radius
            </label>
            <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-green-600">
              {boxShadow.blurRadius}px
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={boxShadow.blurRadius}
            onChange={(e) =>
              setBoxShadow((prev) => ({
                ...prev,
                blurRadius: Number(e.target.value),
              }))
            }
            className="w-full h-2 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              Spread Radius
            </label>
            <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-green-600">
              {boxShadow.spreadRadius}px
            </span>
          </div>
          <input
            type="range"
            min={-20}
            max={50}
            value={boxShadow.spreadRadius}
            onChange={(e) =>
              setBoxShadow((prev) => ({
                ...prev,
                spreadRadius: Number(e.target.value),
              }))
            }
            className="w-full h-2 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Color Picker */}
      <div className="space-y-3 mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Shadow Color
        </label>
        <div className="flex items-center space-x-3">
          <input
            type="color"
            value={boxShadow.color}
            onChange={(e) =>
              setBoxShadow((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
            className="w-12 h-12 border-2 border-gray-300 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={boxShadow.color}
            onChange={(e) =>
              setBoxShadow((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono bg-white"
            placeholder="#000000"
          />
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Quick Presets
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            onClick={() =>
              setBoxShadow({
                offsetX: 0,
                offsetY: 4,
                blurRadius: 8,
                spreadRadius: 0,
                color: "#00000040",
                inset: false,
              })
            }
            className="px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 text-xs rounded-lg transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md"
          >
            Subtle
          </button>
          <button
            onClick={() =>
              setBoxShadow({
                offsetX: 0,
                offsetY: 10,
                blurRadius: 25,
                spreadRadius: -5,
                color: "#00000040",
                inset: false,
              })
            }
            className="px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 text-xs rounded-lg transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md"
          >
            Floating
          </button>
          <button
            onClick={() =>
              setBoxShadow({
                offsetX: 0,
                offsetY: 0,
                blurRadius: 20,
                spreadRadius: 5,
                color: "#3b8df6aa",
                inset: false,
              })
            }
            className="px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 text-xs rounded-lg transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md"
          >
            Glow
          </button>
          <button
            onClick={() =>
              setBoxShadow({
                offsetX: 5,
                offsetY: 5,
                blurRadius: 10,
                spreadRadius: 0,
                color: "#00000060",
                inset: true,
              })
            }
            className="px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 text-xs rounded-lg transition-all duration-200 border border-gray-200 shadow-sm hover:shadow-md"
          >
            Inset
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxShadow