# Planning Guide

A web application that displays random quotes from the Dexter TV series alongside character images, creating an engaging experience for fans to enjoy memorable moments from the show.

**Experience Qualities**:
1. **Playful** - The app should feel fun and entertaining, celebrating the dark humor and memorable dialogue from the series
2. **Immediate** - Users get instant gratification with a single click to see new quotes and characters
3. **Immersive** - Strong visual presence with character imagery that brings quotes to life

**Complexity Level**: Micro Tool (single-purpose)
- The app has one primary function: display random quotes with character images. Simple state management for current quote, straightforward interaction model.

## Essential Features

### Random Quote Generator
- **Functionality**: Displays a random Dexter quote with associated character image
- **Purpose**: Provides entertainment and nostalgia for fans of the series
- **Trigger**: User clicks "New Quote" button or loads the page
- **Progression**: Page loads → Random quote displays with character → User clicks button → New random quote appears with smooth transition
- **Success criteria**: Quote changes on every button press, character image matches quote speaker, smooth animations between transitions

### Quote Attribution
- **Functionality**: Shows character name and optional context for each quote
- **Purpose**: Helps users identify who said the quote and adds context
- **Trigger**: Displays automatically with each quote
- **Progression**: Quote appears → Character name visible below → Context provides additional detail
- **Success criteria**: Every quote has proper attribution, character names are clearly visible

## Edge Case Handling
- **Empty State**: If no quotes load, display friendly message with retry option
- **Image Loading**: Show skeleton/placeholder while images load to prevent layout shift
- **Rapid Clicking**: Debounce button clicks to prevent animation conflicts
- **Mobile Layout**: Ensure images and text remain readable on small screens

## Design Direction

The design should feel sleek, dark, and cinematic - evoking the moody atmosphere of the show while remaining clean and modern. A minimal interface keeps focus on the quotes and characters.

## Color Selection

Custom palette - Using a dark, crime-thriller aesthetic that reflects the show's tone with deep blues and crimson accents.

- **Primary Color**: Deep Ocean Blue `oklch(0.25 0.08 240)` - Represents the Miami setting and Dexter's calculated nature
- **Secondary Colors**: Dark Navy `oklch(0.18 0.05 240)` for cards and elevated surfaces, creating depth
- **Accent Color**: Blood Crimson `oklch(0.50 0.20 25)` for the action button and important elements, referencing the show's central theme
- **Foreground/Background Pairings**:
  - Background (Deep Navy #0a0f1e): Light text `oklch(0.95 0.01 240)` - Ratio 14.2:1 ✓
  - Card (Darker Navy #060a14): Light text `oklch(0.95 0.01 240)` - Ratio 15.8:1 ✓
  - Primary (Ocean Blue): White text `oklch(0.98 0 0)` - Ratio 8.5:1 ✓
  - Accent (Blood Crimson): White text `oklch(0.98 0 0)` - Ratio 5.2:1 ✓

## Font Selection

Typography should feel modern and cinematic with excellent readability - using Inter for its clean lines and professional appearance that works well for both UI elements and quote text.

- **Typographic Hierarchy**:
  - H1 (App Title): Inter Bold/32px/tight letter spacing
  - Quote Text: Inter Medium/24px/relaxed line height for readability
  - Character Name: Inter SemiBold/16px/normal spacing
  - Button Text: Inter SemiBold/14px/wide letter spacing

## Animations

Animations should be subtle and purposeful, creating smooth transitions between quotes that feel polished without being distracting. The balance leans toward functionality with occasional delightful micro-interactions.

- **Purposeful Meaning**: Fade transitions communicate content changes while maintaining focus on the quote itself
- **Hierarchy of Movement**: Primary focus on quote/image transitions, subtle hover states on interactive elements

## Component Selection

- **Components**: 
  - Card component for quote container with custom dark styling
  - Button component for "New Quote" action with accent color and hover states
  - Avatar/Image component for character pictures with loading states
  - Badge component for character name labels
  
- **Customizations**: 
  - Custom quote card with larger padding and elevated shadow
  - Character image with circular mask and subtle border glow
  
- **States**: 
  - Button: Default (crimson), Hover (lighter crimson with scale), Active (pressed effect), Loading (disabled with spinner)
  - Images: Loading (skeleton), Loaded (fade in), Error (fallback icon)
  
- **Icon Selection**: 
  - Shuffle icon for generating new quotes
  - Quote icon to visually indicate quoted text
  
- **Spacing**: 
  - Container: p-6 md:p-8 for breathing room
  - Quote card: p-8 md:p-12 for prominence
  - Element gaps: gap-6 for related items, gap-8 for sections
  
- **Mobile**: 
  - Stack character image above quote on mobile (<768px)
  - Reduce text sizes by 1-2 steps on mobile
  - Full-width button on mobile, fixed width on desktop
  - Adjust padding from p-8 to p-4 on smallest screens
