import { accountFeeParser } from "../accountFeeParser";
import { jest } from "@jest/globals";
describe("util tests", () => {
  it("account fee parser", () => {
    const result = accountFeeParser(2000000);
    expect(result.tierOne).toEqual(800);
  });

  describe("playing around with mock functions", () => {
    afterEach(() => {
      // restore replaced property
      jest.restoreAllMocks();
    });
    it("basic mock", () => {
      const mockFn = jest.fn();
      mockFn();
      expect(mockFn).toHaveBeenCalled();
    });
    it("mock return values", () => {
      const mockFn = jest.fn();
      mockFn.mockReturnValue({ investments: [], formState: true });
      expect(mockFn()).toEqual({ investments: [], formState: true });
    });
  });
});
