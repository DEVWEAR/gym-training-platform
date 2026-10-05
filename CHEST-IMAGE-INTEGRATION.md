# Chest demonstration integration

36 original exercise PNGs visually rechecked; 21 used, 15 unused. All originals retained with their original filenames and bytes. No exercises added; all 38 chest definitions unchanged.

The shared chest-demonstrations.js registry is the sole uploaded-image mapping. Each selected composite appears once on its matching card in the library or quick picker; it is not displayed in detail dialogs, workout pages, anatomy views, or instruction panels. Each mapped card has a bilingual button exposing three short lines: execution, target muscle, benefit.

Exercises without a confirmed mapping receive no demonstration image, remain selectable, and have no new instruction button. Existing anatomy assets and non-chest detail rendering are preserved.

## Used images

| Image | Existing exercise | Exercise ID |
|---|---|---|
| 05223FA7-CD70-4398-A9A3-0132B8907A6B.png | Low to High Cable Fly | low-high-cable-fly |
| 17773789-EDFC-4582-B9D9-F1AF94D9033F.png | Pec Deck Fly | pec-deck-fly |
| 24093304-D65B-41E4-B046-6B39FF2403F4.png | Decline Smith Machine Press | decline-smith-press |
| 27F67D8F-98E7-44F8-87FC-D5DED2856FC9.png | Push-Up | push-up |
| 2CF7C9B2-5541-4E43-8A3C-4F8044A8F40E.png | Incline Smith Machine Press | incline-smith-press |
| 42B80713-5EBC-45A3-BC31-8A6A3485F0BB.png | Chest Press Machine | chest-press-machine |
| 5F43A0C8-303B-4939-8825-1A2148722849.png | Incline Plate-Loaded Chest Press | incline-plate-press |
| 677BF255-B25D-4161-BD74-A866B61F1C85.png | Seated Cable Chest Press | seated-cable-chest-press |
| 6A05A5BC-46E8-48B5-84D5-6A3053A99B30.png | Decline Dumbbell Press | decline-db-press |
| 717BA847-94C8-4924-9A50-E9734953A59A.png | Incline Barbell Press | incline-bb-press |
| 77453A0E-D80F-4827-8BC2-2B57B0043168.png | Dumbbell Bench Press | flat-db-press |
| 86DB7340-2B54-408E-A167-62A713FE9607.png | High to Low Cable Fly | high-to-low-fly |
| AE2DCC54-BFCA-40FB-9000-C1D648F5F653.png | Mid Cable Fly | mid-cable-fly |
| B8315D53-8E14-4570-8000-F3473A90E38E.png | Dumbbell Chest Fly | db-chest-fly |
| C6F2E64B-92B8-48F5-82BB-6EC5CB5C3AE9.png | Wide-Grip Push-Up | wide-push-up |
| C8F189E0-6E70-4A3F-80F3-6A527D4E2A94.png | Incline Cable Fly | incline-cable-fly |
| C9BA4DCD-B5F5-4130-BFB1-A62805BEDE3D.png | Barbell Bench Press | flat-bb-press |
| CAD5038B-C2D9-46E2-B55E-9DE8FBE845DC.png | Incline Dumbbell Press | incline-db-press |
| CCF6049B-3D0A-44BB-95A8-3FD67C103CF2.png | Plate-Loaded Chest Press | plate-loaded-chest-press |
| D2479C1E-43B5-4303-AB7B-690D5789DFE3.png | Dumbbell Pullover | dumbbell-pullover |
| F1E4EBE4-E47F-4665-9945-FAD04109C324.png | Decline Barbell Press | decline-bb-press |

## Unused images

| Image | Reason |
|---|---|
| 1F6E3528-E1CA-4110-BF3E-D642D93146AA.png | Weighted dips; no exact weighted-dips chest entry. |
| 254269E8-20AF-4D8A-A4CB-64DAAFF4E1FB.png | Lying plate-loaded press alternative; seated CCF6049B better matches the existing forward-press guide. |
| 39F20087-57A5-43A0-8138-4D0B730A9094.png | Reclined selectorized press; exact upper-chest machine intent remains uncertain. |
| 469B35A0-DC69-4295-AEE9-0F410301C348.png | Ambiguous incline squeeze/close-grip dumbbell press; no exact existing entry. |
| 55896A66-D6FA-4CA2-9D6F-EEE204F744A9.png | Assisted dips; chest emphasis uncertain and no dedicated assisted-dips entry. |
| C010124A-583D-4D8A-82DF-1225E90B6622.png | Incline squeeze/close-grip dumbbell press; no exact existing entry. |
| C117D5E8-D163-478C-9F91-F15C8FA424D0.png | Decline plate-loaded bench press; differs from the existing downward-path machine guide. |
| C36BF75E-B828-4687-949E-DB1A81328A87.png | Steep upward plate-loaded press; chest versus shoulder emphasis uncertain. |
| D20940EC-9BF7-4236-933A-B37C8D2F1B12.png | Feet-elevated decline push-up; no exact existing entry. |
| D8ABB72E-4E62-4447-B032-526A3ADEEFD8.png | Hands-elevated incline push-up; no exact existing entry. |
| DD90FABB-1702-4D1E-B8D0-4A91999B64DB.png | High-pulley crossover; overlaps high-to-low fly but endpoint differs. Clearer 86DB7340 selected. |
| E88B9D9A-8510-4A9E-B4F2-CF29B4423984.png | Flat versus shallow-incline fly unclear; clearer flat B8315D53 selected. |
| E9E172F1-963A-46E5-8371-39C0151E78C0.png | Shallow-incline Smith press; not confidently flat. Clearer incline 2CF7C9B2 selected. |
| F0374555-E15E-4397-9E0B-66C9579BA56C.png | Seated cable fly; no exact existing seated-fly entry. |
| F24DE0A4-760E-4F35-8B9E-D042A8FF9115.png | Inclined low-pulley cable press; upright 677BF255 better matches seated chest-press guide. |

## Files changed

- index.html: shared card renderer, help controls, language refresh, and selectable imageless exercises.
- exercises.html: confirmed local card images, help controls, and chest images restricted to cards.
- chest-demonstrations.js (new): mapping, bilingual concise guidance, shared UI helper.
- chest-demonstrations.css (new): scoped image containment, help styles, visible exercise names and mobile card layout.
- CHEST-IMAGE-INTEGRATION.md (new): full image accounting and decisions.

## Verification

- Unique mappings: 21 distinct images mapped to 21 existing chest IDs.
- All mapped paths exist; 36 PNGs partition into 21 used and 15 unused.
- Changed-page JavaScript syntax checks passed.
- All original images, exercise-library.js, workout.html and unrelated source files are byte-for-byte unchanged.
- Headless Edge checks passed: all 21 images decoded, exact card mapping, no duplicate files, card-only placement, English/Arabic and RTL/LTR, short help toggles, favorites/search, quick-picker and plan selections, mobile overflow, and workout smoke test. No JavaScript errors on these flows. External dataset requests were blocked to verify the local integration works independently.
- A broad syntax scan also found a pre-existing JavaScript syntax error in untouched progress.html; this unrelated page was not modified.
