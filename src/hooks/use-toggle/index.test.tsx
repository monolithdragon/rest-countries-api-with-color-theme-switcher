import { act, renderHook } from '@testing-library/react';
import { useToggle } from '.';

describe('useToggle', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.isOpen).toBe(true);
  });

  it('should initialize with false if no default value provided', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle isOpen state', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggleOpen();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggleOpen();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
