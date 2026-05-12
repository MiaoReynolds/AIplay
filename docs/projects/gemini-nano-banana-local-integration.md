# Integrate Gemini Nano Banana in Local Apps
## Gemini 2.5 Flash Image API Guide (2026)

If you want to call **Nano Banana** (Gemini image generation) from a local mini app or desktop app, you need to configure API access in Google AI Studio and send requests in the correct JSON format.

This guide follows the latest Gemini API usage pattern and gives you a practical integration template.

---

## 1. Access and Base Configuration

Before coding, prepare your API key and endpoint.

### Get API Key

1. Go to [Google AI Studio](https://aistudio.google.com)
2. Sign in
3. Click `Create API Key`

### Endpoint

```text
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent
```

### Request Method

`POST`

### Required Headers

```text
Content-Type: application/json
x-goog-api-key: YOUR_API_KEY
```

---

## 2. Request Format (JSON Payload)

Put your image prompt inside `contents[].parts[].text`.

To force image output, set `response_modalities` to `["IMAGE"]`.

```json
{
  "contents": [
    {
      "parts": [
        { "text": "A cat drinking coffee on a cyberpunk rooftop, cinematic lighting, 4k resolution" }
      ]
    }
  ],
  "generationConfig": {
    "response_modalities": ["IMAGE"],
    "candidate_count": 1,
    "aspect_ratio": "1:1"
  }
}
```

---

## 3. Response Handling

Gemini image output is returned as Base64 in `inline_data.data`.

### Response Shape (simplified)

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "inline_data": {
              "mime_type": "image/png",
              "data": "iVBORw0KGgoAAAANSUhEUgAA..."
            }
          }
        ]
      }
    }
  ]
}
```

### Mini-app Frontend Rendering

Build a data URL:

```text
data:image/png;base64,<BASE64_STRING>
```

Then bind it to your `<image>` component.

---

## 4. Model Selection Tips

Choose model IDs based on latency, quality, and reasoning needs.

| Nickname | Model ID | Typical Use |
|---|---|---|
| Nano Banana | `gemini-2.5-flash-image` | Fastest response, low-latency generation for mini apps. |
| Nano Banana 2 | `gemini-3.1-flash-image-preview` | Better quality/understanding if available in your account. |
| Nano Banana Pro | `gemini-3-pro-image-preview` | Highest quality and advanced instruction following. |

Note: preview model availability can vary by region/account and may change over time.

---

## 5. Quick cURL Test

Use this in early development to validate credentials and payload quickly:

```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{
    "contents": [
      { "parts": [ { "text": "A futuristic laboratory with neon lights" } ] }
    ],
    "generationConfig": {
      "response_modalities": ["IMAGE"]
    }
  }'
```

---

## 6. Security and Production Advice

Do not expose your API key directly in client-side code.

Recommended architecture:

1. Mini app / local app calls your own backend proxy (Node.js or Python)
2. Backend injects API key server-side
3. Backend calls Gemini API and returns safe response

Also plan for:

- Rate limiting and retries
- Request logging
- Error mapping for frontend UX

---

## 7. Common Integration Checklist

- API key created and enabled
- Correct endpoint and model ID
- `x-goog-api-key` in headers
- `response_modalities: ["IMAGE"]` set
- `inline_data.data` parsed correctly
- Base64 data URL rendered in UI
- API key protected by backend proxy

---

With this structure, you can quickly integrate Nano Banana image generation into local mini apps while keeping latency low and credentials secure.
