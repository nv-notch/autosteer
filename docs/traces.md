# Trace Files

AutoSteer writes trace files for debugging SDK message flow. They live in `~/.autosteer/traces/` and use JSONL format (one JSON object per line).

## Location

```
~/.autosteer/traces/{sessionId}.trace.jsonl
```

## Entry Format

Each entry is a JSON object:

```typescript
{
  "timestamp": "2025-11-09T18:51:35.123Z",    // ISO 8601 timestamp
  "sessionId": "session-abc123",              // Session identifier
  "direction": "to-claude" | "from-claude",   // Message direction
  "rawMessage": { /* SDK message object */ }, // Complete SDK message
  "sdkVersion": "^0.1.0",                     // SDK version
  "correlationId": "550e8400-e29b-41d4",      // Request/response correlation
  "sequenceNumber": 42                         // Monotonic sequence per session
}
```

## Lifecycle

- **Creation**: created automatically when SDK messages are logged
- **Rotation**: rotated when a file exceeds 100MB, with a timestamp suffix
- **Cleanup**: deleted automatically when their project is deleted
- **Manual cleanup**: delete files in `~/.autosteer/traces/` to free disk space

## Example Entry

```json
{
  "timestamp": "2025-11-09T18:51:35.123Z",
  "sessionId": "session-abc123",
  "direction": "from-claude",
  "rawMessage": {
    "type": "assistant",
    "uuid": "550e8400-e29b-41d4-a716-446655440000",
    "session_id": "session-abc123",
    "message": {
      "role": "assistant",
      "content": [{ "type": "text", "text": "Hello!" }]
    }
  },
  "sdkVersion": "^0.1.0",
  "correlationId": "550e8400-e29b-41d4",
  "sequenceNumber": 42,
  "messageType": "assistant",
  "messageSubtype": null
}
```

## Use Cases

- **Debugging**: inspect exact SDK messages sent and received
- **Performance analysis**: track message timing and sequence
- **Error investigation**: review the message flow leading to an error
- **SDK updates**: verify message format changes across SDK versions
