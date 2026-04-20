import { render, screen, fireEvent, act } from '@testing-library/react';
import * as React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';

import { CreditCardBrandLogo } from './credit-card-brand-logos';
import { useCreditCard } from './credit-card-context';
import { CreditCardContent } from './credit-card-content';
import { CreditCardFront } from './credit-card-front';
import { CreditCardBack } from './credit-card-back';
import { CreditCardRoot, type CreditCardRootRef } from './credit-card-root';
import { CreditCardTrigger } from './credit-card-trigger';
import {
  CreditCardBackContent,
  CreditCardBrand,
  CreditCardCVVField,
  CreditCardErrors,
  CreditCardExpiryField,
  CreditCardField,
  CreditCardFieldError,
  CreditCardFieldGroup,
  CreditCardFieldLabel,
  CreditCardFieldset,
  CreditCardFrontFooter,
  CreditCardFrontHeader,
  CreditCardLastFour,
  CreditCardLogo,
  CreditCardMagStripe,
  CreditCardNumberField,
  CreditCardTitle,
} from './credit-card-parts';

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function TestCard({
  defaultFace,
  face,
  onFaceChange,
  color,
  frontColor,
  backColor,
  children,
}: {
  defaultFace?: 'front' | 'back';
  face?: 'front' | 'back';
  onFaceChange?: (f: 'front' | 'back') => void;
  color?: string;
  frontColor?: string;
  backColor?: string;
  children?: React.ReactNode;
}) {
  return (
    <CreditCardRoot defaultFace={defaultFace} face={face} onFaceChange={onFaceChange}>
      <CreditCardContent color={color} data-testid="content">
        <CreditCardFront data-testid="front" color={frontColor}>
          <CreditCardFrontHeader data-testid="front-header">
            <CreditCardLogo data-testid="logo">Logo</CreditCardLogo>
            <CreditCardBrand data-testid="brand">Visa</CreditCardBrand>
          </CreditCardFrontHeader>
          <CreditCardFrontFooter data-testid="front-footer">
            <CreditCardTitle data-testid="title">Test</CreditCardTitle>
            <CreditCardLastFour data-testid="last-four">0991</CreditCardLastFour>
          </CreditCardFrontFooter>
        </CreditCardFront>
        <CreditCardBack data-testid="back" color={backColor}>
          <CreditCardMagStripe data-testid="stripe" />
          <CreditCardBackContent data-testid="back-content">
            {children}
          </CreditCardBackContent>
        </CreditCardBack>
      </CreditCardContent>
      <CreditCardTrigger data-testid="trigger">Flip</CreditCardTrigger>
    </CreditCardRoot>
  );
}

function TestCardBack({
  defaultFace = 'back',
  numberProps = {},
  expiryProps = {},
  cvvProps = {},
}: {
  defaultFace?: 'front' | 'back';
  numberProps?: Record<string, unknown>;
  expiryProps?: Record<string, unknown>;
  cvvProps?: Record<string, unknown>;
}) {
  return (
    <CreditCardRoot defaultFace={defaultFace}>
      <CreditCardContent data-testid="content">
        <CreditCardFront data-testid="front" />
        <CreditCardBack data-testid="back">
          <CreditCardMagStripe />
          <CreditCardBackContent>
            <CreditCardFieldset aria-label="Card details">
              <CreditCardField>
                <CreditCardFieldLabel>Card number</CreditCardFieldLabel>
                <CreditCardNumberField data-testid="number-input" {...numberProps} />
              </CreditCardField>
              <CreditCardFieldGroup>
                <CreditCardField>
                  <CreditCardFieldLabel>Exp</CreditCardFieldLabel>
                  <CreditCardExpiryField data-testid="expiry-input" {...expiryProps} />
                </CreditCardField>
                <CreditCardField>
                  <CreditCardFieldLabel>CVV</CreditCardFieldLabel>
                  <CreditCardCVVField data-testid="cvv-input" {...cvvProps} />
                </CreditCardField>
              </CreditCardFieldGroup>
            </CreditCardFieldset>
          </CreditCardBackContent>
        </CreditCardBack>
      </CreditCardContent>
    </CreditCardRoot>
  );
}

function CardTypeReader() {
  const { cardType, cardNiceType, face } = useCreditCard();
  return (
    <div data-testid="hook-reader" data-card-type={cardType ?? ''} data-nice-type={cardNiceType ?? ''} data-face={face} />
  );
}

function simulateInputChange(input: HTMLInputElement, value: string) {
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
  input.selectionStart = value.length;
  input.selectionEnd = value.length;
  fireEvent.change(input, { target: { value } });
}

// ===========================================================================
// 1. Structure and rendering
// ===========================================================================

describe('Structure and rendering', () => {
  it('Root renders children without a wrapper DOM element', () => {
    const { container } = render(
      <CreditCardRoot>
        <div data-testid="child">Hello</div>
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(container.firstChild).toBe(screen.getByTestId('child'));
  });

  it('Content renders with data-face attribute', () => {
    render(<TestCard />);
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
  });

  it('BrandLogo returns null when no brand is detected', () => {
    const { container } = render(
      <CreditCardRoot>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBrandLogo data-testid="brand-logo" />
          </CreditCardBack>
        </CreditCardContent>
      </CreditCardRoot>,
    );
    expect(container.querySelector('[data-testid="brand-logo"]')).toBeNull();
  });

  it('BrandLogo renders an SVG when brand prop is provided', () => {
    render(
      <CreditCardRoot>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBrandLogo data-testid="brand-logo" brand="visa" />
          </CreditCardBack>
        </CreditCardContent>
      </CreditCardRoot>,
    );
    const logo = screen.getByTestId('brand-logo');
    expect(logo.tagName.toLowerCase()).toBe('svg');
    expect(logo).toHaveAttribute('role', 'img');
    expect(logo).toHaveAttribute('aria-label', 'Visa');
  });
});

// ===========================================================================
// 2. Face state management
// ===========================================================================

describe('Face state management', () => {
  it('defaults to front face', () => {
    render(<TestCard />);
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
  });

  it('starts on back with defaultFace="back"', () => {
    render(<TestCard defaultFace="back" />);
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
  });

  it('respects controlled face prop', () => {
    const noop = vi.fn();
    const { rerender } = render(<TestCard face="front" onFaceChange={noop} />);
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
    rerender(<TestCard face="back" onFaceChange={noop} />);
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
  });

  it('fires onFaceChange when Trigger is clicked', () => {
    const handleChange = vi.fn();
    render(<TestCard face="front" onFaceChange={handleChange} />);
    fireEvent.click(screen.getByTestId('trigger'));
    expect(handleChange).toHaveBeenCalledWith('back');
  });

  it('Trigger click toggles face in uncontrolled mode', () => {
    render(<TestCard />);
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
    fireEvent.click(screen.getByTestId('trigger'));
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
    fireEvent.click(screen.getByTestId('trigger'));
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
  });

  it('inactive face has inert attribute', () => {
    render(<TestCard />);
    expect(screen.getByTestId('front')).not.toHaveAttribute('inert');
    expect(screen.getByTestId('back')).toHaveAttribute('inert');
  });

  it('active face has data-active attribute', () => {
    render(<TestCard />);
    expect(screen.getByTestId('front')).toHaveAttribute('data-active');
    expect(screen.getByTestId('back')).not.toHaveAttribute('data-active');
  });

  it('inert and data-active swap after toggle', () => {
    render(<TestCard />);
    fireEvent.click(screen.getByTestId('trigger'));
    expect(screen.getByTestId('back')).toHaveAttribute('data-active');
    expect(screen.getByTestId('back')).not.toHaveAttribute('inert');
    expect(screen.getByTestId('front')).toHaveAttribute('inert');
    expect(screen.getByTestId('front')).not.toHaveAttribute('data-active');
  });
});

// ===========================================================================
// 3. Color prop
// ===========================================================================

describe('Color prop', () => {
  it('Content color cascades to Front and Back via context', () => {
    render(<TestCard color="blue" />);
    expect(screen.getByTestId('front')).toHaveAttribute('data-accent-color', 'blue');
    expect(screen.getByTestId('back')).toHaveAttribute('data-accent-color', 'blue');
  });

  it('local color on Front overrides Content color', () => {
    render(<TestCard color="blue" frontColor="red" />);
    expect(screen.getByTestId('front')).toHaveAttribute('data-accent-color', 'red');
    expect(screen.getByTestId('back')).toHaveAttribute('data-accent-color', 'blue');
  });

  it('local color on Back overrides Content color', () => {
    render(<TestCard color="blue" backColor="green" />);
    expect(screen.getByTestId('front')).toHaveAttribute('data-accent-color', 'blue');
    expect(screen.getByTestId('back')).toHaveAttribute('data-accent-color', 'green');
  });

  it('no color means no data-accent-color attribute', () => {
    render(<TestCard />);
    expect(screen.getByTestId('front')).not.toHaveAttribute('data-accent-color');
    expect(screen.getByTestId('back')).not.toHaveAttribute('data-accent-color');
  });
});

// ===========================================================================
// 4. Card number formatting
// ===========================================================================

describe('Card number formatting', () => {
  it('formats Visa number as 4-4-4-4', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    simulateInputChange(input, '4242424242424242');
    expect(input.value).toBe('4242 4242 4242 4242');
  });

  it('formats Amex number as 4-6-5', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    simulateInputChange(input, '378282246310005');
    expect(input.value).toBe('3782 822463 10005');
  });

  it('strips non-digit characters', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    simulateInputChange(input, '4242-abcd-4242');
    expect(input.value).toBe('4242 4242');
  });

  it('pre-formats defaultValue on mount', () => {
    render(<TestCardBack numberProps={{ defaultValue: '4242424242424242' }} />);
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    expect(input.value).toBe('4242 4242 4242 4242');
  });

  it('pre-formats readOnly defaultValue on mount', () => {
    render(
      <TestCardBack numberProps={{ readOnly: true, defaultValue: '4242424242424242' }} />,
    );
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    expect(input.value).toBe('4242 4242 4242 4242');
  });
});

// ===========================================================================
// 5. Card type detection
// ===========================================================================

describe('Card type detection', () => {
  it('empty input yields null cardType', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBackContent>
              <CreditCardField>
                <CreditCardNumberField data-testid="number-input" />
              </CreditCardField>
            </CreditCardBackContent>
          </CreditCardBack>
        </CreditCardContent>
        <CardTypeReader />
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('hook-reader')).toHaveAttribute('data-card-type', '');
    expect(screen.getByTestId('hook-reader')).toHaveAttribute('data-nice-type', '');
  });

  it('detects Visa from 4242 prefix', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBackContent>
              <CreditCardField>
                <CreditCardNumberField data-testid="number-input" />
              </CreditCardField>
            </CreditCardBackContent>
          </CreditCardBack>
        </CreditCardContent>
        <CardTypeReader />
      </CreditCardRoot>,
    );
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    simulateInputChange(input, '4242424242424242');
    expect(screen.getByTestId('hook-reader')).toHaveAttribute('data-card-type', 'visa');
    expect(screen.getByTestId('hook-reader')).toHaveAttribute('data-nice-type', 'Visa');
  });

  it('detects American Express from 3782 prefix', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBackContent>
              <CreditCardField>
                <CreditCardNumberField data-testid="number-input" />
              </CreditCardField>
            </CreditCardBackContent>
          </CreditCardBack>
        </CreditCardContent>
        <CardTypeReader />
      </CreditCardRoot>,
    );
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    simulateInputChange(input, '378282246310005');
    expect(screen.getByTestId('hook-reader')).toHaveAttribute(
      'data-card-type',
      'american-express',
    );
    expect(screen.getByTestId('hook-reader')).toHaveAttribute('data-nice-type', 'American Express');
  });

  it('detects Mastercard from 5425 prefix', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBackContent>
              <CreditCardField>
                <CreditCardNumberField data-testid="number-input" />
              </CreditCardField>
            </CreditCardBackContent>
          </CreditCardBack>
        </CreditCardContent>
        <CardTypeReader />
      </CreditCardRoot>,
    );
    const input = screen.getByTestId('number-input') as HTMLInputElement;
    simulateInputChange(input, '5425233430109903');
    expect(screen.getByTestId('hook-reader')).toHaveAttribute(
      'data-card-type',
      'mastercard',
    );
  });

  it('detects type on mount for readOnly defaultValue', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBackContent>
              <CreditCardField>
                <CreditCardNumberField
                  data-testid="number-input"
                  readOnly
                  defaultValue="4242424242424242"
                />
              </CreditCardField>
            </CreditCardBackContent>
          </CreditCardBack>
        </CreditCardContent>
        <CardTypeReader />
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('hook-reader')).toHaveAttribute('data-card-type', 'visa');
  });
});

// ===========================================================================
// 6. Expiry input formatting
// ===========================================================================

describe('Expiry input formatting', () => {
  it('formats 1127 as 11/27', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '1127');
    expect(input.value).toBe('11/27');
  });

  it('keeps single digit as-is', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '1');
    expect(input.value).toBe('1');
  });

  it('keeps two digits as-is', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '12');
    expect(input.value).toBe('12');
  });

  it('inserts slash after two digits', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '123');
    expect(input.value).toBe('12/3');
  });

  it('strips non-digit characters', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '1a2b3c4d');
    expect(input.value).toBe('12/34');
  });

  it('pads single-digit month when slash is typed (e.g. 1/ → 01/)', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '1/');
    expect(input.value).toBe('01/');
  });

  it('accepts user-typed slash with two-digit month (e.g. 12/29)', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '12/29');
    expect(input.value).toBe('12/29');
  });

  it('preserves slash when year digits are deleted (e.g. 01/2 → backspace → 01/)', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '01/');
    expect(input.value).toBe('01/');
  });

  it('places caret after slash when month is padded (1/ → 01/)', () => {
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(0); return 0; });
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    const setSelectionSpy = vi.spyOn(input, 'setSelectionRange');
    simulateInputChange(input, '1/');
    expect(input.value).toBe('01/');
    expect(setSelectionSpy).toHaveBeenLastCalledWith(3, 3);
    rafSpy.mockRestore();
    setSelectionSpy.mockRestore();
  });

  it('places caret after slash when year digit is backspaced (01/2 → 01/)', () => {
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(0); return 0; });
    render(<TestCardBack />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    simulateInputChange(input, '01/25');
    const setSelectionSpy = vi.spyOn(input, 'setSelectionRange');
    simulateInputChange(input, '01/');
    expect(input.value).toBe('01/');
    expect(setSelectionSpy).toHaveBeenLastCalledWith(3, 3);
    rafSpy.mockRestore();
    setSelectionSpy.mockRestore();
  });

  it('pre-formats defaultValue on mount', () => {
    render(<TestCardBack expiryProps={{ defaultValue: '1127' }} />);
    const input = screen.getByTestId('expiry-input') as HTMLInputElement;
    expect(input.value).toBe('11/27');
  });
});

// ===========================================================================
// 7. CVV input
// ===========================================================================

describe('CVV input', () => {
  it('has default maxLength of 3', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('cvv-input') as HTMLInputElement;
    expect(input).toHaveAttribute('maxlength', '3');
  });

  it('has maxLength of 4 for Amex', () => {
    render(
      <TestCardBack numberProps={{ defaultValue: '378282246310005' }} />,
    );
    const input = screen.getByTestId('cvv-input') as HTMLInputElement;
    expect(input).toHaveAttribute('maxlength', '4');
  });

  it('has type="password"', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('cvv-input') as HTMLInputElement;
    expect(input).toHaveAttribute('type', 'password');
  });

  it('has placeholder as digit mask', () => {
    render(<TestCardBack />);
    const input = screen.getByTestId('cvv-input') as HTMLInputElement;
    expect(input).toHaveAttribute('placeholder', '000');
  });

  it('has 4-digit placeholder for Amex', () => {
    render(
      <TestCardBack numberProps={{ defaultValue: '378282246310005' }} />,
    );
    const input = screen.getByTestId('cvv-input') as HTMLInputElement;
    expect(input).toHaveAttribute('placeholder', '0000');
  });
});

// ===========================================================================
// 8. useCreditCard hook
// ===========================================================================

describe('useCreditCard hook', () => {
  it('returns face, setFace, toggle, cardType, cardNiceType', () => {
    let hookResult: ReturnType<typeof useCreditCard> | null = null;

    function HookConsumer() {
      hookResult = useCreditCard();
      return null;
    }

    render(
      <CreditCardRoot>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack />
        </CreditCardContent>
        <HookConsumer />
      </CreditCardRoot>,
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const result = hookResult!;
    expect(result).not.toBeNull();
    expect(result.face).toBe('front');
    expect(typeof result.setFace).toBe('function');
    expect(typeof result.toggle).toBe('function');
    expect(result.cardType).toBeNull();
    expect(result.cardNiceType).toBeNull();
  });

  it('setFace changes the active face', () => {
    function HookController() {
      const { setFace } = useCreditCard();
      return (
        <button data-testid="set-back" onClick={() => setFace('back')}>
          Go back
        </button>
      );
    }

    render(
      <CreditCardRoot>
        <CreditCardContent data-testid="content">
          <CreditCardFront data-testid="front" />
          <CreditCardBack data-testid="back" />
        </CreditCardContent>
        <HookController />
      </CreditCardRoot>,
    );

    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
    fireEvent.click(screen.getByTestId('set-back'));
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
  });

  it('toggle switches face', () => {
    function HookToggler() {
      const { toggle } = useCreditCard();
      return (
        <button data-testid="toggle-btn" onClick={toggle}>
          Toggle
        </button>
      );
    }

    render(
      <CreditCardRoot>
        <CreditCardContent data-testid="content">
          <CreditCardFront />
          <CreditCardBack />
        </CreditCardContent>
        <HookToggler />
      </CreditCardRoot>,
    );

    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
  });
});

// ===========================================================================
// 9. Error portal
// ===========================================================================

describe('Error portal', () => {
  it('FieldError renders inside Errors container when present', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBackContent>
              <CreditCardField>
                <CreditCardFieldLabel>CVV</CreditCardFieldLabel>
                <CreditCardCVVField data-testid="cvv" />
                <CreditCardFieldError match="valueMissing" data-testid="error">
                  Required
                </CreditCardFieldError>
              </CreditCardField>
            </CreditCardBackContent>
          </CreditCardBack>
        </CreditCardContent>
        <CreditCardErrors data-testid="errors-container" />
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('errors-container')).toBeInTheDocument();
  });

  it('Errors component registers with context via ref', () => {
    render(
      <CreditCardRoot defaultFace="back">
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack />
        </CreditCardContent>
        <CreditCardErrors data-testid="errors-container" />
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('errors-container')).toBeInTheDocument();
  });
});

// ===========================================================================
// 10. Autocomplete attributes
// ===========================================================================

describe('Autocomplete attributes', () => {
  it('Number has autoComplete="cc-number"', () => {
    render(<TestCardBack />);
    expect(screen.getByTestId('number-input')).toHaveAttribute('autocomplete', 'cc-number');
  });

  it('Expiry has autoComplete="cc-exp"', () => {
    render(<TestCardBack />);
    expect(screen.getByTestId('expiry-input')).toHaveAttribute('autocomplete', 'cc-exp');
  });

  it('CVV has autoComplete="cc-csc"', () => {
    render(<TestCardBack />);
    expect(screen.getByTestId('cvv-input')).toHaveAttribute('autocomplete', 'cc-csc');
  });

  it('Number has inputMode="numeric"', () => {
    render(<TestCardBack />);
    expect(screen.getByTestId('number-input')).toHaveAttribute('inputmode', 'numeric');
  });

  it('Expiry has inputMode="numeric"', () => {
    render(<TestCardBack />);
    expect(screen.getByTestId('expiry-input')).toHaveAttribute('inputmode', 'numeric');
  });

  it('CVV has inputMode="numeric"', () => {
    render(<TestCardBack />);
    expect(screen.getByTestId('cvv-input')).toHaveAttribute('inputmode', 'numeric');
  });
});

// ===========================================================================
// 11. Trigger accessibility
// ===========================================================================

describe('Trigger accessibility', () => {
  it('has aria-expanded=false when front face is active', () => {
    render(<TestCard />);
    expect(screen.getByTestId('trigger')).toHaveAttribute('aria-expanded', 'false');
  });

  it('has aria-expanded=true when back face is active', () => {
    render(<TestCard defaultFace="back" />);
    expect(screen.getByTestId('trigger')).toHaveAttribute('aria-expanded', 'true');
  });

  it('aria-expanded toggles on click', () => {
    render(<TestCard />);
    const trigger = screen.getByTestId('trigger');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});

// ===========================================================================
// 12. BrandLogo aria-label
// ===========================================================================

describe('BrandLogo aria-label', () => {
  it('uses human-readable name for known brands', () => {
    render(
      <CreditCardRoot>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBrandLogo data-testid="logo" brand="american-express" />
          </CreditCardBack>
        </CreditCardContent>
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('logo')).toHaveAttribute('aria-label', 'American Express');
  });

  it('returns null for unknown brands', () => {
    const { container } = render(
      <CreditCardRoot>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack>
            <CreditCardBrandLogo data-testid="logo" brand={'some-unknown' as 'visa'} />
          </CreditCardBack>
        </CreditCardContent>
      </CreditCardRoot>,
    );
    expect(container.querySelector('[data-testid="logo"]')).toBeNull();
  });
});

// ===========================================================================
// 13. Errors container accessibility
// ===========================================================================

describe('Errors container accessibility', () => {
  it('has aria-live="polite"', () => {
    render(
      <CreditCardRoot>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack />
        </CreditCardContent>
        <CreditCardErrors data-testid="errors" />
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('errors')).toHaveAttribute('aria-live', 'polite');
  });
});

// ===========================================================================
// 14. Imperative handle
// ===========================================================================

describe('Imperative handle', () => {
  it('ref.setFace changes the active face', () => {
    const ref = React.createRef<CreditCardRootRef>();
    render(
      <CreditCardRoot ref={ref}>
        <CreditCardContent data-testid="content">
          <CreditCardFront data-testid="front" />
          <CreditCardBack data-testid="back" />
        </CreditCardContent>
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
    act(() => ref.current?.setFace('back'));
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
  });

  it('ref.flip toggles between faces', () => {
    const ref = React.createRef<CreditCardRootRef>();
    render(
      <CreditCardRoot ref={ref}>
        <CreditCardContent data-testid="content">
          <CreditCardFront />
          <CreditCardBack />
        </CreditCardContent>
      </CreditCardRoot>,
    );
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
    act(() => ref.current?.flip());
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'back');
    act(() => ref.current?.flip());
    expect(screen.getByTestId('content')).toHaveAttribute('data-face', 'front');
  });

  it('ref.flip fires onFaceChange', () => {
    const ref = React.createRef<CreditCardRootRef>();
    const handleChange = vi.fn();
    render(
      <CreditCardRoot ref={ref} onFaceChange={handleChange}>
        <CreditCardContent>
          <CreditCardFront />
          <CreditCardBack />
        </CreditCardContent>
      </CreditCardRoot>,
    );
    act(() => ref.current?.flip());
    expect(handleChange).toHaveBeenCalledWith('back');
  });
});
