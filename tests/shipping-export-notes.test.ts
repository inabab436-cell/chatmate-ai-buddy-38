import { describe, it, expect } from "vitest";
import { customerNoteForShipping } from "../src/lib/shipping-export-notes";

describe("customerNoteForShipping", () => {
  it("drops the storefront order summary", () => {
    const n = "اتصل قبل الوصول\n— تفاصيل الأوردر (من صفحة المتجر) —\nالشحن: 50 EGP\nالإجمالي النهائي: 950 EGP";
    expect(customerNoteForShipping(n)).toBe("اتصل قبل الوصول");
  });
  it("returns empty when only a summary exists", () => {
    expect(customerNoteForShipping("— تفاصيل الأوردر —\nالشحن: 0")).toBe("");
  });
});
