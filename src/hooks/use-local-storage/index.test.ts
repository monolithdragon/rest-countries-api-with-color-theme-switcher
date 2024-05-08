import { renderHook } from 'vitest-setup';
import { useLocalStorage } from '.';

describe('useLocalStorage', () => {
  const key = 'testKey';
  const { result } = renderHook(() => useLocalStorage(key));

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('setItem and getItem should work correctly', () => {
    const testValue = { name: 'John', age: 30 };

    result.current?.setItem(testValue);
    const storedValue = result.current?.getItem();

    expect(storedValue).toEqual(testValue);
  });

  it('removeItem should remove the item from localStorage', () => {
    const testValue = { name: 'Jane', age: 25 };

    result.current?.setItem(testValue);
    result.current?.removeItem();
    const storedValue = result.current?.getItem();

    expect(storedValue).toBeUndefined();
  });

  it('getItem should handle invalid JSON data gracefully', () => {
    window.localStorage.setItem(key, 'invalid');

    const storedValue = result.current?.getItem();

    expect(storedValue).toBeUndefined();
  });

  it('setItem should handle errors gracefully', () => {
    window.localStorage.setItem = vi.fn(() => {
      throw new Error('Mock error');
    });

    expect(() => result.current?.setItem({})).not.toThrow();
  });

  it('removeItem should handle errors gracefully', () => {
    window.localStorage.removeItem = vi.fn(() => {
      throw new Error('Mock error');
    });

    expect(() => result.current?.removeItem()).not.toThrow();
  });
});
