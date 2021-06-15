export default function extractDataFromSSRResponse(relayData) {
  return relayData?.[0]?.[1]?.data || null;
}
