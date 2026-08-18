# AI-Narrated Write-Up — Demo Video Script

Companion script for `ai_narrated_writeup_prototype.html`. Scenes follow the prototype's screen order. Each scene has the on-screen action and a suggested voiceover (VO) for framing the concept. Scene 3's dialogue is the real walkaround narration already captured on video (`walkaround_narration.mp4`), with cue times matched to the actual audio.

---

## Scene 1 — Appointments (the starting point)

**On screen:** Advisor's appointment list, Pete Giancarlo Davidson Soprano's 7:30 AM appointment, tapping "Write Up."

**VO (optional framing):**
> "Every write-up starts here. Today, an advisor taps in and works through six sections by hand — customer info, vehicle, RO details, a walkaround, a 16-point inspection, and services. It works, but it's a lot of typing on a small screen, often standing in a service bay."

---

## Scene 2 — Start screen (introducing the new flow)

**On screen:** Vehicle context card, the "NEW" badge, the five-item checklist preview (Lights & glass, Tires, Body condition, Odometer & tag, Customer concern).

**VO:**
> "Here's the idea: instead of filling out a form, the advisor just walks the vehicle and talks — the way they'd naturally describe it to a colleague. Everything they say gets turned into the write-up automatically."

**On-screen tap:** "Start Narrated Walkaround"

*(Optional cutaway: tap "See today's manual process instead" to show the empty six-section form for a quick before/after contrast, then return.)*

---

## Scene 3 — The narrated walkaround (core demo footage)

**On screen:** Full-screen recording view — the real walkaround video (`walkaround_narration.mp4`, 69 seconds) plays back with a REC indicator, live waveform overlay, a coverage checklist ticking off items in real time, and captions synced to the actual audio.

**This is the real, already-recorded dialogue** (verbatim from the footage), with cue times anchored to the actual pause points in the audio:

| Cue | Line |
|---|---|
| 0:00 | "Starting a walk around on the Corolla." |
| 0:01 | "Odometer reading 34,218." |
| 0:08 | "Tag number is bravo 411." |
| 0:12 | "Windshield's got a small chip on it in the lower corner, calling that a yellow." |
| 0:22 | "Wipers look good." |
| 0:22 | "Dash lights look good, no warnings." |
| 0:29 | "Front left tire, tread about 6/32. Pressure is good. Wear is even." |
| 0:31 | "Headlights, turn signals, hazards — they're all working." |
| 0:35 | "Front right tire, a bit lower, maybe 4/32. Pressure is good. Wear is even." |
| 0:41 | "Rear right tire — this one's low, it looks like about 2/32. Pressure is fine but wear looks a little uneven on the outer edges." |
| 0:44 | "Tail lights, brake lights — both green." |
| 0:50 | "Rear left tire, 6/32. Pressure is good, even wear." |
| 0:54 | "There's a small scratch on the rear left quarter panel, nothing major." |
| 0:58 | "And the customer mentioned the brakes have been making loud squeaking noises." |
| 1:07 | "She said it started about a week ago." |

**Note:** the actual recording doesn't follow this exact order every time — the advisor circled back to headlights/turn signals after the first tire, and tail/brake lights after the third tire, which is realistic for how someone actually walks a car. The prototype's checklist and cue timings were adjusted to match.

**VO overlay (if narrating the concept alongside the walkaround audio rather than just letting it play):**
> "Lights, tires, condition, odometer, even what the customer said — all captured in one natural pass, no typing required."

---

## Scene 4 — Processing

**On screen:** Spinner with sequential checkmarks: Transcribing narration → Reading odometer & tag → Matching inspection checklist → Detecting vehicle condition → Drafting customer concern.

**VO:**
> "In the background, AI transcribes the narration and maps it straight onto the write-up's existing fields — the same fields, just filled in automatically."

---

## Scene 5 — Auto-filled review

**On screen:** The write-up form, now populated — RO Info, Walkaround (video + notes), all 16 inspection points, and the Services section with the customer's concern already captured. Small tags mark what came from the video and what still needs a quick confirm.

**VO:**
> "Five of six sections are done. Anything AI is confident about gets filled in and tagged so the advisor can see exactly where it came from. Anything uncertain — like a tag number or a screen an advisor should verify — gets flagged instead of guessed."

---

## Scene 6 — Conversational gap-fill

**On screen:** Chat-style confirmation for the handful of uncertain items.

**Exact chat script:**

1. **AI:** "Nice work — I pulled most of this from your walkaround. Three quick things to confirm."
   **Advisor taps:** "Let's go"
2. **AI:** "I heard the tag as 'Bravo four one one' — I've entered it as BRAV411. Did you mean B411?"
   **Advisor taps:** "Yes, B411" *(or "No, let me fix it")*
3. **AI:** "Got it, noted. You mentioned a chip on the windshield — want me to add a note for the tech?"
   **Advisor taps:** "Yes, add note" *(or "Skip")*
4. **AI:** "Rear right tread is at 2/32\" — that's near the legal minimum. Want me to add a tire replacement recommendation to Services?"
   **Advisor taps:** "Add recommendation" *(or "Not now")*
5. **AI:** "All set. Your write-up is complete — take a look before you submit."
   **Advisor taps:** "Review Write-Up"

**VO:**
> "Only the genuinely ambiguous items come back to the advisor — and AI doesn't just fill gaps, it flags things worth acting on, like a tire nearing its legal minimum."

---

## Scene 7 — Final write-up

**On screen:** Completed write-up, 6/6 tasks, updated estimated charges, "Submit Write-Up."

**VO (closing line):**
> "What used to take a form full of taps now takes one walk around the car and a few taps to confirm. Same data, same fields — just a mobile experience built for someone standing in a service bay, not sitting at a desk."

---

### Notes for filming
- Scene 3 is no longer something to record fresh — it's the actual walkaround footage (`walkaround_narration.mp4`) already embedded in the prototype, so this scene of the finished demo video can simply be a screen recording of the prototype playing it back.
- Everything else (Scenes 1, 2, 4–7) can be captured as screen recording of the prototype with VO laid over it afterward.
- If you want a shorter cut, Scenes 1 and 2 (Appointments + Intro) can be trimmed to a single title card — the walkaround (Scene 3) and the auto-filled review (Scene 5) are the parts that sell the concept.
