# Changelog

## v0.2.1 Alpha

- feat: add food editing support


## v0.3.0 Alpha (In Progress)

### Added
- Food editing
- Nutrition metadata
- Helper functions

### Changed
- Food model now supports metadata
- Backward compatibility for old food format

### Fixed
- ...

# AshFit Changelog

## v0.3.0 Alpha

### Added
- Food metadata system
- Per Unit / Per 100 g nutrition modes
- Edible Portion (%) support
- Favorites
- Frequently Used foods
- Centralized UI refresh

### Improved
- Food editor
- Daily workflow
- Add food UX

### Fixed
- Gram-based calculations now respect edible portion.
- UI updates immediately after food changes.

# AshFit v0.3.2 Alpha
Release Date: 23 July 2026

## Dashboard Foundations

This release marks the beginning of AshFit's visual redesign. The focus shifted from adding new functionality to improving the overall user experience and creating the foundation for a modern mobile-first interface.

### Added
- Redesigned nutrition summary into two dashboard statistic cards:
  - Calories
  - Protein
- Introduced new dashboard card components (statCard, statLabel, statValue, statUnit).

### Improved
- Dashboard hierarchy now emphasizes the most important daily nutrition information.
- More premium and app-like appearance for the tracker screen.
- Better spacing and organization of the dashboard.
- Improved visual consistency across tracker components.

### Technical
- Dashboard layout implemented using Flexbox.
- No JavaScript changes required for the new dashboard cards.
- Existing functionality remains fully compatible with the new layout.

### Known Issues
- Mobile spacing still requires refinement.
- Favorites and Frequently Used sections will be redesigned in a future release.
- Daily Log layout is still using the previous design.
- Quick Add section has not yet been modernized.

### Next Version (v0.3.3 Alpha)
- Redesign Favorites section.
- Redesign Frequently Used section.
- Introduce Quick Add card.
- Improve Daily Log presentation.
- Continue mobile-first UI refinements.

# AshFit v0.3.3 Alpha
Codename: Interactive Dashboard

Release Date: 23 July 2026

## Overview

This release continues AshFit's transition from a functional calorie tracker into a polished mobile-first application. The focus was on improving interaction, visual hierarchy, and touch experience without changing the underlying nutrition functionality.

## Added

- Redesigned Favorites section using modern chip-style buttons.
- Redesigned Frequently Used section using horizontally scrollable action chips.
- Added smooth hover and press animations for quick actions.
- Improved section spacing and typography throughout the tracker dashboard.

## Improved

- Quick actions now feel like native mobile app controls rather than traditional HTML buttons.
- Better use of whitespace and visual grouping.
- Horizontal scrolling for Favorites and Frequently Used provides a cleaner mobile experience.
- Overall dashboard feels significantly more polished and touch-friendly.

## Technical

- Introduced reusable Action Chip styling.
- Improved CSS organization for dashboard components.
- No JavaScript changes required.
- Existing functionality remains fully compatible.

## UI Progress

Completed:
✓ Design System
✓ Premium Dark Theme
✓ Dashboard Statistic Cards
✓ Interactive Favorite Chips
✓ Interactive Frequently Used Chips

Remaining:
□ Quick Add redesign
□ Daily Log redesign
□ Glassmorphism effects
□ Icons
□ Micro animations
□ Mobile polish

## Next Version (v0.3.4 Alpha)

- Redesign the Daily Log.
- Introduce richer food cards.
- Improve spacing and visual hierarchy.
- Continue premium mobile UI refinements.

# AshFit v0.3.4 Alpha
Codename: Nutrition Core

Release Date: 23 July 2026

## Overview

This release marks a major transition for AshFit from a simple calorie tracker into a personalized nutrition application.

The focus of this update was building the foundation for a complete personal food database based on actual foods, meals, and drinks used in daily life.

---

## Added

### Personal Nutrition Database v1.0

Added a dedicated food database containing frequently used foods:

- Protein sources
- Dairy products
- Eggs
- Bakery items
- Snacks
- Drinks
- Condiments
- Ready meals
- Fruits and vegetables

The database now includes:

- Calories
- Protein
- Food mode (unit / grams)
- Edible portion factors
- Categories
- Favourite status
- Food icons

---

## Improved

### Database Structure

Separated the food database from application state.

New structure:

- `foods.js` → Nutrition database
- `data.js` → User data and tracking state

This improves maintainability and allows future expansion.

---

### Food Naming System

Improved separation between:

Internal database keys:
porkSteak
highProteinShake
chickenSlices

and user-facing names:
Pork Steak
Dr. Oetker High Protein Shake
Chicken Breast Slices


The app now supports cleaner display names.

---

### Food Matching

Added a food lookup system allowing AshFit to understand both:
porkSteak

and:

Pork Steak


This improves compatibility between:

- Food Library
- Favorites
- Search
- Manual input

---

## Database Improvements

Updated values based on personal nutrition tracking history:

Examples:

Chicken (bone-in):
- Logged weight supported
- Edible portion factor implemented

Speisequark:
- Normalized per 100g

Work Coffee:
- Updated to current recipe estimate

---

## Technical Changes

Added:

- `foods.js`
- Food lookup helper
- Expanded nutrition metadata

Updated:

- `data.js`
- `app.js`
- `ui.js`
- `service-worker.js`

---

## Current Progress

Completed:

✓ Premium UI foundation  
✓ Food Library system  
✓ Food editing  
✓ Gram-based foods  
✓ Edible portion calculation  
✓ Favourite foods  
✓ Frequently used foods  
✓ Personal Nutrition Database v1.0  

---

## Next Goals

### AshFit v0.3.5 Alpha

Planned:

- Complete remaining food imports
- Improve Food Library browsing
- Add category filtering
- Add food icons to UI
- Redesign Daily Log cards
- Improve mobile experience
