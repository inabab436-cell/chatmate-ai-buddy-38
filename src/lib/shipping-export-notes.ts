/**
 * Order notes stored in the DB mix the customer's own note with an
 * auto-generated summary (shipping zone, payment, totals, discount).
 * The merchant sees the full text; the shipping export gets only the
 * customer's own note.
 */
const SUMMARY_LINE = /^(—\s*تفاصيل الأوردر|منطقة الشحن:|طريقة الدفع:|إجمالي المنتجات:|الشحن:|الإجمالي النهائي:|الخصم:|العروض المطبّقة:)/;

export function customerNoteForShipping(notes: string | null | undefined): string {
  const out: string[] = [];
  for (const raw of (notes ?? "").split("\n")) {
    const line = raw.trim();
    if (SUMMARY_LINE.test(line)) break;
    out.push(raw);
  }
  return out.join("\n").trim();
}
