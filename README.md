# Context Room

10 spatialized pairs of multi-party conversations, 50 multiple-choice questions, and a model smoke-test results view.

Open index.html via a static HTTP server. All assets use relative URLs and work on GitHub Pages. Audio is 60-second stereo PCM WAV; no backend, account, API key or paid inference is required to listen.

## Models and results
The results area only shows runs on spatial-context-v1. Older HEAR/NOTSOFAR connectivity tests do not count as results here. Empty means not run, not zero accuracy. Transcription-only models require a reader before they can answer MCQs. Channel handling must be recorded.

Add actual run JSON records conforming to result-schema.json to the private benchmark model-results directory on Beluga, rebuild the export, then deploy. The export checks waveform SHA256, model, question IDs and conditions, computes correctness from gold, and only exports allowlisted fields. Never publish credentials or raw provider responses.

## Dataset
4 NOTSOFAR meetings and CHiME-6 S02; windows are not independent sessions. Group-level sound sources, no individual seating. Human headphone review is still pending. These are diagnostic examples, not official benchmark scores.

Attribution, source licenses and adaptation details: [ATTRIBUTION.md](ATTRIBUTION.md). Audio and original site contributions: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
