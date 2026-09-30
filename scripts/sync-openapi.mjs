// Copies the OpenAPI spec from the API repo into this docs site so
// `gen-api-docs` always reads the current contract. Override the source
// with the OPENAPI_SOURCE env var if the API repo lives elsewhere.
//
// Once the API serves its spec publicly, set OPENAPI_SPEC_URL (see
// docusaurus.config.ts) and this script becomes a no-op: gen-api-docs will
// fetch the spec straight from that URL instead of this local copy.
import { copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

if (process.env.OPENAPI_SPEC_URL) {
  console.log(
    `[sync-openapi] OPENAPI_SPEC_URL is set (${process.env.OPENAPI_SPEC_URL}); skipping local sync.`
  );
  process.exit(0);
}

const DEFAULT_SOURCE =
  "I:/JetBrains/GC-Stats/WebsiteNew/apps/web/openapi.json";

const __dirname = dirname(fileURLToPath(import.meta.url));
const source = resolve(process.env.OPENAPI_SOURCE ?? DEFAULT_SOURCE);
const target = resolve(__dirname, "../openapi/gc-stats.json");

if (!existsSync(source)) {
  if (existsSync(target)) {
    console.warn(
      `[sync-openapi] Source spec not found at ${source}; reusing last synced copy at ${target}.`
    );
    process.exit(0);
  }
  console.error(
    `[sync-openapi] Source spec not found at ${source}, and no previously synced copy exists at ${target}. ` +
      `Set OPENAPI_SOURCE to override.`
  );
  process.exit(1);
}

copyFileSync(source, target);
console.log(`[sync-openapi] Synced ${source} -> ${target}`);
