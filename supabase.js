const SUPABASE_URL = 'https://wyubttswmsqcmhxovsyq.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_tl8zXoLT_kVKIzSV4RFCrw_L0tXYZTc';

export async function saveContactMessage(message) {
  const response = await fetch(SUPABASE_URL + '/rest/v1/contact_messages', {
    method: 'POST',
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: 'Bearer ' + SUPABASE_PUBLISHABLE_KEY,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error('Supabase returned ' + response.status + ': ' + details);
  }
}
