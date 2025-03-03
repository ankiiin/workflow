import { isActivePath } from '../js/utils/userInterface.js';
import { describe, expect, test } from 'vitest';

describe('isActivePath', () => {
  test('returns true when paths match', () => {
    expect(isActivePath('/home', '/home')).toBe(true);
  });

  test('returns false when paths do not match', () => {
    expect(isActivePath('/home', '/about')).toBe(false);
  });

  test('returns true for root path "/" and index.html', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });

  test('returns false for root path "/" and another page', () => {
    expect(isActivePath('/', '/about')).toBe(false);
  });

  test('returns true when href is part of currentPath', () => {
    expect(isActivePath('/dashboard', '/dashboard/settings')).toBe(true);
  });

  test('returns false when href is not in currentPath', () => {
    expect(isActivePath('/profile', '/dashboard')).toBe(false);
  });
});