import { getUsername } from '../js/utils/storage.js';
import { describe, expect, test, vi } from 'vitest';

describe('getUsername', () => {
  test('returns username from user object', () => {
    // Mock localStorage
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({ name: 'Anniken' }));

    expect(getUsername()).toBe('Anniken');

    Storage.prototype.getItem.mockRestore();
  });

  test('returns null if no user is found', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);

    expect(getUsername()).toBe(null);

    Storage.prototype.getItem.mockRestore();
  });

  test('handles missing name property gracefully', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({}));

    expect(getUsername()).toBe(null);

    Storage.prototype.getItem.mockRestore();
  });
});