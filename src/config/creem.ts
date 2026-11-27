// ============================================================================
// fallen75.com - EDITABLE CREEM PAYMENT CONFIGURATION
// Edit all prices and all Creem links here in one place.
// ============================================================================

export interface CreemProduct {
  id: 'releasedMp3' | 'unreleasedWav' | 'unreleasedPack10' | 'permanentLicense';
  status: 'RELEASED' | 'UNRELEASED';
  licenseName: string;
  price: number;
  priceFormatted: string;
  buttonText: string;
  link: string;
  description: string;
}

export const CREEM_CONFIG = {
  brandName: 'FALLEN75',
  siteDomain: 'fallen75.com',
  checkoutNote: 'After payment, write the Beat Name / Beat Names at checkout on Creem.',
  products: {
    releasedMp3: {
      id: 'releasedMp3',
      status: 'RELEASED',
      licenseName: 'RELEASED - MP3 License',
      price: 1.0,
      priceFormatted: '$1.00',
      buttonText: 'Buy MP3 - $1.00',
      link: 'https://www.creem.io/payment/prod_35P7g5itdW4ytsIHc9vgBZ',
      description: 'Released - MP3 - Personal use',
    },
    unreleasedWav: {
      id: 'unreleasedWav',
      status: 'UNRELEASED',
      licenseName: 'UNRELEASED - WAV License',
      price: 2.45,
      priceFormatted: '$2.45',
      buttonText: 'Buy WAV - $2.45',
      link: 'https://www.creem.io/payment/prod_5E701tbx3wXcTie3aCMtrk',
      description: 'Unreleased - WAV 24-bit - 1 release',
    },
    unreleasedPack10: {
      id: 'unreleasedPack10',
      status: 'UNRELEASED',
      licenseName: 'UNRELEASED - 10-Track Pack',
      price: 30.0,
      priceFormatted: '$30.00',
      buttonText: 'Buy 10-Track Pack - $30.00',
      link: 'https://www.creem.io/payment/prod_7kcKZnJ8lwBorM0zHm5DLg',
      description: 'Unreleased - 10 Beats - WAV 24-bit',
    },
    permanentLicense: {
      id: 'permanentLicense',
      status: 'UNRELEASED',
      licenseName: 'Permanent License',
      price: 49.0,
      priceFormatted: '$49.00',
      buttonText: 'Buy Permanent License - $49.00',
      link: 'https://www.creem.io/payment/prod_5u3cTuuduQTUfXCIjzVzsl',
      description: 'Permanent - Lifetime - WAV 24-bit - Unlimited streams',
    },
  } as Record<'releasedMp3' | 'unreleasedWav' | 'unreleasedPack10' | 'permanentLicense', CreemProduct>,
};

export const CREEM_PRODUCTS_LIST: CreemProduct[] = [
  CREEM_CONFIG.products.releasedMp3,
  CREEM_CONFIG.products.unreleasedWav,
  CREEM_CONFIG.products.unreleasedPack10,
  CREEM_CONFIG.products.permanentLicense,
];
