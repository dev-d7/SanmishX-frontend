// Temporary local lookup standing in for a real product-detail API.
// Once the backend is ready, swap the body of findProductBySlug()/getAllProductSlugs()
// for real fetch calls — the ProductDetail shape below is the contract to keep.
import { PRODUCT_CATALOGUE, PRODUCTS } from "@/lib/data";
import { slugify } from "@/lib/slug";

export type ProductDetail = {
  slug: string;
  title: string;
  category: string;
  seller: string;
  brand?: string;
  type?: string;
  priceLabel: string;
  priceValue: number | null;
  badge: string;
  icon: string;
};

const inr = (n: number) => "₹ " + n.toLocaleString("en-IN");

const TYPE_LABELS: Record<string, string> = {
  verified: "Verified Manufacturer",
  oem: "Authorized OEM",
  turnkey: "Turnkey / EPC",
};

function fromCatalogue(): ProductDetail[] {
  return PRODUCT_CATALOGUE.map((p) => ({
    slug: slugify(p.t),
    title: p.t,
    category: p.c,
    seller: p.s,
    brand: p.brand,
    type: TYPE_LABELS[p.type] ?? p.type,
    priceLabel: inr(p.p),
    priceValue: p.p,
    badge: p.b,
    icon: p.ic,
  }));
}

function fromFeatured(): ProductDetail[] {
  return PRODUCTS.map((p) => {
    const digits = p.p.replace(/[^0-9]/g, "");
    return {
      slug: slugify(p.t),
      title: p.t,
      category: p.c,
      seller: p.s,
      priceLabel: p.p,
      priceValue: digits ? Number(digits) : null,
      badge: p.b,
      icon: p.ic,
    };
  });
}

export function getAllProducts(): ProductDetail[] {
  const seen = new Set<string>();
  const combined: ProductDetail[] = [];
  for (const p of [...fromCatalogue(), ...fromFeatured()]) {
    if (seen.has(p.slug)) continue;
    seen.add(p.slug);
    combined.push(p);
  }
  return combined;
}

export function findProductBySlug(slug: string): ProductDetail | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}
