import { Dispatch, SetStateAction, useState } from "react";
import { StylingType } from "../types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
const Styling = ({
  styling,
  setStyling,
}: {
  styling: StylingType;
  setStyling: Dispatch<SetStateAction<StylingType>>;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
      <div
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setVisible(!visible)}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
          Element Styling
        </h3>
        <motion.div
          animate={{ rotate: visible ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700"
        >
          <ChevronDown />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="styling-controls"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Background Controls */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="gradient"
                checked={styling.backgroundGradient}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    backgroundGradient: e.target.checked,
                  }))
                }
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
              />
              <label
                htmlFor="gradient"
                className="text-sm font-medium text-gray-700"
              >
                Use Gradient Background
              </label>
            </div>

            {!styling.backgroundGradient ? (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-600">
                  Background Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={styling.backgroundColor}
                    onChange={(e) =>
                      setStyling((prev) => ({
                        ...prev,
                        backgroundColor: e.target.value,
                      }))
                    }
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={styling.backgroundColor}
                    onChange={(e) =>
                      setStyling((prev) => ({
                        ...prev,
                        backgroundColor: e.target.value,
                      }))
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono bg-white"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Gradient Start
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={styling.gradientStart}
                      onChange={(e) =>
                        setStyling((prev) => ({
                          ...prev,
                          gradientStart: e.target.value,
                        }))
                      }
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={styling.gradientStart}
                      onChange={(e) =>
                        setStyling((prev) => ({
                          ...prev,
                          gradientStart: e.target.value,
                        }))
                      }
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs font-mono bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Gradient End
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={styling.gradientEnd}
                      onChange={(e) =>
                        setStyling((prev) => ({
                          ...prev,
                          gradientEnd: e.target.value,
                        }))
                      }
                      className="w-10 h-10 border-2 border-gray-300 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={styling.gradientEnd}
                      onChange={(e) =>
                        setStyling((prev) => ({
                          ...prev,
                          gradientEnd: e.target.value,
                        }))
                      }
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs font-mono bg-white"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-600">
                    Gradient Direction
                  </label>
                  <select
                    value={styling.gradientDirection}
                    onChange={(e) =>
                      setStyling((prev) => ({
                        ...prev,
                        gradientDirection: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                  >
                    <option value="to right">Left to Right</option>
                    <option value="to left">Right to Left</option>
                    <option value="to bottom">Top to Bottom</option>
                    <option value="to top">Bottom to Top</option>
                    <option value="to bottom right">
                      Top-Left to Bottom-Right
                    </option>
                    <option value="to bottom left">
                      Top-Right to Bottom-Left
                    </option>
                    <option value="to top right">
                      Bottom-Left to Top-Right
                    </option>
                    <option value="to top left">
                      Bottom-Right to Top-Left
                    </option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Border Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Border Width: {styling.borderWidth}px
              </label>
              <input
                type="range"
                min={0}
                max={10}
                value={styling.borderWidth}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    borderWidth: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Border Color
              </label>
              <input
                type="color"
                value={styling.borderColor}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    borderColor: e.target.value,
                  }))
                }
                className="w-full h-8 border-2 border-gray-300 rounded-lg cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Border Style
              </label>
              <select
                value={styling.borderStyle}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    borderStyle: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
              >
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
              </select>
            </div>
          </div>

          {/* Transform Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Opacity: {styling.opacity}%
              </label>
              <input
                type="range"
                min={0}
                max={100}
                value={styling.opacity}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    opacity: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Rotation: {styling.rotation}°
              </label>
              <input
                type="range"
                min={-180}
                max={180}
                value={styling.rotation}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    rotation: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-600">
                Scale: {styling.scale}%
              </label>
              <input
                type="range"
                min={50}
                max={200}
                value={styling.scale}
                onChange={(e) =>
                  setStyling((prev) => ({
                    ...prev,
                    scale: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </motion.div>
      )}
        </AnimatePresence>
    </div>
  );
};

export default Styling;
