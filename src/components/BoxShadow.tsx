import { Dispatch, SetStateAction, useState } from "react";
import { BoxShadowType } from "../types";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const BoxShadow = ({
  boxShadow,
  setBoxShadow,
}: {
  boxShadow: BoxShadowType;
  setBoxShadow: Dispatch<SetStateAction<BoxShadowType>>;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-100 shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setVisible(!visible)}
      >
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <span className="w-3 h-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3" />
          Shadow Properties
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
            key="shadow-controls"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden space-y-6"
          >
            {/* Inset Checkbox */}
            <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
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
              <label
                htmlFor="inset"
                className="text-sm font-medium text-gray-700"
              >
                Inset Shadow
              </label>
            </div>

            {/* Offset X & Y */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Offset X", key: "offsetX", min: -50, max: 50 },
                { label: "Offset Y", key: "offsetY", min: -50, max: 50 },
              ].map(({ label, key, min, max }) => (
                <div key={key} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-green-600">
                      {boxShadow[key as keyof BoxShadowType]}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={boxShadow[key as keyof BoxShadowType] as number}
                    onChange={(e) =>
                      setBoxShadow((prev) => ({
                        ...prev,
                        [key]: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Blur + Spread */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Blur Radius", key: "blurRadius", min: 0, max: 100 },
                {
                  label: "Spread Radius",
                  key: "spreadRadius",
                  min: -20,
                  max: 50,
                },
              ].map(({ label, key, min, max }) => (
                <div key={key} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-green-600">
                      {boxShadow[key as keyof BoxShadowType]}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    value={boxShadow[key as keyof BoxShadowType] as number}
                    onChange={(e) =>
                      setBoxShadow((prev) => ({
                        ...prev,
                        [key]: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gradient-to-r from-green-200 to-teal-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Shadow Color */}
            <div className="space-y-3">
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

            {/* Presets */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Quick Presets
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  {
                    label: "Subtle",
                    config: {
                      offsetX: 0,
                      offsetY: 4,
                      blurRadius: 8,
                      spreadRadius: 0,
                      color: "#00000040",
                      inset: false,
                    },
                  },
                  {
                    label: "Floating",
                    config: {
                      offsetX: 0,
                      offsetY: 10,
                      blurRadius: 25,
                      spreadRadius: -5,
                      color: "#00000040",
                      inset: false,
                    },
                  },
                  {
                    label: "Glow",
                    config: {
                      offsetX: 0,
                      offsetY: 0,
                      blurRadius: 20,
                      spreadRadius: 5,
                      color: "#3b8df6aa",
                      inset: false,
                    },
                  },
                  {
                    label: "Inset",
                    config: {
                      offsetX: 5,
                      offsetY: 5,
                      blurRadius: 10,
                      spreadRadius: 0,
                      color: "#00000060",
                      inset: true,
                    },
                  },
                ].map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => setBoxShadow(preset.config)}
                    className="px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 text-xs rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoxShadow;
