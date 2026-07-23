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