# PRD: Date Picker System — cdk-radial

**Status:** Draft  
**Author:** TBD  
**Last Updated:** 2026-05-05

---

## 1. Problem Statement

The existing date picker components in `cdk-radial` (`DatePicker`, `DateRangePicker`, `DatePickerChips`, `DateRangePickerChips`) are built on top of `react-dates`, a library that is no longer actively maintained. The accumulated tech debt — bundle size, dependency conflicts, outdated patterns — makes `react-dates` untenable as a long-term foundation. These components must be replaced with a new implementation that eliminates that dependency entirely.

This is a breaking replacement, not an additive change. The goal is to deliver a more maintainable, flexible date selection system while reducing the ongoing support burden on the `cdk-radial` team.

---

## 2. Goals

- Remove all `react-dates` dependency from the library
- Replace all four existing date picker components with a new implementation
- Support the full range of date input patterns used across consuming applications
- Reduce the surface area of ongoing support requests
- Give consuming teams enough flexibility to assemble the variants they need without requiring library changes for each new use case
- Maintain or improve accessibility, keyboard navigation, and localization support relative to the current implementation

## 3. Non-Goals

- This effort does not include migrating consuming applications — migration guidance will be produced separately
- This is not a design refresh; visual design follows Radial design tokens
- No new date-related features beyond what is documented in this PRD
- No server-side rendering requirements (unless added after further discovery)

---

## 3.5 Design Philosophy

The date picker system serves two audiences with different kinds of flexibility needs, and those must not be conflated.

**Developer flexibility** is broad: the component family should cover the full range of use cases without requiring library changes, and the API should be expressive enough that teams rarely need workarounds.

**Designer flexibility** is intentionally constrained: components define the visual boundaries of what is possible. Designers choose within those boundaries — they do not spec outside them and expect the library to follow. If the underlying library's rendering doesn't match a designer's exact vision but is within the Radial design language, that is an acceptable outcome. The goal is design system coherence, not pixel-perfect fidelity to any individual spec.

This means: during library evaluation, sufficient styleability is a hard requirement, but "can we make it look exactly like the mock" is not the bar. "Can it look like it belongs in Radial" is.

---

## 4. Consumers

**Primary:** Application teams at CDK Global using `cdk-radial` to build dealership-facing and internal tooling.

**Secondary:** The `cdk-radial` maintainers, who must be able to test, document, and support the system.

**AI Agents:** Automated coding agents generating or modifying UI code are an expected consumer. As AI-assisted development becomes the dominant authoring pattern, the component API and documentation must be machine-readable and unambiguous. This means: explicit, well-typed props (no overloaded catch-alls), clear variant naming, and documentation structured for agent consumption (e.g., via `registry.md` / Storybook MCP). Components should be implementable correctly from types and docs alone, without requiring a human to infer intent from examples.

**End users:** Dealership personnel and internal users interacting with date inputs in web applications.

---

## 5. Component Surface Area

The replacement system must cover the following interaction patterns. These may be delivered as discrete components, a composable system, or some combination — that is an open architectural question (see Section 9).

### 5.1 Single Date Selection
User selects a single calendar date. Displays a calendar grid for month navigation. Supports manual keyboard entry.

### 5.2 Date Range Selection
User selects a start and end date. Calendar visually communicates the selected range. May use a single calendar or dual-month calendar view.

### 5.3 Single Date + Chip Display
A single date selection that also renders the selected date as a dismissible chip/tag in the input area. Allows the user to remove the selection via the chip without reopening the calendar.

### 5.4 Date Range + Chip Display
Same chip behavior as above, but for a date range — renders start and end as chips, individually dismissible.

### 5.5 Time Selection
User selects a time of day (hours, minutes; optionally seconds). Supports 12-hour and 24-hour formats. Exists as a standalone component for contexts where time is the only input needed.

### 5.6 Date + Time Selection (DateTime)
Combined selection of a calendar date and a time of day in a single input/popover flow. Time selection is configured via props on the DateTime component — consumers do not compose a separate `TimePicker` component alongside it. The time input behavior (12h/24h, seconds, step interval) is controlled through the same component's API.

### 5.7 Month/Year Selection
User selects a month and year without selecting a specific day. Used for billing periods, reporting ranges, etc.

### 5.8 Relative Date Selection
User selects a named range rather than a specific date (e.g., "Last 7 days", "Last 30 days", "This month", "Custom"). Used in filters and reporting contexts. Custom option falls back to date range selection.

---

## 6. Functional Requirements

### 6.1 Calendar Navigation
- Navigate between months via previous/next controls
- Jump to a specific month/year via a header control (not just arrow stepping)
- Keyboard navigation within the calendar grid (arrow keys, Enter, Escape, Tab)
- Today's date visually distinguished from selected date

### 6.2 Date Constraints
- Support `minDate` and `maxDate` to disable out-of-range dates
- Support a `disabledDates` predicate or array for disabling arbitrary dates (e.g., holidays)
- Disabled dates must be visually distinct and unreachable via keyboard

### 6.3 Input Behavior
- Manual text entry supported; calendar updates to reflect typed value on valid input
- Input validates on blur; invalid values produce an error state, not a silent failure
- Clearing the input resets the value to empty/uncontrolled state
- Custom validation rules supported via a validator prop or callback, evaluated before form submission; validation errors must surface through the same error state mechanism as built-in validation
- Disabled dates support an optional tooltip to communicate why the date is unavailable (e.g., "Outside booking window", "Holiday"); the tooltip content must be configurable per-date, not globally

### 6.4 Date Range Specifics
- In-progress range selection (start selected, end not yet selected) must have a distinct visual state
- Hovering over a date while in-progress range state previews the range
- Start date cannot be after end date; if user selects an end before the current start, start and end are swapped automatically (see 9.4)

### 6.5 Chip Behavior
- Each chip displays a formatted representation of the selected date or bound
- Chips are individually dismissible
- Dismissing a chip clears the corresponding value and returns focus to the input
- Chips are keyboard accessible (focusable, deletable via Backspace or Delete)

### 6.6 Relative Date Options
- Option list is configurable by consuming teams (not hardcoded)
- Each option maps to a date range resolution function
- "Custom" option, when present, opens a date range picker

### 6.7 Localization
- Date formatting follows locale conventions (month/day/year order, separator characters)
- First day of week configurable (Sunday vs. Monday)
- Month and day names must be localizable
- Time format (12h/24h) must be configurable independent of locale if needed

### 6.8 Time Selection
- Hours and minutes required; seconds optional
- 12-hour mode requires AM/PM selector
- Time input supports keyboard entry in addition to scroll/click controls
- Time validation: no invalid times (e.g., 25:00)

---

## 7. Accessibility Requirements

- All components must meet WCAG 2.1 AA
- Calendar grid must implement appropriate ARIA roles (`grid`, `gridcell`, `row`)
- Selected dates and ranges must be communicated via `aria-selected` and `aria-label`
- Disabled dates must have `aria-disabled`
- Popover/calendar must trap focus when open and restore focus to trigger on close
- Escape always closes the popover
- Month/year header navigation must be keyboard accessible
- Screen reader announcements required for: date selected, range in-progress, date cleared

---

## 8. Non-Functional Requirements

### 8.1 Dependencies
- Zero dependency on `react-dates`
- Zero dependency on `moment` or `moment-timezone`
- Any new underlying library must have an active maintenance record and acceptable bundle cost
- Dependency footprint must be justified — preference for libraries that can be tree-shaken or used as dev dependencies if rendering is internal

### 8.2 Temporal API Compatibility
- The implementation must be compatible with the [TC39 Temporal API](https://tc39.es/proposal-temporal/), either by consuming it directly or by using an underlying library that supports it
- Whether Temporal is used internally or exposed in the public props API is an implementation detail, but the component must not make assumptions (e.g., reliance on `Date` object quirks) that would prevent a future Temporal migration
- This is a forward-compatibility requirement; full Temporal adoption is not required at launch

### 8.3 TypeScript
- Full TypeScript types exported as part of the public API
- Props interfaces must be explicit; no `any` in public surface

### 8.4 Theming
- All visual properties (colors, border radius, typography, spacing) must use Radial design tokens
- No hardcoded color values in component styles
- Dark mode support via token switching, not component-level logic

### 8.5 Bundle Size
- Components must not impose a significant bundle cost on consuming applications
- Components not used must be tree-shakeable

### 8.6 Testing
- Unit tests covering: date constraint logic, keyboard navigation, chip dismissal, range validation
- No visual regression requirement at this stage (to be revisited)

### 8.7 Storybook
- Each component variant documented with interactive controls
- Accessibility panel enabled for all stories

### 8.8 Controlled and Uncontrolled State
- All components must support both controlled and uncontrolled usage patterns
- Uncontrolled mode (internal state, no `value` prop required) should be the simpler path — it is appropriate for most form contexts and reduces boilerplate for consuming teams
- Controlled mode (external `value` + `onChange`) must be fully supported for cases where the application needs to own the state (validation orchestration, multi-field dependencies, server-driven state)
- Components must not mix modes within a single instance; following React conventions, a component that starts uncontrolled must not become controlled and vice versa
- Default values for uncontrolled mode are supported via a `defaultValue` prop

---

## 9. Open Architectural Questions

These are decisions that must be made before implementation begins but are deliberately deferred from this requirements document.

**9.1 ~~Monolithic components vs. composable system~~ — Resolved**  
The initial implementation delivers discrete, monolithic components. If the component surface area requires it, the system may grow into a family of focused components each addressing specific use cases — that is preferred over forcing flexibility into a single component's API. A composable primitive layer may be introduced in a later phase if consuming team needs justify it, but it is not a launch requirement.

**9.2 ~~Underlying library~~ — Deferred to Analysis Phase**  
Library selection is the primary output of the analysis phase that follows this PRD. The requirements in this document serve as the evaluation rubric. Non-negotiable criteria: active maintenance, acceptable bundle size, full TypeScript support, localization, accessibility baseline, and sufficient style override capability to integrate into the Radial design language. Visual parity with the current date picker components is not required — the new implementation establishes a new baseline. Any candidate that cannot be styled to meet Radial's token system without forking the library is disqualified.

**9.3 ~~Range selection UX: single vs. dual calendar~~ — Resolved**  
The date range picker defaults to a single-month calendar view. A dual-month option may be considered post-launch based on consuming team feedback.

**9.4 ~~Range start/end collision behavior~~ — Resolved**  
If a user selects an end date earlier than the current start date, the component swaps start and end automatically. No error state is shown; the selection is treated as valid with the bounds reversed.

**9.5 ~~Relative date option scope~~ — Resolved**  
The relative date picker ships with a default set of options that consuming teams can override or extend. The default set and naming conventions must be defined during the design phase. Teams that provide a custom list replace the defaults entirely; partial overrides are not supported.

**9.6 ~~Chips as a variant vs. a separate concern~~ — Resolved**  
Chip display is implemented as separate components (`DatePickerChips`, `DateRangePickerChips`) rather than a prop on the base pickers. This keeps individual components focused and avoids bloating the base API with variant-specific logic. Consolidation into a prop-based variant may be revisited once usage patterns across consuming teams are better understood.

**9.7 ~~Migration compatibility layer~~ — Resolved**  
The new components make no attempt to match the existing prop API. A migration guide will be produced separately. Since consuming teams must perform a migration regardless, a compatibility shim would constrain the new API design without meaningfully reducing migration effort — and would likely conflict with the API shape of whichever underlying library is selected.

---

## 10. Out of Scope

- Date picker inside a data grid cell (separate concern — AG Grid integration)
- Recurring date selection (e.g., "every Monday")
- Multi-date selection (select multiple non-contiguous dates)
- Native mobile date pickers are supported as an opt-in behavior via a prop (e.g., `useNativePicker`), giving developers explicit control over when to defer to the platform. This is not the default; the custom picker renders by default across all contexts.
- Calendar/scheduling views (this is a form input, not a calendar widget)
