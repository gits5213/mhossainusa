export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
}

// This will be populated from LinkedIn API
export const certifications: Certification[] = [
  // Placeholder - will be fetched from LinkedIn
];

