import { classNames } from '.';

describe('classNames', () => {
  it('should return an empty string if no arguments are provided', () => {
    expect(classNames()).toBe('');
  });

  it('should concatenate multiple class names into a single string', () => {
    expect(classNames('class1', 'class2', 'class3')).toBe(
      'class1 class2 class3',
    );
  });

  it('should handle arrays of class names', () => {
    expect(classNames(['class1', 'class2'], 'class3')).toBe(
      'class1 class2 class3',
    );
  });

  it('should handle objects with class names as keys', () => {
    expect(classNames({ class1: true, class2: false, class3: true })).toBe(
      'class1 class3',
    );
  });

  it('should handle a mix of strings, arrays, and objects', () => {
    expect(
      classNames('class1', ['class2', 'class3'], {
        class4: true,
        class5: false,
        ['class6']: true,
      }),
    ).toBe('class1 class2 class3 class4 class6');
  });
});
