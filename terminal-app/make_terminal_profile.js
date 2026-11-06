// Builds a Terminal.app profile (.terminal) with the "Vivid" palette.
// Usage: osascript -l JavaScript make_terminal_profile.js /path/to/Vivid.terminal
ObjC.import('AppKit');

function run(argv) {
  const out = argv[0];
  const hex = h => {
    const n = parseInt(h.slice(1), 16);
    const c = $.NSColor.colorWithSRGBRedGreenBlueAlpha(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255, 1);
    return $.NSKeyedArchiver.archivedDataWithRootObjectRequiringSecureCodingError(c, false, null);
  };
  const colors = {
    BackgroundColor: '#1A1B2E',
    TextColor: '#F2F2F7',
    TextBoldColor: '#FFFFFF',
    CursorColor: '#FF5C8A',
    SelectionColor: '#3D3F6B',
    ANSIBlackColor: '#2A2B45',
    ANSIRedColor: '#FF5C8A',
    ANSIGreenColor: '#3DF5A0',
    ANSIYellowColor: '#FFD84D',
    ANSIBlueColor: '#4DA8FF',
    ANSIMagentaColor: '#C77DFF',
    ANSICyanColor: '#33E6E6',
    ANSIWhiteColor: '#D9DAE8',
    ANSIBrightBlackColor: '#7C7FAD',
    ANSIBrightRedColor: '#FF85A8',
    ANSIBrightGreenColor: '#7DFFC0',
    ANSIBrightYellowColor: '#FFE680',
    ANSIBrightBlueColor: '#80C4FF',
    ANSIBrightMagentaColor: '#DDA8FF',
    ANSIBrightCyanColor: '#7FF5F5',
    ANSIBrightWhiteColor: '#FFFFFF',
  };
  const d = $.NSMutableDictionary.alloc.init;
  for (const k in colors) d.setObjectForKey(hex(colors[k]), k);
  d.setObjectForKey('Vivid', 'name');
  d.setObjectForKey('Window Settings', 'type');
  d.setObjectForKey('2.07', 'ProfileCurrentVersion');
  d.setObjectForKey($.NSNumber.numberWithBool(true), 'UseBrightBold');
  d.setObjectForKey($.NSNumber.numberWithBool(true), 'useOptionAsMetaKey');
  d.setObjectForKey($.NSNumber.numberWithInt(0), 'CursorType'); // block
  d.setObjectForKey($.NSNumber.numberWithBool(true), 'CursorBlink');
  let font = $.NSFont.fontWithNameSize('JetBrainsMono-Regular', 14);
  if (font.isNil()) font = $.NSFont.monospacedSystemFontOfSizeWeight(14, 0);
  d.setObjectForKey($.NSNumber.numberWithDouble(1.1), 'Linespacing');
  d.setObjectForKey($.NSKeyedArchiver.archivedDataWithRootObjectRequiringSecureCodingError(font, false, null), 'Font');
  if (!d.writeToFileAtomically(out, true)) throw new Error('write failed: ' + out);
  return 'wrote ' + out;
}
