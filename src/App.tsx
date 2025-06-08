import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BoxShadowType, DimensionsType, StylingType } from "./types";
import { BoxShadow, Dimensions, Examples, Styling } from "./components";
import { ChevronDown, Copy, Sparkles, Palette, RotateCcw } from "lucide-react";

function App() {
  const [image, setImage] = useState<File | null>(null);
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
  const [cssVisible, setCssVisible] = useState(false);
  const [reactCssVisible, setReactCssVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const generateBoxShadow = () => {
    const { offsetX, offsetY, blurRadius, spreadRadius, color, inset } =
      boxShadow;
    return `${
      inset ? "inset " : ""
    }${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px ${color}`;
  };

  const generateBackground = () => {
    if (image) {
      return `url(${URL.createObjectURL(image)}) center/cover no-repeat`;
    }
    if (styling.backgroundGradient) {
      return `linear-gradient(${styling.gradientDirection}, ${styling.gradientStart}, ${styling.gradientEnd})`;
    }
    return styling.backgroundColor;
  };
  
  const generateTransform = () => {
    return `rotate(${styling.rotation}deg) scale(${styling.scale / 100})`;
  };

  const copyCSSToClipboard = async () => {
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

    await navigator.clipboard.writeText(css);
    setCopied('css');
    setTimeout(() => setCopied(null), 2000);
  };

  const copyReactStyles = async () => {
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
    await navigator.clipboard.writeText(styles);
    setCopied('react');
    setTimeout(() => setCopied(null), 2000);
  };

  const resetSettings = () => {
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
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 mr-3 animate-pulse" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Box Designer
            </h1>
            <Sparkles className="w-8 h-8 text-purple-600 ml-3 animate-pulse" />
          </div>
          <motion.p 
            className="text-gray-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Create stunning CSS elements with advanced shadows, gradients, and transforms
          </motion.p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Preview Section */}
          <motion.div 
            className="xl:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 sticky top-8">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 ml-6 flex items-center">
                  <Palette className="w-6 h-6 text-purple-600 mr-3" />
                  Live Preview
                </h2>
              </div>

              {/* Preview Canvas */}
              <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-inner">
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
                      animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Main Preview Element */}
                <div className="flex flex-col justify-center items-center h-full relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: styling.opacity / 100,
                      scale: styling.scale / 100,
                      rotate: styling.rotation,
                    }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }}
                    className="relative backdrop-blur-sm"
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
                      boxShadow: generateBoxShadow(),
                    }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-full animate-pulse"></div>
                  </motion.div>

                  {/* Upload Button */}
                  <motion.label 
                    className="mt-6 px-6 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 text-sm text-gray-700 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">📸</span>
                      Upload Image
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setImage(file);
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </motion.label>
                </div>
              </div>

              {/* Code Sections */}
              <div className="mt-8 space-y-6">
                {/* CSS */}
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setCssVisible(!cssVisible)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-semibold text-gray-700 flex items-center">
                        <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        CSS Styles
                      </span>
                      <div className="flex items-center space-x-3">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyCSSToClipboard();
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copied === 'css' ? 'Copied!' : 'Copy CSS'}</span>
                        </motion.button>
                        <motion.div
                          animate={{ rotate: cssVisible ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-500"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {cssVisible && (
                      <motion.pre
                        key="css"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-4 bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto border border-gray-700 whitespace-pre-wrap"
                      >
                        {`width: ${dimensions.width}px;
height: ${dimensions.height}px;
border-radius: ${dimensions.borderRadius}px;
background: ${generateBackground()};
border: ${styling.borderWidth}px ${styling.borderStyle} ${styling.borderColor};
opacity: ${styling.opacity / 100};
transform: ${generateTransform()};
box-shadow: ${generateBoxShadow()};`}
                      </motion.pre>
                    )}
                  </AnimatePresence>
                </div>

                {/* React */}
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <motion.div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setReactCssVisible(!reactCssVisible)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-semibold text-gray-700 flex items-center">
                        <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                        React Styles
                      </span>
                      <div className="flex items-center space-x-3">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyReactStyles();
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copied === 'react' ? 'Copied!' : 'Copy React'}</span>
                        </motion.button>
                        <motion.div
                          animate={{ rotate: reactCssVisible ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-500"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {reactCssVisible && (
                      <motion.pre
                        key="react"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-4 bg-gray-900 text-blue-400 p-4 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto border border-gray-700 whitespace-pre-wrap"
                      >
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
                      </motion.pre>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div 
            className="xl:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 animate-pulse"></div>
                    Design Controls
                  </h2>
                </div>

                <Dimensions
                  dimensions={dimensions}
                  setDimensions={setDimensions}
                />
                <Styling styling={styling} setStyling={setStyling} />
                <BoxShadow boxShadow={boxShadow} setBoxShadow={setBoxShadow} />

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <motion.button
                    onClick={resetSettings}
                    className="w-full px-6 py-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold text-base rounded-2xl hover:from-red-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 transform translate-x-full group-hover:animate-pulse"></div>
                    <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                    <span>Reset All Settings</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Examples
            dimensions={dimensions}
            setDimensions={setDimensions}
            boxShadow={boxShadow}
            setBoxShadow={setBoxShadow}
            styling={styling}
            setStyling={setStyling}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;