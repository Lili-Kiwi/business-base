export const URL = `https://api.airtable.com/v0/${
  import.meta.env.VITE_BASE_ID
}/${import.meta.env.VITE_TABLE_NAME}`;

export const categoryOptions = [
  { value: "cleaning", label: "cleaning" },
  { value: "catering", label: "catering" },
  { value: "childcare", label: "childcare" },
  { value: "auto services", label: "auto" },
  { value: "education", label: "education" },
  { value: "healthcare", label: "healthcare" },
  { value: "retail", label: "retail" },
  { value: "technology", label: "technology" }
];
