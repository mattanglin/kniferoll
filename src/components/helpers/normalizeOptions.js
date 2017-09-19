/**
 * Convert options array of strings to objects
 */
const normalizeOptions = (options) => {
  if (typeof options[0] === 'string') {
    return options.map((option) => ({
      label: option,
      value: option,
    }));
  }

  // Pass array of objects as is
  return options;
};

export default normalizeOptions;
