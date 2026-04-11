/**
 * Display options for the work history timeline (`WorkDirectory`).
 * Extend this type when adding new visual or behavioral toggles.
 */
export type WorkTimelineDisplayOptions = {
	/** When true, shows the animated “charge” sweep along the vertical rail. */
	chargeAnimation: boolean
	/** One full sweep duration in seconds (CSS custom property `--timeline-charge-duration`). */
	chargeDurationSec: number
	/** Render circular nodes where each role meets the rail. */
	showNodes: boolean
	/** Fade/slide entries in on load (subtle stagger). */
	entryMotion: boolean
}

export const DEFAULT_WORK_TIMELINE_OPTIONS: WorkTimelineDisplayOptions = {
	chargeAnimation: true,
	chargeDurationSec: 3.5,
	showNodes: true,
	entryMotion: true
}

/** Merge defaults with partial overrides (e.g. from page frontmatter later). */
export function resolveWorkTimelineOptions(
	partial?: Partial<WorkTimelineDisplayOptions>
): WorkTimelineDisplayOptions {
	return { ...DEFAULT_WORK_TIMELINE_OPTIONS, ...partial }
}
