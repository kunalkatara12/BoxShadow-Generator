import { useState } from "react";

function App() {
  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 100,
  });
  const [boxShadow, setBoxShadow] = useState({
    offsetX: 5,
    offsetY: 5,
    blurRadius: 10,
    spreadRadius: 0,
    color: "#000000",
    inset: false,
  });

  const generateBoxShadow = () => {
    const { offsetX, offsetY, blurRadius, spreadRadius, color, inset } =
      boxShadow;
    return `${
      inset ? "inset " : ""
    }${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
  };
  

  const copyCSSToClipboard = () => {
    const css = `box-shadow: ${generateBoxShadow()};`;
    navigator.clipboard.writeText(css);
  };

  const copyReactBoxShadow=()=>{
    const css = `boxShadow: "${generateBoxShadow()}"`;
    navigator.clipboard.writeText(css);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Box Shadow Generator
          </h1>
          <p className="text-gray-600">
            Create beautiful CSS box shadows with live preview
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Preview Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Live Preview
            </h2>
            <div className="flex justify-center items-center h-80 bg-gray-50 rounded-xl">
              <div
                className="bg-gradient-to-br from-red-400 to-pink-500 rounded-lg"
                style={{
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                  boxShadow: generateBoxShadow(),
                }}
              />
            </div>

            {/* CSS Output */}
            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">
                Generated CSS:
              </label>
              <div className="flex flex-col space-y-2">
                {/* For Normal Css */}
                <div className="flex gap-2">
                  <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm break-all">
                    box-shadow: {generateBoxShadow()};{" "}
                  </div>
                  <button
                    onClick={copyCSSToClipboard}
                    className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors"
                  >
                    📑
                  </button>
                </div>
                {/* For React */}
                <div className="flex gap-2">
                <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm break-all">
                  <p className="w-[90%] ">boxShadow: "{generateBoxShadow()}"</p>
                </div>
                <button
                  onClick={copyReactBoxShadow}
                  className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors"
                >
                  📑
                </button>
                </div >
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Controls
            </h2>

            {/* Dimensions */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Element Dimensions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Width: {dimensions.width}px
                  </label>
                  <input
                    type="range"
                    min={20}
                    max={200}
                    value={dimensions.width}
                    onChange={(e) =>
                      setDimensions((prev) => ({
                        ...prev,
                        width: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Height: {dimensions.height}px
                  </label>
                  <input
                    type="range"
                    min={20}
                    max={200}
                    value={dimensions.height}
                    onChange={(e) =>
                      setDimensions((prev) => ({
                        ...prev,
                        height: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* Box Shadow Controls */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-700 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Shadow Properties
              </h3>

              {/* Inset Checkbox */}
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
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
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="inset"
                  className="text-sm font-medium text-gray-700"
                >
                  Inset Shadow
                </label>
              </div>

              {/* Offset Controls */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Offset X: {boxShadow.offsetX}px
                  </label>
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Offset Y: {boxShadow.offsetY}px
                  </label>
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Blur and Spread */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Blur Radius: {boxShadow.blurRadius}px
                  </label>
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Spread Radius: {boxShadow.spreadRadius}px
                  </label>
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
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Color Picker */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600">
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
                <label className="block text-sm font-medium text-gray-600">
                  Quick Presets
                </label>
                <div className="grid grid-cols-2 gap-2">
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
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg transition-colors"
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
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg transition-colors"
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
                        color: "#3b82f6",
                        inset: false,
                      })
                    }
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg transition-colors"
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
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg transition-colors"
                  >
                    Inset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default App;
