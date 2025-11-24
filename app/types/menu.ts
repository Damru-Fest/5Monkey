// TypeScript interfaces for the menu data structure

export interface MenuItem {
  id: string;
  name: string;
  price: number | null;
  priceWithChicken?: number;
  description: string;
  addOns?: string[];
  image?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
  image?: string;
  isPopular?: boolean;
}

export interface Menu {
  title: string;
  categories: MenuCategory[];
  lastUpdated?: string;
  currency?: string;
}

export interface MenuData {
  menu: Menu;
}

// Helper types for filtering and searching
export type MenuItemWithCategory = MenuItem & {
  categoryId: string;
  categoryName: string;
};

export type PriceRange = {
  min: number;
  max: number;
};

export type MenuFilters = {
  category?: string;
  priceRange?: PriceRange;
  isVegetarian?: boolean;
  searchTerm?: string;
};