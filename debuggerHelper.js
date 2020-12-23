const debuggerHelper = {
  SUCCESS(text) {
    const SUCCESS = console.log('%cSUCCESS', 'color: green; font-size: 12px; font-weight: bold');
    return console.log(`${SUCCESS}`, text);
  },
  WARNING(text) {
    return console.log(`%c${text}`, 'color: yellow; font-size: 12px; font-weight: bold');
  },
  ERROR(text) {
    return console.log(`%c${text}`, 'color: red; font-size: 12px; font-weight: bold');
  },
};

export default debuggerHelper;
