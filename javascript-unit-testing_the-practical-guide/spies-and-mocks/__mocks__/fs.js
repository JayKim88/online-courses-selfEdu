import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((path, data) => {
    // to be realistic
    return new Promise((resolve, reject) => {
      resolve();
    });
  }),
};
