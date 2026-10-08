# SDK Migration Guide

This guide covers handling Anthropic Claude SDK updates without breaking message validation.

## Updating `@anthropic-ai/claude-agent-sdk`

1. **Check for breaking changes**: review the SDK release notes, then test validation against the new SDK types.
2. **Update Zod schemas**: in `src/services/MessageValidator.ts`, match schemas to the new SDK types and keep relaxed validation for backward compatibility.
3. **Test validation**:
   ```bash
   pnpm test:unit -- MessageValidator.test.ts
   ```
4. **Update the trace documentation** in [traces.md](traces.md) with any new message types.

## Adding a New Message Type

1. Add a Zod schema in `MessageValidator.ts`, include it in the discriminated union, and update the type guards.
2. Add tests for strict and relaxed validation, and for partial extraction.

```typescript
// Add to MessageValidator.ts
const NewMessageTypeSchema = z.object({
  type: z.literal('new_type'),
  uuid: z.string().uuid(),
  session_id: z.string(),
  // ... other fields
});
```

## Handling a Breaking Change

1. **Identify it**: check validation test failures, review trace logs for error patterns, and compare the old and new message structures.
2. **Update schemas gradually**: keep the deprecated field alongside the new one.
   ```typescript
   // Old field (deprecated but still supported)
   old_field: z.string().optional(),

   // New field (preferred)
   new_field: z.string().optional(),
   ```
3. **Add migration logic** that handles both formats, logs warnings for deprecated fields, and phases out the old format.
4. **Track versions**: record the SDK version in trace logs and document version requirements.

## Testing a Migration

```bash
pnpm test:unit -- MessageValidator
pnpm test:integration -- message-validation
pnpm typecheck
```

## Rollback Strategy

1. **Immediate**: revert to the previous SDK version.
2. **Short term**: deploy a hotfix with relaxed validation.
3. **Long term**: fix the schemas and redeploy.

## Best Practices

- Test with real message fixtures before deploying.
- Keep backward compatibility for at least two SDK versions.
- Document breaking changes in PR descriptions.
- Use relaxed validation as a fallback so new formats don't crash the app.
- Monitor trace logs for validation failures after updates.
