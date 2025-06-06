import { useState } from "react";
import { BoxShadowType, DimensionsType, StylingType } from "./types";
import { BoxShadow, Dimensions, Examples, Styling } from "./components";

function App() {
  const [dimensions, setDimensions] = useState<DimensionsType>({
    width: 120,
    height: 120,
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  });

  const [boxShadow, setBoxShadow] = useState<BoxShadowType>({
    offsetX: 5,
    offsetY: 5,
    blurRadius: 15,
    spreadRadius: 0,
    color: "#00000040",
    inset: false,
  });

  const [styling, setStyling] = useState<StylingType>({
    backgroundColor: "#3b82f6",
    backgroundGradient: true,
    gradientStart: "#3b82f6",
    gradientEnd: "#8b5cf6",
    gradientDirection: "to bottom right",
    borderWidth: 0,
    borderColor: "#000000",
    borderStyle: "solid",
    opacity: 100,
    rotation: 0,
    scale: 100,
  });

  const generateBoxShadow = () => {
    const { offsetX, offsetY, blurRadius, spreadRadius, color, inset } =
      boxShadow;
    return `${
      inset ? "inset " : ""
    }${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
  };

  const generateBackground = () => {
    if (styling.backgroundGradient) {
      return `linear-gradient(${styling.gradientDirection}, ${styling.gradientStart}, ${styling.gradientEnd})`;
    }
    return styling.backgroundColor;
  };

  const generateTransform = () => {
    return `rotate(${styling.rotation}deg) scale(${styling.scale / 100})`;
  };

  const copyCSSToClipboard = () => {
    const css = `
width: ${dimensions.width}px;
height: ${dimensions.height}px;
border-radius: ${dimensions.borderRadius}px;
border-top-left-radius: ${dimensions.borderTopLeftRadius}px;
border-top-right-radius: ${dimensions.borderTopRightRadius}px;
border-bottom-left-radius: ${dimensions.borderBottomLeftRadius}px;
border-bottom-right-radius: ${dimensions.borderBottomRightRadius}px;
background: ${generateBackground()};
border: ${styling.borderWidth}px ${styling.borderStyle} ${styling.borderColor};
opacity: ${styling.opacity / 100};
transform: ${generateTransform()};
box-shadow: ${generateBoxShadow()};`.trim();

    navigator.clipboard.writeText(css);
  };

  const copyReactStyles = () => {
    const styles = `{
  width: "${dimensions.width}px",
  height: "${dimensions.height}px",
  borderRadius: "${dimensions.borderRadius}px",
  borderTopLeftRadius: "${dimensions.borderTopLeftRadius}px",
  borderTopRightRadius: "${dimensions.borderTopRightRadius}px",
  borderBottomLeftRadius: "${dimensions.borderBottomLeftRadius}px",
  borderBottomRightRadius: "${dimensions.borderBottomRightRadius}px",
  background: "${generateBackground()}",
  border: "${styling.borderWidth}px ${styling.borderStyle} ${
      styling.borderColor
    }",
  opacity: ${styling.opacity / 100},
  transform: "${generateTransform()}",
  boxShadow: "${generateBoxShadow()}"
}`;

    navigator.clipboard.writeText(styles);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Advanced Box Designer
          </h1>
          <p className="text-gray-600 text-lg">
            Create stunning CSS elements with shadows, styling, and transforms
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          {/* Preview Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
              <span className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></span>
              Live Preview
            </h2>

            <div className="flex justify-center items-center h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl relative overflow-hidden">
              {/* Grid pattern background */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div
                className="relative transition-all duration-300 ease-in-out"
                style={{
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                  borderRadius: `${dimensions.borderRadius}px`,
                  borderTopLeftRadius: `${dimensions.borderTopLeftRadius}px`,
                  borderTopRightRadius: `${dimensions.borderTopRightRadius}px`,
                  borderBottomLeftRadius: `${dimensions.borderBottomLeftRadius}px`,
                  borderBottomRightRadius: `${dimensions.borderBottomRightRadius}px`,
                  background: generateBackground(),
                  border:
                    styling.borderWidth > 0
                      ? `${styling.borderWidth}px ${styling.borderStyle} ${styling.borderColor}`
                      : "none",
                  opacity: styling.opacity / 100,
                  transform: generateTransform(),
                  boxShadow: generateBoxShadow(),
                }}
              />
            </div>

            {/* CSS Output */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></span>
                Generated Code
              </h3>

              {/* CSS Output */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    CSS Styles:
                  </span>
                  <button
                    onClick={copyCSSToClipboard}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    📋 Copy CSS
                  </button>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-sm overflow-x-auto border border-gray-700">
                  <pre className="whitespace-pre-wrap">
                    {`width: ${dimensions.width}px;
height: ${dimensions.height}px;
border-radius: ${dimensions.borderRadius}px;
background: ${generateBackground()};
border: ${styling.borderWidth}px ${styling.borderStyle} ${styling.borderColor};
opacity: ${styling.opacity / 100};
transform: ${generateTransform()};
box-shadow: ${generateBoxShadow()};`}
                  </pre>
                </div>
              </div>

              {/* React Output */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    React Styles:
                  </span>
                  <button
                    onClick={copyReactStyles}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    📋 Copy React
                  </button>
                </div>
                <div className="bg-gray-900 text-blue-400 p-4 rounded-xl font-mono text-sm overflow-x-auto border border-gray-700">
                  <pre className="whitespace-pre-wrap">
                    {`{
  width: "${dimensions.width}px",
  height: "${dimensions.height}px",
  borderRadius: "${dimensions.borderRadius}px",
  background: "${generateBackground()}",
  border: "${styling.borderWidth}px ${styling.borderStyle} ${
                      styling.borderColor
                    }",
  opacity: ${styling.opacity / 100},
  transform: "${generateTransform()}",
  boxShadow: "${generateBoxShadow()}"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
                <span className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></span>
                Design Controls
              </h2>

              {/* Dimensions */}
              <Dimensions
                dimensions={dimensions}
                setDimensions={setDimensions}
              />

              {/* Styling */}
              <Styling styling={styling} setStyling={setStyling} />

              {/* Box Shadow Controls */}
              <BoxShadow boxShadow={boxShadow} setBoxShadow={setBoxShadow} />

              {/* Reset Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setDimensions({
                      width: 120,
                      height: 120,
                      borderRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    });
                    setBoxShadow({
                      offsetX: 5,
                      offsetY: 5,
                      blurRadius: 15,
                      spreadRadius: 0,
                      color: "#00000040",
                      inset: false,
                    });
                    setStyling({
                      backgroundColor: "#3b82f6",
                      backgroundGradient: true,
                      gradientStart: "#3b82f6",
                      gradientEnd: "#8b5cf6",
                      gradientDirection: "to bottom right",
                      borderWidth: 0,
                      borderColor: "#000000",
                      borderStyle: "solid",
                      opacity: 100,
                      rotation: 0,
                      scale: 100,
                    });
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  🔄 Reset All Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Examples Section */}
        <Examples
          dimensions={dimensions}
          setDimensions={setDimensions}
          boxShadow={boxShadow}
          setBoxShadow={setBoxShadow}
          styling={styling}
          setStyling={setStyling}
        />
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: all 0.2s ease;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(0,0,0,0.3);
        }
        
        .slider {
          background: linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%);
        }
      `}</style>
    </div>
  );
}

export default App;
