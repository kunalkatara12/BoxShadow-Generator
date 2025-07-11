import { Dispatch, SetStateAction, useState } from "react";
import { DimensionsType } from "../types";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Dimensions = ({
  dimensions,
  setDimensions,
}: {
  dimensions: DimensionsType;
  setDimensions: Dispatch<SetStateAction<DimensionsType>>;
}) => {
  const [visible, setVisible] = useState(false);

  const data = [
    {
      title: "Width",
      property: dimensions.width,
      changingProperty: "width",
      min: 20,
      max: 300,
      unit: "px",
    },
    {
      title: "Height",
      property: dimensions.height,
      changingProperty: "height",
      min: 20,
      max: 300,
      unit: "px",
    },
    {
      title: "Border Radius",
      property: dimensions.borderRadius,
      changingProperty: "borderRadius",
      min: 0,
      max: 150,
      unit: "px",
    },
    {
      title: "Top Left",
      property: dimensions.borderTopLeftRadius,
      changingProperty: "borderTopLeftRadius",
      min: 0,
      max: 100,
      unit: "px",
    },
    {
      title: "Top Right",
      property: dimensions.borderTopRightRadius,
      changingProperty: "borderTopRightRadius",
      min: 0,
      max: 100,
      unit: "px",
    },
    {
      title: "Bottom Left",
      property: dimensions.borderBottomLeftRadius,
      changingProperty: "borderBottomLeftRadius",
      min: 0,
      max: 100,
      unit: "px",
    },
    {
      title: "Bottom Right",
      property: dimensions.borderBottomRightRadius,
      changingProperty: "borderBottomRightRadius",
      min: 0,
      max: 100,
      unit: "px",
    },
  ];

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 shadow-sm">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
          <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3" />
          Element Dimensions
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
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            >
              {data.map((d, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-700">
                      {d.title}
                    </label>
                    <span className="text-sm font-mono bg-white px-2 py-1 rounded border text-blue-600 shadow">
                      {d.property}
                      {d.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={d.min}
                    max={d.max}
                    value={d.property}
                    onChange={(e) =>
                      setDimensions((prev) => ({
                        ...prev,
                        [d.changingProperty]: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dimensions;
